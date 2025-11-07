import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Scan, Globe, AlertTriangle, FileX } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero-bg.mp4" // 👉 place your video file in the public/videos folder
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Security Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Always Ready To
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Secure
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Modern cyber threats require modern solutions. SecureAI Suite integrates essential cybersecurity tools into one powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="min-w-48">
              Get Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-48">
              Learn More
            </Button>
          </div>

          {/* Security Tools Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:bg-card/50 transition-all duration-300">
              <Scan className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Vulnerability Scanner</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:bg-card/50 transition-all duration-300">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Subdomain Finder</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:bg-card/50 transition-all duration-300">
              <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Phishing Detector</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:bg-card/50 transition-all duration-300">
              <FileX className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Malware Scanner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
