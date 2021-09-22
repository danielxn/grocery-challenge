import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../model/grocery';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroceryComponent {
  groceries$: Observable<Grocery[]>;
  filterExpression = '';

  constructor(private groceryService: GroceryService) {
    this.groceries$ = this.groceryService.getGroceries();
    this.filterExpression = localStorage.getItem('filterExpression') ?? '';
  }

  changedFilterValue(event: any) {
    this.filterExpression = event.target.value;

    localStorage.setItem('filterExpression', this.filterExpression);
  }
}
