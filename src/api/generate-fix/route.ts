import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
  try {
    const { cveUrl, apiKey } = await request.json();

    if (!apiKey) {
      return NextResponse.json(
        {
          fixes: 'API key not found. Please add your OpenAI API key.',
          workarounds: 'Please check the CVE details for manual workarounds.',
        },
        { status: 401 },
      );
    }

    const openai = new OpenAI({ apiKey });

    // Fetch CVE content
    const cveResponse = await fetch(cveUrl);
    const html = await cveResponse.text();

    const content = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

    const prompt = `Given the following CVE content, provide two concise sentences:
1. First sentence: List any version updates or fixes required (if none, state that).
2. Second sentence: Suggest any workarounds or mitigations (if none, state that).

CVE Content:
${content}

Format the response as a JSON object with two fields:
{
  "fixes": "First sentence about fixes",
  "workarounds": "Second sentence about workarounds"
}`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'You are a security expert helping developers fix vulnerabilities. Provide clear, concise, and actionable advice.',
        },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
    });

    const aiResponse = JSON.parse(completion.choices[0].message.content || '{}');
    return NextResponse.json(aiResponse);
  } catch (error: any) {
    console.error('Error generating fix:', error);

    // If the error came from OpenAI API
    if (error.status === 401 || error.code === 'invalid_api_key') {
      return NextResponse.json(
        {
          fixes: 'Invalid API key. Please enter a valid OpenAI API key.',
          workarounds: 'Get your API key from https://platform.openai.com/account/api-keys',
        },
        { status: 401 },
      );
    }

    if (error.status === 429 || error.code === 'insufficient_quota') {
      return NextResponse.json(
        {
          fixes: 'Your API key has no credits left.',
          workarounds: 'Please add billing details or purchase credits at https://platform.openai.com/account/billing',
        },
        { status: 429 },
      );
    }

    return NextResponse.json(
      {
        fixes: 'Unable to generate fix suggestions at this time.',
        workarounds: 'Please check the CVE details for manual workarounds.',
      },
      { status: 500 },
    );
  }
}
