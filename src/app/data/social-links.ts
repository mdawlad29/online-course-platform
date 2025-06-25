import { FacebookIcon } from '../icons/app-icon-facebook';
import { InstagramIcon } from '../icons/app-icon-instagram';
import { LinkedinIcon } from '../icons/app-icon-linkedin';
import { TwitterIcon } from '../icons/app-icon-twitter';
import { YoutubeIcon } from '../icons/app-icon-youtube';

export interface SocialLinks {
  icon: any; // Component class
  url: string;
}

export const socialLinks: SocialLinks[] = [
  {
    icon: FacebookIcon,
    url: 'https://www.facebook.com/',
  },
  {
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/',
  },
  {
    icon: TwitterIcon,
    url: 'https://www.twitter.com/',
  },
  {
    icon: InstagramIcon,
    url: 'https://www.instagram.com/',
  },
  {
    icon: YoutubeIcon,
    url: 'https://www.youtube.com/',
  },
];
