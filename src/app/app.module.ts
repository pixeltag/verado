import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat/chat.component';
import { RouterLink } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console/console.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  { path: 'console', component: ConsoleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatComponent,
    ConsoleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( routes, { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
