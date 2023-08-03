function convertToRoman(num) {

    if(typeof num !== 'number' || num <= 0){
      throw new Error('Invalid input. Please provide a positive integer.');
    }
  
     const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let result = '';
    console.log(romanNumerals[0]['value'])
  
    for (const numeralInfo of romanNumerals){
      while (num >= numeralInfo.value){
       result += numeralInfo.numeral;
       num -= numeralInfo.value; 
      }
    }
    console.log(result);
   return result;
  }
  
  convertToRoman(36);