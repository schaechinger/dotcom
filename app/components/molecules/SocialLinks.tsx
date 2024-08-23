import SocialLink from '@components/atoms/SocialLink';
import GitHub from '@components/icons/GitHub';
import Instagram from '@components/icons/Instagram';
import LinkedIn from '@components/icons/LinkedIn';
import Xing from '@components/icons/Xing';

const SocialLinks = () => (
  <div className="text-2xl flex gap-6 -mx-1">
    <SocialLink
      href="https://linkedin.com/in/schaechinger"
      className="hover:dark:text-dark-50 hover:bg-social-linkedin"
      title="LinkedIn"
      icon={<LinkedIn />}
    />
    <SocialLink
      href="https://xing.com/profile/Manuel_Schaechinger"
      className="hover:text-dark-50 hover:dark:text-dark-50 hover:bg-social-xing"
      title="Xing"
      icon={<Xing />}
    />
    <SocialLink
      href="https://github.com/schaechinger"
      className="hover:text-dark-50 hover:dark:text-social-github hover:bg-social-github hover:dark:bg-dark-50"
      title="GitHub"
      icon={<GitHub />}
    />
    <SocialLink
      href="https://instagram.com/theschaechinger"
      className="hover:text-dark-50 hover:dark:text-dark-50 hover:bg-social-instagram"
      title="Instagram"
      icon={<Instagram />}
    />
  </div>
);

export default SocialLinks;
