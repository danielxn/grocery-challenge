import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Grocery } from '../../model/grocery';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.scss'],
})
export class GroceryDetailComponent {
  grocery$: Observable<Grocery>;

  constructor(
    private route: ActivatedRoute,
    private groceryService: GroceryService
  ) {
    this.grocery$ = this.route.params.pipe(
      mergeMap((params) => this.groceryService.getGroceryByName(params['name']))
    );
  }
}
