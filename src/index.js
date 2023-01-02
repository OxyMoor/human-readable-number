module.exports = function toReadable (number) {
    const digits = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    let numString = number.toString();

    if (number in digits) {
        return digits[number];
    } else {
        if (numString.length === 2) {
            return digits[+(numString[0] + 0)] + ' ' + digits[+(numString[1])];
        } else if (numString.length === 3) {
            if (numString[1] === '0') {
                if (numString[2] === '0') {
                    return digits[+(numString[0])] + ' hundred';
                } else if (numString[2] != '0') {
                    return digits[+(numString[0])] + ' hundred' + ' ' + digits[+(numString[2])];
                }
            } else if (numString[1] === '1' || +(numString.slice(1)) in digits) {
                return digits[+(numString[0])] + ' hundred' + ' ' + digits[+(numString.slice(1))];
            } else if (numString[1] != '1' && !(+(numString.slice(1)) in digits)) {
                return digits[+(numString[0])] + ' hundred' + ' ' + digits[+(numString[1] + 0)] + ' ' + digits[+(numString[2])];
            }
        }
    }
}
