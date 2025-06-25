import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { FacebookIcon } from '../../icons/app-icon-facebook';
import { InstagramIcon } from '../../icons/app-icon-instagram';
import { TwitterIcon } from '../../icons/app-icon-twitter';
import { YoutubeIcon } from '../../icons/app-icon-youtube';
import { LinkedinIcon } from '../../icons/app-icon-linkedin';
import { NgClass, NgComponentOutlet, NgFor } from '@angular/common';
import { socialLinks } from '../../data/social-links';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { LinkTagComponent } from '../../shared/link-tag/link-tag.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    RouterLink,
    NgComponentOutlet,
    LogoComponent,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
    HeadingComponent,
    LinkTagComponent,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialLinks = socialLinks;
  @Input() linkDesign: string =
    'hover:text-primary block text-sm text-secondary-100 duration-300 ease-in-out  capitalize mb-2';
}
