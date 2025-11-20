import { DiscountDisplayPipe } from './discount-display-pipe';

describe('DiscountDisplayPipe', () => {

  it('create an instance', () => {
    const pipe = new DiscountDisplayPipe();
    expect(pipe).toBeTruthy();
  });

  fit('Return discounted price and discount for 200 Eur and 15%', () => {    
    const price = 200;
    const discount = 0.15; 
    const expectedResult = '→ €170.00 (-15%)';

    const pipe = new DiscountDisplayPipe();
    const result = pipe.transform(price, discount);

    expect(result).toBe(expectedResult);
  });

  fit('Return initial price 90 Eur and 0% of discount', () => {    
    const price = 90;
    const discount = 0; 
    const expectedResult = '→ €90.00 (-0%)';

    const pipe = new DiscountDisplayPipe();
    const result = pipe.transform(price, discount);

    expect(result).toBe(expectedResult);
  });

});
 