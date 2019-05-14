
describe('FizzBuzz', function() {

  var fizzbuzz;

  describe ('knows when a number is', function() {

    it ('divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });
});
