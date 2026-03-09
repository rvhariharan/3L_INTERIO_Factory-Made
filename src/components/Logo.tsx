import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'light' }) => {
  // Brand colors

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <img
        src="/logo/33L_HD_logo_cropped.jpg"
        alt="3L Interio Logo"
        className="w-48 sm:w-56 lg:w-64 h-auto max-h-16 object-contain flex-shrink-0 rounded-sm"
      />
    </div>
  );
};

export default Logo;