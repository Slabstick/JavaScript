class ShiftCipher {
    constructor(shiftValue){
        this.shiftValue = shiftValue;
    }

    // shift every letter (a-z and A-Z) by shiftvalue and shift every overshot character back to the beginning and then return all in uppercase!
    encrypt(input){
        let result = '';
        for (let i=0; i<input.length;i++) {
            // if A-Z or a-z, else just leave as is
            if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 123 && !(input.charCodeAt(i)>90 && input.charCodeAt(i)<97)) {
                let c = input.charCodeAt(i) + this.shiftValue;
                // if uppercase letter is now higher than 'Z'
                while (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91 && c > 90) {
                    let overShot = c - 90;
                    c = 64 + overShot;
                }
                // if lowercase letter is now higher than 'z'
                while (input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123 && c > 122) {
                    let overShot = c - 122;
                    c = 96 + overShot;
                }
                result = result + String.fromCharCode(c).toUpperCase();
            } else {
                result = result + input.charAt(i);
            }
            
        }
        return result;
    }

    decrypt(input){
        let result = '';
        for (let i=0; i<input.length; i++) {
            // if A-Z or a-z, else just leave as is
            if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 123 && !(input.charCodeAt(i)>90 && input.charCodeAt(i)<97)) {
                let c = input.charCodeAt(i) - this.shiftValue;
                // if uppercase letter is now lower than 'A'
                while (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91 && c < 65) {
                    let overShot = 65 - c;
                    c = 91 - overShot;
                }

                // if lowercase letter is now lower than 'a'
                while (input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123 && c < 97) {
                    let overShot = 97 - c;
                    c = 123 - overShot;
                }
                result = result + String.fromCharCode(c).toLowerCase();
            } else {
                result = result + input.charAt(i);
            }
        }
        return result;
    }
}

let cipher = new ShiftCipher(2);

console.log(cipher.encrypt('Hello, World!'));



console.log(cipher.decrypt('JGNNQ, YQTNF!'));