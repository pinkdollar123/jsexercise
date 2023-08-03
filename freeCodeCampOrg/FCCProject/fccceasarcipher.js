function rot13(str) {

    // declares a variable container for the alphabet
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
      // storage for the decoded string
      let decodedStr = '';
  
  // loops through the length of given str
    for (let i = 0; i < str.length; i++){
      
      // assigns char to the str index
      const char = str[i];
  
      // assigns the charIndex to the indexOf value from the alphabet as reference
      const charIndex = alphabet.indexOf(char);
  
  // given conditional
      if (charIndex === -1){
        // if non alphabetic leave unchanged
        decodedStr += char;
      }else{
        const decodedCharIndex = (charIndex + 13) % 26;
        decodedStr += alphabet[decodedCharIndex];
      }
    }
    return decodedStr;
  }
  
  rot13("SERR PBQR PNZC");
  
  
  
  