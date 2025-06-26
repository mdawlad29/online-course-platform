import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [RouterLink, HeadingComponent],
  templateUrl: './instructor.component.html',
})
export class InstructorComponent {}

@Component({
  selector: 'app-top-instructor',
  standalone: true,
  imports: [NgFor, RouterLink, HeadingComponent],
  templateUrl: './top-instructor.component.html',
})
export class TopInstructorComponent {}
