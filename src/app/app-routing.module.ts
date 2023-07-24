import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
//import { MainComponent } from './components/main/main.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = 
[
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
 // {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  { path: '', pathMatch: 'full', redirectTo: '/heroes' },
  {
  path: 'heroes', component: HeroesComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
