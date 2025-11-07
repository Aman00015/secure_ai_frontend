// components/FloatingBg.tsx
import { Shield, Scan, Globe, AlertTriangle, FileX, Lock, Eye, Search } from "lucide-react";

const FloatingBg = () => {
  const securityIcons = [Shield, Scan, Globe, AlertTriangle, FileX, Lock, Eye, Search];

  return (
    <div className="fixed inset-0 bg-background z-0">
      {/* Animated background - exact same as loading screen */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      {/* Floating security icons - exact same as loading screen */}
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
    </div>
  );
};

export default FloatingBg;