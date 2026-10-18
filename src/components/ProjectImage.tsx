import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';

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
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [swappedExtension, setSwappedExtension] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setSwappedExtension(false);
  }, [src]);

  const handleError = () => {
    if (!swappedExtension && currentSrc) {
      if (currentSrc.endsWith('.jpg')) {
        setSwappedExtension(true);
        setCurrentSrc(currentSrc.replace(/\.jpg$/, '.png'));
        return;
      } else if (currentSrc.endsWith('.png')) {
        setSwappedExtension(true);
        setCurrentSrc(currentSrc.replace(/\.png$/, '.jpg'));
        return;
      }
    }
    setHasError(true);
  };

  return (
    <div
      className={`relative ${aspectRatioClass} overflow-hidden bg-slate-900 group ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {currentSrc && !hasError ? (
        <>
          <img
            src={currentSrc}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={handleError}
          />
          {onClick && (
            <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-2.5 py-1 rounded-md bg-black/80 text-white text-[11px] font-mono flex items-center gap-1 backdrop-blur-xs">
                <Maximize2 className="w-3 h-3" /> Full Resolution
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-slate-950 border border-dashed border-slate-800 text-slate-400 select-none">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-2">
            <ImageIcon className="w-4 h-4 text-blue-400/70" />
          </div>
          <span className="text-xs font-mono font-semibold text-slate-300 line-clamp-1 mb-1">{alt}</span>
          <span className="text-[10px] font-mono text-blue-400/90 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 truncate max-w-full">
            {src || 'images/<filename>'}
          </span>
          <span className="text-[10px] text-slate-500 mt-1 font-mono">Ready for file upload</span>
        </div>
      )}
      {children}
    </div>
  );
};

