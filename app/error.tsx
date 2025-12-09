'use client';

import Heading from '@components/atoms/Heading';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';

const ServerError = () => (
  <PageContainer name="error">
    <PageSection id="error" first>
      <Heading level={1} title="Content not Available" />

      <p className="mb-4">
        It looks like the content cannot be shown. Please try again in a moment.
      </p>

      <p>
        <LinkButton href="/" label="Go to homepage" />
      </p>
    </PageSection>
  </PageContainer>
);

export default ServerError;
