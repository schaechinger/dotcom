'use client';

import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';

const ServerError = () => (
  <PageContainer name="error">
    <PageSection id="error" first>
      <h1 className="text-h1">Content not Available</h1>

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
