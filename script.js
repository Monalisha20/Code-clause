function cap() {
    var alpha = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '+',
    ];
    var a = alpha[Math.floor(Math.random() * 71)];
    var b = alpha[Math.floor(Math.random() * 71)];
    var c = alpha[Math.floor(Math.random() * 71)];
    var d = alpha[Math.floor(Math.random() * 71)];
    var e = alpha[Math.floor(Math.random() * 71)];
    var f = alpha[Math.floor(Math.random() * 71)];
  
    var final = a + b + c + d + e + f;
    document.getElementById('capt').value = final;
  }
  function validcap() {
    var stg1 = document.getElementById('capt').value;
    var stg2 = document.getElementById('textinput').value;
    if (stg1 == stg2) {
      alert('Form Succesfully Submitted');
      return true;
    } else {
      alert('Please enter a valid captcha');
      return false;
    }
  }
  
  function validcap() {
    var stg1 = document.getElementById('capt').value;
    var stg2 = document.getElementById('textinput').value;
    if (stg2.trim() === '') { // Check if input field is empty
      alert('Please enter all details');
      return false;
    } else if (stg1 == stg2) {
      alert('Form Successfully Submitted');
      return true;
    } else {
      alert('Please enter a valid captcha');
      return false;
    }
  }
  
  
  function validcap() {
    var stg1 = document.getElementById('capt').value;
    var stg2 = document.getElementById('textinput').value;
    var name = document.getElementById('nameinput').value;
    var email = document.getElementById('emailinput').value;
  
    if (stg2.trim() === '' || name.trim() === '' || email.trim() === '') { // Check if any input field is empty
      alert('Please enter all details');
      return false;
    } else if (stg1 == stg2) {
      alert('Hi ' + name + ', your email ' + email + ' is registered successfully!');
      return true;
    } else {
      alert('Please enter a valid captcha');
      return false;
    }
  }