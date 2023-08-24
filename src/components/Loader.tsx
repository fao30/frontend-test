import { BeatLoader } from "react-spinners";

type TProps = {
  min?: string;
};

export default function Loader({ min }: TProps): React.JSX.Element {
  return (
    <section
      className={`flex items-center justify-center bg-white w-full ${
        min ? min : "min-h-[50vh]"
      }`}
    >
      <BeatLoader color="#1A334F" size={15} className="drop-shadow" />
    </section>
  );
}
