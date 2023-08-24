import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  content?: string;
};

export default function Head({ title, content }: Props): React.JSX.Element {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={
          content
            ? `${content} - fronted-test`
            : "fronted-test"
        }
      />
      <meta property="og:type" content="article" />
      <meta
        name="keywords"
        content={
          content
            ? `${content} - fronted-test`
            : "fronted-test"
        }
      />
      <meta
        property="og:title"
        content={title ? title : "fronted-test"}
      />
      <meta
        property="og:description"
        content={
          content
            ? `${content} - fronted-test`
            : "fronted-test"
        }
      />
    </Helmet>
  );
}
