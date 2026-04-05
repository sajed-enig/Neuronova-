import React from 'react';

interface ThemeWrapperProps {
  theme?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A wrapper component that applies theme-specific CSS variables
 * based on the course theme selected during creation.
 */
export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ 
  theme = 'default', 
  children, 
  className = '' 
}) => {
  return (
    <div data-theme={theme} className={`min-h-screen transition-colors duration-500 ${className}`}>
      {children}
    </div>
  );
};
