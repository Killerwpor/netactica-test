import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'list', component: ListCharactersComponent },
  { path: '', component: HomePageComponent },
  { path: '*', component: HomePageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
