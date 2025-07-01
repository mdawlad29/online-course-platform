import { Component } from '@angular/core';
import { SignInSectionComponent } from '../../components/signup-signin-section/signup-signin-section.component';

@Component({
  selector: 'app-signin',
  imports: [SignInSectionComponent],
  template: `<app-signin-section />`,
})
export class SigninComponent {}
