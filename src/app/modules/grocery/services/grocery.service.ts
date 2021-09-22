import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';
import { GroceryMockData } from '../mock-data/grocery-mock.data';
import { Grocery } from '../model/grocery';
import { GroceryAdapter } from '../model/grocery.adapter';

@Injectable()
export class GroceryService {
  constructor(private loaderService: LoaderService) {}

  // method is async and delayed to behave as an API
  getGroceries(): Observable<Grocery[]> {
    return of(this.loaderService.addLoadingEvent()).pipe(
      delay(1000),
      map(() => {
        this.loaderService.removeLoadingEvent();
        return GroceryAdapter.groceryDtosToGroceries(
          GroceryMockData.getGroceries()
        );
      }),
      catchError((error) => {
        this.loaderService.removeLoadingEvent();
        return of(error);
      })
    );
  }

  // method is async and delayed to behave as an API
  getGroceryByName(name: string): Observable<Grocery> {
    return of(this.loaderService.addLoadingEvent()).pipe(
      delay(1000),
      map(() => {
        this.loaderService.removeLoadingEvent();

        return GroceryAdapter.groceryDtoToGrocery(
          GroceryMockData.getGroceryByName(name) as Grocery
        );
      }),
      catchError((error) => {
        this.loaderService.removeLoadingEvent();
        return of(error);
      })
    );
  }
}
