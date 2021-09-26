import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MessagesComponent } from './components/messages/messages.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainComponent } from './pages/main/main.component';
import { MessagesMenuComponent } from './components/messages-menu/messages-menu.component';
import {MatIconModule} from '@angular/material/icon';
import { MessageBarComponent } from './components/message-bar/message-bar.component';
import { MessagesTitleComponent } from './components/messages-title/messages-title.component';
import { SafePipe } from './safe.pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MessagesComponent,
    MainComponent,
    MessagesMenuComponent,
    MessageBarComponent,
    MessagesTitleComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  exports:[
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
