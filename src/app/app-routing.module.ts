import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import {ManagePostsPageComponent} from './Pages/manage-posts-page/manage-posts-page.component';
import { PostPageComponent } from './Pages/post-page/post-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'posts',
    component: PostPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'dashboard/manage-posts',
    component: ManagePostsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
