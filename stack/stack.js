function factorialRecursive(number) {
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
  }


  console.log(factorialRecursive(5));