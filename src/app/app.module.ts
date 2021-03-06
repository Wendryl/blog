import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { InputComponent } from './Components/input/input.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SocialBarComponent } from './Components/social-bar/social-bar.component';
import { PostCardComponent } from './Components/post-card/post-card.component';
import { PostPageComponent } from './Pages/post-page/post-page.component';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { DashboardCardComponent } from './Components/dashboard-card/dashboard-card.component';
import { ManagePostsPageComponent } from './Pages/manage-posts-page/manage-posts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InputComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    SocialBarComponent,
    PostCardComponent,
    PostPageComponent,
    SearchInputComponent,
    DashboardPageComponent,
    SidebarComponent,
    DashboardCardComponent,
    ManagePostsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
