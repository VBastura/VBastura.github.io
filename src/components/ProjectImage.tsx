import React, { useState } from 'react';

interface ProjectImageProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[16/10]',
  children,
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative ${aspectRatioClass} overflow-hidden bg-slate-900 ${className}`}
      onClick={onClick}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-950 border border-dashed border-slate-800 text-slate-400">
          <span className="text-xs font-mono font-semibold text-slate-300 mb-1">{alt}</span>
          <span className="text-[11px] font-mono text-slate-500">{src || 'No image source defined'}</span>
        </div>
      )}
      {children}
    </div>
  );
};
