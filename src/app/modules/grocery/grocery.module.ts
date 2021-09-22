import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroceryComponent } from './components/grocery/grocery.component';
import { GroceryRoutingModule } from './grocery-routing.module';
import { FilterPipe } from './pipe/filter.pipe';
import { GroceryService } from './services/grocery.service';
import { GroceryDetailComponent } from './components/grocery-detail/grocery-detail.component';

@NgModule({
  declarations: [GroceryComponent, FilterPipe, GroceryDetailComponent],
  imports: [CommonModule, FormsModule, GroceryRoutingModule],
  providers: [GroceryService],
})
export class GroceryModule {}
