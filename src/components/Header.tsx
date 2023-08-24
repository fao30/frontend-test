import LazyImage from "./LazyImage";

type Props = {
  title: string;
  img: string;
  hash: string;
};

export default function Header({ title, img, hash }: Props): React.JSX.Element {
  return (
    <figure className="relative overflow-hidden img-header">
      <LazyImage
        src={img}
        hash={hash}
        alt="Header Image - HebronStar"
        className="img-header"
      />
      <header className="absolute main-padding-x pb-normal bottom-0">
        <h2 className="md:h2 h3 heading text-white">{title}</h2>
      </header>
    </figure>
  );
}
