function checkYuGiOh(n) {
    let checkType = Object.prototype.toString.call(n).slice(8, -1);
    let stringContainsNumber = /^\d+$/.test(n);
  
    if (checkType === Number || stringContainsNumber) {
      let generateArray = Array.from(Array(n), (x, index) => index + 1);
      let solutionArray = generateArray.map((number) => {
        switch (true) {
          case number % 2 === 0 && number % 3 === 0 && number % 5 === 0:
            return (number = "yu-gi-oh");
  
          case number % 2 === 0 && number % 3 === 0:
            return (number = "yu-gi");
  
          case number % 2 === 0 && number % 5 === 0:
            return (number = "yu-oh");
  
          case number % 3 === 0 && number % 5 === 0:
            return (number = "gi-oh");
          case number % 2 === 0:
            return (number = "yu");
  
          case number % 3 === 0:
            return (number = "gi");
  
          case number % 5 === 0:
            return (number = "oh");
          default:
            return number;
        }
      });
      console.log(solutionArray);
      return solutionArray;
    } else {
      let stringifyN = JSON.stringify(n);
      return `Invalid Parameter: ${stringifyN}`;
    }
  }
  checkYuGiOh("fizzbuzz is meh");