import GitHub from '@components/icons/GitHub';
import Instagram from '@components/icons/Instagram';
import LinkedIn from '@components/icons/LinkedIn';
import Xing from '@components/icons/Xing';

const SocialLinks = () => (
  <div className="text-xl flex gap-4 -mx-1">
    <a
      href="https://linkedin.com/in/schaechinger"
      target="_blank"
      className="w-7 h-7 flex items-center justify-center rounded-full hover:text-dark-50 hover:dark:text-dark-50 hover:bg-social-linkedin"
      title="LinkedIn"
    >
      <LinkedIn className="" />
    </a>
    <a
      href="https://xing.com/profile/Manuel_Schaechinger"
      target="_blank"
      className="w-7 h-7 flex items-center justify-center rounded-full hover:text-dark-50 hover:dark:text-dark-50 hover:bg-social-xing"
      title="Xing"
    >
      <Xing />
    </a>
    <a
      href="https://github.com/schaechinger"
      target="_blank"
      className="w-7 h-7 flex items-center justify-center rounded-full hover:text-dark-50 hover:dark:text-social-github hover:bg-social-github hover:dark:bg-dark-50"
      title="GitHub"
    >
      <GitHub />
    </a>
    <a
      href="https://instagram.com/theschaechinger"
      target="_blank"
      className="w-7 h-7 flex items-center justify-center rounded-full hover:text-dark-50 hover:dark:text-dark-50 hover:bg-social-instagram"
      title="Instagram"
    >
      <Instagram />
    </a>
  </div>
);

export default SocialLinks;
