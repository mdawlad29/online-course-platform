import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-section',
  imports: [RouterLink],
  templateUrl: './signup.component.html',
})
export class SignupSectionComponent {}

@Component({
  selector: 'app-signin-section',
  imports: [RouterLink],
  templateUrl: './signin.component.html',
})
export class SignInSectionComponent {}
