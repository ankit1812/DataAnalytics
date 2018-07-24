import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { SignupComponent } from './signup/signup.component';
import { ProjectsComponent } from './projects/projects.component';
import { GraphComponent } from './graph/graph.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownDirective } from './dropdown.directive';

import { AuthserviceService } from './authservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes:Routes=[
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'graph', component: GraphComponent },
  {path:'forgotPassword',component:ForgotpasswordComponent},
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProjectsComponent,
    GraphComponent,DropdownDirective,ForgotpasswordComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbDatepickerModule,
    NgbModule.forRoot(),
    ChartsModule,
    BrowserAnimationsModule,HttpClientModule
    


  
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
