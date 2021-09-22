import { Pipe, PipeTransform } from '@angular/core';
import { Grocery } from '../model/grocery';

@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {
  transform(value: Grocery[] | null, filterValue: string): Grocery[] {
    if (!value) {
      return [];
    }

    return value.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
