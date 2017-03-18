import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SearchByClientComponent } from './search-by-client/search-by-client.component';
import { SubmitRequestDetailsComponent } from './submit-request-details/submit-request-details.component';

const appRoutes: Routes = [
  { path: 'searchbyclient', component: SearchByClientComponent },
  { path: 'submitrequest',      component: SubmitRequestDetailsComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SearchByClientComponent,
    SubmitRequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponentComponent]
})
export class AppModule { }
