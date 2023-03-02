import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { GameListBodyComponent } from './components/game-list-body/game-list-body.component';
import { GamePageComponent } from './components/game-page/game-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: GameListBodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'game/:numero', component: GamePageComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
