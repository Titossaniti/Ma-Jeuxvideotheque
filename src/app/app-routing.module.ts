import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { GameListBodyComponent } from './components/game-list-body/game-list-body.component';

const routes: Routes = [
  { path: '', component: GameListBodyComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: GameListBodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
