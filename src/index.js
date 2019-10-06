const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const space="**********";
    
    const words = expr.split(space);
    const letters = words
        .map(word => {
            let i = 0;
            const result = [];
            while (i < word.length) {
                result.push(word.slice(i, i + 10));
                i = i + 10;
            }
            return result;
        });
    const symbols = letters
        .map(arr => arr.map(letter => {
            let i = 0;
            const result = [];
            while (i < letter.length) {
                result.push(letter.slice(i, i + 2));
                i = i + 2;
            }
            return result;
        }));
    const decoded = symbols
        .map(word => word
        .map(letter => {
            const res = [];
            for (let i = letter.length - 1; i >= 0; i--) {
                if (letter[i] === '10') res.unshift('.');
                if (letter[i] === '11') res.unshift('-');
                if (letter[i] === '00') break;
            }
            return res.join('');
        }))

    const answer = decoded
        .map(word => word
        .map(letter => MORSE_TABLE[letter]))
        .map(word => word.join(''))
        .join(' ');
    return answer;
}

module.exports = {
    decode
}