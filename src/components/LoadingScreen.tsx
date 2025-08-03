import { useEffect, useState } from "react";
import { Shield, Scan, Globe, AlertTriangle, FileX, Lock, Eye, Search } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentScan, setCurrentScan] = useState("Initializing SecureAI...");
  
  const scanSteps = [
    "Initializing SecureAI...",
    "Loading Security Modules...",
    "Scanning for Vulnerabilities...",
    "Checking Network Security...",
    "Analyzing Threat Patterns...",
    "Finalizing Security Suite..."
  ];

  const securityIcons = [Shield, Scan, Globe, AlertTriangle, FileX, Lock, Eye, Search];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        const stepIndex = Math.floor(newProgress / 17);
        if (stepIndex < scanSteps.length) {
          setCurrentScan(scanSteps[stepIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      {/* Floating security icons */}
      <div className="absolute inset-0 overflow-hidden">
        {securityIcons.map((Icon, index) => (
          <Icon
            key={index}
            className={`absolute text-primary/20 animate-float`}
            size={24}
            style={{
              left: `${10 + (index * 12)}%`,
              top: `${20 + (index % 3) * 25}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${4 + index}s`
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 animate-pulse-glow">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">SecureAI Suite</h1>
          <p className="text-muted-foreground">Next-Generation Cybersecurity Platform</p>
        </div>

        {/* Scanning animation */}
        <div className="mb-8">
          <div className="relative">
            {/* Scan line */}
            <div className="h-32 w-full bg-card/50 rounded-lg border border-border/50 overflow-hidden relative">
              <div 
                className="absolute top-0 left-0 h-full w-1 bg-primary animate-pulse"
                style={{
                  left: `${progress}%`,
                  transition: 'left 0.1s ease-out'
                }}
              ></div>
              
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex h-4 gap-1 mt-1">
                    {[...Array(12)].map((_, j) => (
                      <div 
                        key={j} 
                        className={`w-4 h-2 rounded-sm ${
                          (i * 12 + j) < (progress * 1.2) ? 'bg-primary' : 'bg-muted/30'
                        }`}
                        style={{
                          animationDelay: `${(i * 12 + j) * 0.02}s`
                        }}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{currentScan}</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-primary rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Security status indicators */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className={`p-2 rounded border ${progress > 20 ? 'border-success bg-success/10 text-success' : 'border-muted bg-muted/10 text-muted-foreground'}`}>
            <Shield className="w-4 h-4 mx-auto mb-1" />
            <div>Security Core</div>
          </div>
          <div className={`p-2 rounded border ${progress > 40 ? 'border-success bg-success/10 text-success' : 'border-muted bg-muted/10 text-muted-foreground'}`}>
            <Scan className="w-4 h-4 mx-auto mb-1" />
            <div>Threat Scanner</div>
          </div>
          <div className={`p-2 rounded border ${progress > 60 ? 'border-success bg-success/10 text-success' : 'border-muted bg-muted/10 text-muted-foreground'}`}>
            <Globe className="w-4 h-4 mx-auto mb-1" />
            <div>Network Monitor</div>
          </div>
          <div className={`p-2 rounded border ${progress > 80 ? 'border-success bg-success/10 text-success' : 'border-muted bg-muted/10 text-muted-foreground'}`}>
            <Lock className="w-4 h-4 mx-auto mb-1" />
            <div>Security Suite</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;