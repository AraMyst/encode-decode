
function shiftChar(ch, shift) {
    const isUpper = ch >= 'A' && ch <= 'Z';
    const isLower = ch >= 'a' && ch <= 'z';
    if (!isUpper && !isLower) return ch;
  
    const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    const code = ch.charCodeAt(0) - base;
    const newCode = (code + shift + 26) % 26; 
    return String.fromCharCode(newCode + base);
  }
  
  function caesarCipher(text, key, mode) {
    const shift = (mode === 'decode') ? -key : key;
    let result = '';
    for (let ch of text) {
      result += shiftChar(ch, shift);
    }
    return result;
  }
  
  document.getElementById('cipher-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    const key = parseInt(document.getElementById('key').value, 10) || 0;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const output = caesarCipher(message, key, mode);
    document.getElementById('output').textContent = output;
  });
  