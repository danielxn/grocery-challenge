import { GroceryAdapter } from './grocery.adapter';

describe('Grocery adapter', () => {
  it('groceryDtoToGrocery method', () => {
    expect(
      GroceryAdapter.groceryDtoToGrocery({
        name: 'Feijoa',
        description: 'Ripe feijoas normally last about 3 to 5 days.',
        additionalInformation: '1 serving = 100 g (2 fruits)',
        images: [
          'https://picsum.photos/seed/gf1/150',
          'https://picsum.photos/seed/gf2/150',
          'https://picsum.photos/seed/gf3/150',
        ],
      })
    ).toEqual({
      name: 'Feijoa',
      description: 'Ripe feijoas normally last about 3 to 5 days.',
      additionalInformation: '1 serving = 100 g (2 fruits)',
      images: [
        'https://picsum.photos/seed/gf1/150',
        'https://picsum.photos/seed/gf2/150',
        'https://picsum.photos/seed/gf3/150',
      ],
    });
  });
});
