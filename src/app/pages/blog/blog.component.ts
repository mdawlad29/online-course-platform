import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/Banner/banner.component';

@Component({
  selector: 'app-blog',
  imports: [BannerComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent {}
