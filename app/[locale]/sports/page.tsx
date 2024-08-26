import { unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import LinkButton from '@/app/components/atoms/LinkButton';
import ContestParticipation from '@/app/components/molecules/ContestParticipation';

const SportsPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);

  return (
    <PageContainer name="sports">
      <PageSection id="sports" first>
        <h1 className="text-h1">Meine sportlichen Erfolge</h1>

        <p>Durch meine Leidenschaft zum Ausdauersport ist auch das Projekt Medal Monday entspanden, das ich seit 2022 zusammen mit Maik Paulus vorantreibe um allen Sportlern ein digitales Zuhause für ihre Wettkämpfe bereitzustellen.</p>

        <p className="mt-4">
          <LinkButton href="https://www.medalmonday.de/profil/schaechinger">Zu Medal Monday</LinkButton>
        </p>
      </PageSection>

      <PageSection id="marathons">
        <h2 className="text-h2">Marathons</h2>

        <p>Seit 2017 trete ich regelmäßig bei Marathons an. Mich reizt an dieser Distanz die lange Vorbereitung auf einen einzigen Tag und die mentalte Herausforderung, das letzte Viertel durchzuhalen und sich zu neuen Bestleistungen zu bringen.</p>

        <p className="mt-2">Für mein großes Ziel, die sechs Major Marathons in Tokio, Boston, London, Berlin, Chicago und New York City zu laufen fehlt mir nur noch ein Start in Boston.</p>

        <ContestParticipation
          event="BMW Berlin Marathon 2017"
          date="2017-09-24"
          sport="running"
          time="3:48:10"
        />
        <ContestParticipation
          event="Hamburg 2018"
          date="2018-04-29"
          sport="running"
          time="3:52:40"
        />
        <ContestParticipation
          event="Chicago 2018"
          date="2018-10-07"
          sport="running"
          time="3:36:31"
        />
        <ContestParticipation
          event="Frankfurt 2018"
          date="2018-10-28"
          sport="running"
          time="3:41:21"
        />
        <ContestParticipation
          event="Berlin 2019"
          date="2019-09-29"
          sport="running"
          time="3:27:28"
        />
        <ContestParticipation
          event="New York City 2019"
          date="2019-11-03"
          sport="running"
          time="3:46:56"
        />
        <ContestParticipation
          event="London 2021"
          date="2021-10-03"
          sport="running"
          time="4:13:11"
        />
        <ContestParticipation
          event="Tokio 2023"
          date="2023-03-05"
          sport="running"
          time="4:03:54"
        />
        <ContestParticipation
          event="Datev Challenge Roth 2024 (Staffel)"
          date="2024-07-07"
          sport="running"
          time="3:45:39"
        />
      </PageSection>
    </PageContainer>
  )
};

export default SportsPage;
