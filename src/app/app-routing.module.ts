import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CardsListComponent } from './Components/cards-list/cards-list.component';

const routes: Routes = [  {
  path: '',
  component: HomeComponent,
},
{
  path: 'login',
  component: HomeComponent,
},
{
  path: 'autonomos',
  component: CardsListComponent,
},
{
  path: 'home',
  component: HomeComponent,
},

{
  path: 'categories',
  component: HomeComponent,
},


{ 
  path: '**', 
  component: HomeComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
