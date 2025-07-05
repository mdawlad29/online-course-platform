import { Component } from '@angular/core';
import { AllInstructorComponent } from '../../components/instructor/instructor.component';

@Component({
  selector: 'app-instructor',
  imports: [AllInstructorComponent],
  template: `<app-all-instructor />`,
})
export class InstructorComponent {}
