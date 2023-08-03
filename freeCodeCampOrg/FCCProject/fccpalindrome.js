function palindrome(str) {

    // accepts the string as an input and replaces all non-alphanumeric characters from the string to avoid case insensitive
    const filterStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // this is the checker if the filterStr is equal to its reverse string. Converts to an array of string using split(), then reverses the array using reverse(), and joins them back to ensure it will go back as a string
    return filterStr === filterStr.split('').reverse().join('');
  
  }
  
  palindrome("eye");