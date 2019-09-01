import { NgModule } from '@angular/core';
import { ItemsComponent } from './items/items.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from '../app/routes';


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
