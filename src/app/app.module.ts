import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './modules/pages/pages.module';

// Components
import { AppComponent } from './app.component';
import { UserManagementModule } from './modules/user-management/user-management.module';

import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserManagementModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['*'],
        // blacklistedRoutes: [""]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
