import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryDetailComponent } from './components/grocery-detail/grocery-detail.component';
import { GroceryComponent } from './components/grocery/grocery.component';

const routes: Routes = [
  {
    path: '',
    component: GroceryComponent,
  },
  {
    path: 'detail/:name', // should be id (uuid) but cause our api do not have id I will use name
    component: GroceryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryRoutingModule {}
