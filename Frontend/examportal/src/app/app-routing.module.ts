import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './pages/admin/addcategory/addcategory.component';
import { AddquizComponent } from './pages/admin/addquiz/addquiz.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UpdatequizComponent } from './pages/admin/updatequiz/updatequiz.component';
import { ViewcategoryComponent } from './pages/admin/viewcategory/viewcategory.component';
import { ViewquzzesComponent } from './pages/admin/viewquzzes/viewquzzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,

    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'category',
        component: ViewcategoryComponent,
      },
      {
        path: 'add-category',
        component: AddcategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewquzzesComponent,
      },
      {
        path: 'add-quizzes',
        component: AddquizComponent,
      },
      {
        path: 'update-quiz/:qid',
        component: UpdatequizComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [UserGuard],
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
