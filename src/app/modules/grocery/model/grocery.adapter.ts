import { Grocery } from './grocery';
import { GroceryDto } from './grocery-dto';

export class GroceryAdapter {
  static groceryDtoToGrocery(groceryDto: GroceryDto): Grocery {
    return {
      name: groceryDto.name,
      description: groceryDto.description,
      additionalInformation: groceryDto.additionalInformation ?? '',
      images: groceryDto.images ? groceryDto.images : [],
    };
  }

  static groceryDtosToGroceries(groceryDtos: GroceryDto[]): Grocery[] {
    return groceryDtos.map((item) => this.groceryDtoToGrocery(item));
  }
}
