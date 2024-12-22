import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {TabGroupBasicExample} from './app';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { DocumentsTableComponent } from './documents-table/documents.component';
import { LoginComponent } from './login/login.component';
import { RefreshService } from './services/refresh service/refresh.service';
import { HeroComponent } from './hero/hero.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MembersSectionComponent } from './members-section/members-section-component';
import { SponsorsSectionComponent } from './sponsors-section/sponsors-section.component';
import { RouterModule } from '@angular/router';
import { MemberDetailsComponent } from './member-details/member-details.component';  // Import RouterModule
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SponsorCardComponent } from './sponsor-card/sponsor-card.component';
import { FooterComponent } from './footer/footer.component'; // Import the AppRoutingModule


@NgModule({
  declarations: [TabGroupBasicExample, HeaderComponent, DocumentsTableComponent, LoginComponent, HeroComponent, MembersSectionComponent,MemberCardComponent, SponsorsSectionComponent, MemberDetailsComponent, HomeComponent, SponsorCardComponent, FooterComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule
    ],providers:[RefreshService
    ,DocumentsTableComponent],
  bootstrap: [TabGroupBasicExample],
})
export class AppModule {}
