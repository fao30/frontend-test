import { BeatLoader } from "react-spinners";

type TProps = {
  min?: string;
};

export default function LoaderSpacecadet({ min }: TProps): React.JSX.Element {
  return (
    <section
      className={`${
        min ? min : "min-h-[50vh]"
      } flex items-center justify-center bg-spacecadet w-full`}
    >
      <BeatLoader color="white" size={15} className="drop-shadow" />
    </section>
  );
}
