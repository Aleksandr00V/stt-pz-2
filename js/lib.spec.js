const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(1, 2)).toEqual(3);
      expect(lib.sum(-10, 5)).toEqual(-5);
      expect(lib.sum(0.5, 0.25)).toEqual(0.75);
    });

    it('should convert strings to numbers', () => {
      expect(lib.sum('5', '1')).toEqual(6);
      expect(lib.sum(10, '1')).toEqual(11);
    });

    it('should return NaN if one parameter is skipped', () => {
      expect(lib.sum(1)).toBeNaN();
    });
  });

  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
      expect(lib.subtraction(1, 5)).toEqual(-4);
      expect(lib.subtraction(-3, -3)).toEqual(0);
    });

    it('should convert strings to numbers', () => {
      expect(lib.subtraction('10', '4')).toEqual(6);
      expect(lib.subtraction(10, '4')).toEqual(6);
    });
  });

  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
      expect(lib.division(1, 4)).toEqual(0.25);
      expect(lib.division(-9, 3)).toEqual(-3);
    });

    it('should convert strings to numbers', () => {
      expect(lib.division('9', '3')).toEqual(3);
    });

    it('should return 0 if dividend is 0', () => {
      expect(lib.division(0, 5)).toEqual(0);
    });

    it('should throw an error if divisor is 0', () => {
      expect(() => lib.division(5, 0)).toThrow('Division by zero');
      expect(() => lib.division('5', '0')).toThrow(RangeError);
    });
  });

  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(3, 4)).toEqual(12);
      expect(lib.multiplication(-3, 4)).toEqual(-12);
      expect(lib.multiplication(-3, -4)).toEqual(12);
    });

    it('should return 0 if one of numbers is 0', () => {
      expect(lib.multiplication(0, 100)).toEqual(0);
    });

    it('should convert strings to numbers', () => {
      expect(lib.multiplication('3', '4')).toEqual(12);
    });
  });

  describe('Test suite for testing percentage function', () => {
    it('should return percent of number', () => {
      expect(lib.percentage(200, 10)).toEqual(20);
      expect(lib.percentage(50, 50)).toEqual(25);
      expect(lib.percentage(80, 100)).toEqual(80);
    });

    it('should return 0 if percent is 0', () => {
      expect(lib.percentage(200, 0)).toEqual(0);
    });

    it('should convert strings to numbers', () => {
      expect(lib.percentage('200', '10')).toEqual(20);
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return whole part of number', () => {
      expect(lib.getWholeNumberPart(5.7)).toEqual(5);
      expect(lib.getWholeNumberPart(10)).toEqual(10);
      expect(lib.getWholeNumberPart(0.99)).toEqual(0);
    });

    it('should cut off fractional part of negative number', () => {
      expect(lib.getWholeNumberPart(-5.7)).toEqual(-5);
    });

    it('should convert string to number', () => {
      expect(lib.getWholeNumberPart('7.9')).toEqual(7);
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return only even numbers', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('should return empty array if there are no even numbers', () => {
      expect(lib.getEvenNumbers([1, 3, 5])).toEqual([]);
      expect(lib.getEvenNumbers([])).toEqual([]);
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return max number from array', () => {
      expect(lib.getMaxNumber([1, 9, 3])).toEqual(9);
      expect(lib.getMaxNumber([-5, -2, -9])).toEqual(-2);
      expect(lib.getMaxNumber([7])).toEqual(7);
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return object with min and max numbers', () => {
      expect(lib.getMinAndMaxNumbers([4, 1, 9, 3])).toEqual({ min: 1, max: 9 });
    });

    it('should return the same min and max for one element', () => {
      expect(lib.getMinAndMaxNumbers([5])).toEqual({ min: 5, max: 5 });
    });
  });

  describe('Test suite for testing arithmeticMeans function', () => {
    it('should return arithmetic mean of numbers', () => {
      expect(lib.arithmeticMeans([1, 2, 3])).toEqual(2);
      expect(lib.arithmeticMeans([1, 2])).toEqual(1.5);
      expect(lib.arithmeticMeans([-2, 2])).toEqual(0);
    });
  });

  describe('Test suite for testing getVowels function', () => {
    it('should return array of vowels from string', () => {
      expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
    });

    it('should find vowels in upper case', () => {
      expect(lib.getVowels('AbEc')).toEqual(['A', 'E']);
    });

    it('should return empty array if there are no vowels', () => {
      expect(lib.getVowels('rhythm')).toEqual([]);
      expect(lib.getVowels('')).toEqual([]);
    });
  });

  describe('Test suite for testing cancatString function', () => {
    it('should concat array of strings into one string', () => {
      expect(lib.cancatString(['a', 'b', 'c'])).toEqual('abc');
      expect(lib.cancatString(['Hello, ', 'world'])).toEqual('Hello, world');
    });

    it('should return empty string for empty array', () => {
      expect(lib.cancatString([])).toEqual('');
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should split string according to divider', () => {
      expect(lib.splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
      expect(lib.splitString('one two', ' ')).toEqual(['one', 'two']);
    });

    it('should return array with the whole string if divider is not found', () => {
      expect(lib.splitString('abc', ',')).toEqual(['abc']);
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString('hello world', 'lo wo')).toBe(true);
      expect(lib.hasSubString('hello', 'hello')).toBe(true);
    });

    it('should return false if string does not contain substring', () => {
      expect(lib.hasSubString('hello', 'bye')).toBe(false);
      expect(lib.hasSubString('hello', 'Hello')).toBe(false);
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should return true for lower case char', () => {
      expect(lib.isLowerCase('a')).toBe(true);
      expect(lib.isLowerCase('z')).toBe(true);
    });

    it('should return false for upper case char', () => {
      expect(lib.isLowerCase('A')).toBe(false);
      expect(lib.isLowerCase('Z')).toBe(false);
    });

    it('should return false for char without case', () => {
      expect(lib.isLowerCase('1')).toBe(false);
      expect(lib.isLowerCase('!')).toBe(false);
    });
  });
});
