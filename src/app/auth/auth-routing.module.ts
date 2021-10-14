import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignoutComponent } from './signout/signout.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'signout', component: SignoutComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
