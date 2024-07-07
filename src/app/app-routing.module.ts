import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { DefaultComponent } from './layouts/default/default.component';





const routes: Routes = [
  {path:"", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:DefaultComponent,
  children:[
    {path:"dashboard", component:DashboardComponent},
    {path:"groupchat", component:GroupchatComponent}
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
