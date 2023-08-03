function telephoneCheck(str) {
    // regular expression to check for US number
    // ^ caret at starts assert the start of the string
    // Optional using (1\s?)?
    // (\(\d{3}\)|\d{3}) matches either a three-digit area code enclosed in parentheses or just a three-digit area code. The backslashes are used to escape the parentheses for grouping, and \d{3} matches three digits (0-9).
    // [\s\-]? matches an optional space or hyphen after the area code.
    // \d{3} matches the next three digits (the first three digits of the phone number).
    // [\s\-]? matches an optional space or hyphen after the first three digits.
    // \d{4} matches the last four digits of the phone number.
    // $ asserts the end of the string.
    
    
      const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    
    // *We use the test method of the regex object to check if str matches the phoneRegex. The test method returns true if there is a match, and false otherwise.
      return phoneRegex.test(str);
    }
    
    telephoneCheck("555-555-5555");