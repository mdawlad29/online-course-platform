import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailsComponent } from './components/all-courses/all-courses.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CartComponent } from './pages/cart/cart.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdmissionTestComponent } from './pages/admission-test/admission-test.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'instructor', component: InstructorComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'admission-test', component: AdmissionTestComponent },
  { path: 'blog', component: BlogComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
