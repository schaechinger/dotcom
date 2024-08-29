type Props = {
  json: any;
};

const JsonLd = ({ json }: Props) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
  />
);

export default JsonLd;
