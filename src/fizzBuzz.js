function FizzBuzz(){};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 == 0)
};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 == 0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 == 0);
};
