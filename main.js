function convertFahrToCelsius(temp) {
    if(typeof(temp) === "number" || typeof(temp) === "string"){

      return ((Number(temp) - 32) * 5/9).toFixed(4);

    }
    
    else {

      return `${JSON.stringify(temp)} is not a valid number but a/an ${typeof(temp)}`;
      
    }
  }
  
  console.log(convertFahrToCelsius(0));
  console.log(convertFahrToCelsius("0") );
  console.log(convertFahrToCelsius([1,2,3]));
  console.log(convertFahrToCelsius({temp: 0}));