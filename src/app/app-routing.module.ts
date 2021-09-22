import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grocery',
    loadChildren: () =>
      import('./modules/grocery/grocery.module').then((m) => m.GroceryModule),
    data: { preload: true },
  },
  { path: '', redirectTo: '/grocery', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
