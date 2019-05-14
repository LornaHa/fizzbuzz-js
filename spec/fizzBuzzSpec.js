
describe('FizzBuzz', function() {

  var fizzbuzz;

  describe ('knows when a number is', function() {

    it ('divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it ('divisible by 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe ('knows when a number is NOT', function() {

    it ('divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it ('divisible by 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

  });




});
