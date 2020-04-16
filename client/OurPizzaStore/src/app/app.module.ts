import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient,HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TemplatesComponent } from './templates/templates.component';
import { ContentComponent } from './templates/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    AboutComponent,
    MainMenuComponent,
    ContactsComponent,
    FeedbackComponent,
    FooterComponent,
    HeaderTitleComponent,
    RegistrationComponent,
    LoginComponent,
    TemplatesComponent,
    ContentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
