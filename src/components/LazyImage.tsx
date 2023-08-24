import { useState, useEffect, forwardRef, Ref, Fragment } from "react";

// miscellaneous
import { Blurhash } from "react-blurhash";

interface LazyImageProps {
  src: string;
  hash: string;
  className?: string;
  alt: string;
}

const LazyImage = forwardRef<HTMLDivElement, LazyImageProps>(
  ({ src, className, hash, alt }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
      };
      img.src = src;
    }, [src]);

    return (
      <Fragment>
        <div
          style={{ display: imageLoaded ? "none" : "" }}
          className={`animate-pulse ${className}`}
          ref={ref as Ref<HTMLDivElement>}
        >
          <Blurhash
            hash={hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
        <img
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

export default LazyImage;
