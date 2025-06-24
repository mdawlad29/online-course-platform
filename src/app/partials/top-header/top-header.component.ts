import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navLinks } from '../../data/nav-links';

@Component({
  selector: 'app-top-header',
  imports: [RouterModule, NgFor],
  standalone: true,
  templateUrl: './top-header.component.html',
})
export class TopHeaderComponent {
  navLinks = navLinks;
}
