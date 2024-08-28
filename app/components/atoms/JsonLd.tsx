import Script from 'next/script';

type Props = {
  json: any;
};

const JsonLd = ({ json }: Props) => (
  <Script type="application/ld+json" id="jsonld">{JSON.stringify(json)}</Script>
);

export default JsonLd;
