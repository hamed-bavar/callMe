import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { GlobalModule } from './global/global.module';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent }];
@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    GlobalModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
