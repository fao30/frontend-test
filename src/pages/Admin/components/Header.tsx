import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

type Props = {
  heading: string;
  subheading?: string;
  pathBack?: string;
};

export default function Header({
  heading,
  subheading,
  pathBack,
}: Props): React.JSX.Element {
  return (
    <header className="main-padding-x-admin pt-20 md:pt-24 pb-4 border-b-1 border-crayola">
      <section className="flex flex-col gap-4 text-spacecadet">
        <nav className="flex items-center gap-2">
          {pathBack ? (
            <Link to={pathBack}>
              <Icon icon="material-symbols:arrow-back-ios" width={25} />
            </Link>
          ) : null}
          <h3 className="h4 md:h3 heading font-argentcf select-none">
            {heading}
          </h3>
        </nav>
        <h5 className="font-argentcf self-end select-none">{subheading}</h5>
      </section>
    </header>
  );
}
