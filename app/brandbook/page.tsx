import { type Metadata } from 'next';

import { clearSans } from '@app/font';
import HistoryItemTypeLabel from '@components/atoms/HistoryItemTypeLabel';
import Link from '@components/atoms/Link';
import LinkButton from '@components/atoms/LinkButton';
import NavigationItem from '@components/atoms/NavigationItem';
import TechItem from '@components/atoms/TechItem';
import MessageBanner from '@components/molecules/MessageBanner';

import SplitSection from './SplitSection';

export const metadata: Metadata = {
  title: 'Brandbook – Manuel Schächinger',
  robots: {
    index: false,
  },
};

const BrandBook = () => {
  return (
    <html className={clearSans.className} lang="en">
      <body className="w-full max-w-screen-xl mx-auto font-sans">
        <SplitSection id="headings" label="Headings">
          <h1 className="text-h1">Heading H1</h1>
          <h2 className="text-h2">Heading H2</h2>
          <h3 className="text-h3">Heading H3</h3>
        </SplitSection>

        <SplitSection id="text" label="Text">
          <div className="flex flex-col gap-2">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.</p>
          </div>
        </SplitSection>
        <SplitSection id="links" label="Links">
          <div className="flex flex-col gap-2">
            <Link href="#">Standalone link</Link>
            <Link href="https://google.com">External link</Link>
            <LinkButton href="#">Link button</LinkButton>
            <LinkButton href="#" back>Back button</LinkButton>

            <p>There is an <Link href="#" inline>inline link</Link> in this paragraph.</p>
          </div>
        </SplitSection>

        <SplitSection id="banners" label="Banners">
          <div className="flex-1 flex flex-col gap-4">
            <MessageBanner text="Default message banner" />
            <MessageBanner title="Success" text="Your inquiry has been submitted" success />
            <MessageBanner title="Error" text="The project list could not be loaded" error />
          </div>
        </SplitSection>

        <SplitSection id="navigation" label="Navigation">
          <div className="flex flex-col gap-2">
            <NavigationItem href="#navigation" label="Navigation items" />
            <NavigationItem href="#navigation" label="Active navigation item" active />
          </div>
        </SplitSection>

        <SplitSection id="tech" label="Tech Item">
          <ul className="flex gap-2">
            <TechItem>JavaScript</TechItem>
            <TechItem>Node.js</TechItem>
            <TechItem>Next.js</TechItem>
          </ul>
        </SplitSection>

        <SplitSection id="project-types" label="Project Types">
          <ul className="flex flex-col gap-2">
            <li><HistoryItemTypeLabel type="founder" label colored /></li>
            <li><HistoryItemTypeLabel type="freelance" label /></li>
            <li><HistoryItemTypeLabel type="private" colored /></li>
            <li><HistoryItemTypeLabel type="employee" /></li>
            <li><HistoryItemTypeLabel type="education" /></li>
          </ul>
        </SplitSection>

        <SplitSection id="colors" label="Color Palette">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-dark" title="primary" />
              <div className="w-8 h-8 rounded-full bg-primary-light" title="discreet-shade" />
              <div className="w-8 h-8 rounded-full bg-discreet-light" title="discreet-light" />
              <div className="w-8 h-8 rounded-full bg-discreet-egg" title="discreet-egg" />
              <div className="w-8 h-8 rounded-full bg-squash-red" title="squash-red" />
              <div className="w-8 h-8 rounded-full bg-squash-green" title="sqash-green" />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-warning-200" title="warning-200" />
              <div className="w-8 h-8 rounded-full bg-warning-300" title="warning-300" />
              <div className="w-8 h-8 rounded-full bg-warning-500" title="warning-500" />
              <div className="w-8 h-8 rounded-full bg-warning-700" title="warning-700" />
              <div className="w-8 h-8 rounded-full bg-warning-800" title="warning-800" />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-dark-50" title="dark-50" />
              <div className="w-8 h-8 rounded-full bg-dark-200" title="dark-200" />
              <div className="w-8 h-8 rounded-full bg-dark-600" title="dark-600" />
              <div className="w-8 h-8 rounded-full bg-dark-700" title="dark-700" />
              <div className="w-8 h-8 rounded-full bg-dark-800" title="dark-800" />
              <div className="w-8 h-8 rounded-full bg-dark-950" title="dark-950" />
            </div>
          </div>
        </SplitSection>

        <div className="mt-10 mb-6 px-4">&copy; {new Date().getFullYear()} Manuel Schächinger.</div>
      </body>
    </html>
  );
};

export default BrandBook;
