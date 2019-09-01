import { Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

export const routes: Routes = [
    { path: '', component: ItemsComponent },
    { path: 'detail/:id/:name', component: ItemDetailsComponent }
];