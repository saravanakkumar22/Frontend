import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { ExerciseDataService } from './exercise-api/exercise-data.service';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { DatePipe } from '@angular/common';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { StudentsRegisterService } from './studentregister/student-register.service';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DefaultModule } from './layouts/default/default.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';




const config:SocketIoConfig={ url:'http://localhost:4000',options:{}};



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    GroupchatComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    SocketIoModule.forRoot(config),
    SharedModule 
  ],
  providers: [StudentsRegisterService,ExerciseDataService,DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
