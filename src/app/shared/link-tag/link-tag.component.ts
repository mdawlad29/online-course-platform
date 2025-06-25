import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-tag',
  imports: [RouterLink, NgClass],
  templateUrl: './link-tag.component.html',
})
export class LinkTagComponent {
  @Input() title?: string = '';
  @Input() class?: string = 'text-xs capitalize text-secondary-100 block';
  @Input() link?: string = '/';
}
