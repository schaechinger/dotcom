import SocialLink from '@components/atoms/SocialLink';
import GitHub from '@components/icons/GitHub';
import Instagram from '@components/icons/Instagram';
import LinkedIn from '@components/icons/LinkedIn';
import Xing from '@components/icons/Xing';

const SocialLinks = () => (
  <div className="flex flex-col gap-2 sm:gap-0 -ml-1">
    <SocialLink
      href="https://linkedin.com/in/schaechinger"
      className="hover:text-social-linkedin hover:dark:text-social-linkedin"
      iconClassName="group-hover:text-dark-50 group-hover:dark:text-dark-50 group-hover:bg-social-linkedin"
      title="LinkedIn"
      icon={<LinkedIn />}
    />
    <SocialLink
      href="https://xing.com/profile/Manuel_Schaechinger"
      className="hover:text-social-xing hover:dark:text-social-xing"
      iconClassName="group-hover:text-dark-50 group-hover:dark:text-dark-50 group-hover:bg-social-xing"
      title="Xing"
      icon={<Xing />}
    />
    <SocialLink
      href="https://github.com/schaechinger"
      className="hover:text-social-github hover:dark:text-dark-50"
      iconClassName="group-hover:text-dark-50 group-hover:dark:text-social-github group-hover:bg-social-github group-hover:dark:bg-dark-50"
      title="GitHub"
      icon={<GitHub />}
    />
    <SocialLink
      href="https://instagram.com/theschaechinger"
      className="hover:text-social-instagram hover:dark:text-social-instagram"
      iconClassName="group-hover:text-dark-50 group-hover:dark:text-dark-50 group-hover:bg-social-instagram"
      title="Instagram"
      icon={<Instagram />}
    />
  </div>
);

export default SocialLinks;
