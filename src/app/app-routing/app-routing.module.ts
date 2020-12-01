import { AuthGuard } from './../guards/auth.guard';
import { WelcomePageComponent } from './../components/welcome-page/welcome-page.component';
import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from './../components/register/register.component';
import { HomeComponent } from './../components/home/home.component';
import { ProfileComponent } from './../components/profile/profile.component';
import { FilterComponent } from './../components/filter/filter.component';
import { ProductComponent } from './../components/product/product.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'filter', component: FilterComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
