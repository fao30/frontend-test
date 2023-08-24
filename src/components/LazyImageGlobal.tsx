import { useState, useEffect, forwardRef, Ref, Fragment } from "react";
import { PuffLoader } from "react-spinners";

interface LazyImageProps {
  src: string;
  className?: string;
  alt: string;
  onClick?: () => void;
}

const LazyImageGlobal = forwardRef<HTMLDivElement, LazyImageProps>(
  ({ src, className, alt, onClick }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
      };
      img.src = src;
    }, [src]);

    useEffect(() => {
      if (src || !src) setImageLoaded(false);
    }, [src]);

    return (
      <Fragment>
        <div
          onClick={onClick}
          style={{ display: imageLoaded ? "none" : "" }}
          className={`${className}`}
          ref={ref as Ref<HTMLDivElement>}
        >
          <figure className="flex flex-col items-center justify-center w-full h-full from-antiflash text-spacecadet via-spacecadet/30  to-antiflash bg-gradient-to-r bg-animate">
            <h5 className="leading-5 font-grandesign drop-shadow">
              Hebronstar
            </h5>
            <p className="!font-grandesign p-smaller text-left">
              Strategy Consultants
            </p>
            <PuffLoader className="mt-2" size={40} color="#1A334F" />
          </figure>
        </div>
        <img
          onClick={onClick}
          src={src}
          style={{ display: !imageLoaded ? "none" : "" }}
          className={className}
          alt={alt}
          ref={ref as Ref<HTMLImageElement>}
        />
      </Fragment>
    );
  }
);

export default LazyImageGlobal;
