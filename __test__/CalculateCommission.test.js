
const calculateCommissionFunction = require('../CalculateComission');

describe('calculateCommissionFunction', () => {
    test('Checking commission for total sales less than or equal to 1000', () => {
      const [totalSales, commission] = calculateCommissionFunction(10, 10, 10);
      
      expect(totalSales).toBe(1000);
      expect(commission).toBe(100);
    });

    test('Checking commission for total sales greater than 1000 and less than or equal to 1800', () => {
        const [totalSales, commission] = calculateCommissionFunction(18, 18, 18); 
        
        expect(totalSales).toBe(1800);
        expect(commission).toBe(180);
      });

      test('Checking commission for total sales greater than 1800', () => {
        const [totalSales, commission] = calculateCommissionFunction(19, 19, 19);
        
        expect(totalSales).toBe(1900);
        expect(commission).toBe(190);
      });
  
    test('should error when invalid inputs are given', () => {
        expect(calculateCommissionFunction(0, 10, 10)).toBe('Err Msg: Invalid Input'); //If Locks is Invalid

        expect(calculateCommissionFunction(10, 0, 10)).toBe('Err Msg: Invalid Input'); //If Stocks is invalid

        expect(calculateCommissionFunction(10, 10, 0)).toBe('Err Msg: Invalid Input'); //If Barrels is invalid

        expect(calculateCommissionFunction(-1, 10, 10)).toBe('Err Msg: Invalid Input'); //If Locks is Invalid

        expect(calculateCommissionFunction(10, -1, 10)).toBe('Err Msg: Invalid Input'); //If Stocks is invalid

        expect(calculateCommissionFunction(10, 10, -1)).toBe('Err Msg: Invalid Input'); //If Barrels is invalid

        expect(calculateCommissionFunction("s", 10, 10)).toBe('Err Msg: Invalid Input'); //If Locks is Invalid

        expect(calculateCommissionFunction(10, "s", 10)).toBe('Err Msg: Invalid Input'); //If Stocks is invalid

        expect(calculateCommissionFunction(10, 10, "s")).toBe('Err Msg: Invalid Input'); //If Barrels is invalid

        
        
      });
  });
  