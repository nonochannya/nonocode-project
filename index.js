//let opositAlphabet = [];

/*function FirstEncryption() {                        //this making a Array of alphabetic characters staring form Z to A : opositAlphabet
    for (let i = 0; i < alphabet.length; i++) {
        opositAlphabet[i] = alphabet[alphabet.length - 1 - i];
        console.log(opositAlphabet);
    }
}*/
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//opositAlphabet = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

function input() {
    let inputWord = document.querySelector('.input').value.toLowerCase();//we put 'tolowercase()' because ower array contain just lowercase 
    let outputWord = "";
  
    for (let i = 0; i < inputWord.length; i++) {// trying know how many letter wrote
        let inputChar = inputWord[i];//taking the first letter
        let index = alphabet.indexOf(inputChar);// index take the number of the letter in the array,if the letter not exists then he well take -1
        
        if (index !== -1) {
            outputWord += nono[index];
        } else {
            outputWord += inputChar; // Keep non-alphabetic characters unchanged
        }
    }
    document.querySelector('.output').innerHTML = outputWord;  
 
 
    /*let output = "";
    for (let i = 0; i < outputWord.length; i++){
         let outputvalue  = outputWord[i]
         let index01 = alphabet.indexOf(outputvalue);
         if (index01 !== -1) {
           output += nono[index01];
         }else{
            output += outputvalue;
         };
        };
        */

};

// Call FirstEncryption() once to initialize opositAlphabet
//FirstEncryption();

    //document.querySelector('.output').innerHTML = outputWord;
  /*  for (let i = 0; i < outputWord.length; i++) {
            let inputChar = inputWord[i];
            let index = alphabet.indexOf(inputChar);
            let index01 = nono[index];
            if (index !== -1) {
                index01 += index01[index];
            } else {
                index01 += inputChar; // Keep non-alphabetic characters unchanged
            };
            outputWord += index01;
            }*/ 
            const nono = [
                "oooon",
                "ooono",
                "ooonn",
                "oonoo",
                "oonon",
                "oonno",
                "oonnn",
                "onooo",
                "onoon",
                "onono",
                "ononn",
                "onnoo",
                "onnon",
                "onnno",
                "onnnn",
                "noooo",
                "nooon",
                "noono",
                "noonn",
                "nonoo",
                "nonon",
                "nonno",
                "nonnn",
                "nnooo",
                "nnoon",
                "nnono",
            ];   
function input01() {
    let inputWord = document.querySelector('.Decode').value.toLowerCase();
    let outputWord01 = "";
    let i = 0;

    while (i < inputWord.length) {
        let foundPattern = false;

        for (let len = 6; len >= 1; len--) {
            let inputChar = inputWord.substring(i, i + len);
            let index = nono.indexOf(inputChar);
            if (index !== -1) {
                outputWord01 += alphabet[index];
                i += len; // Move the index by the length of the matched pattern
                foundPattern = true;
                break;
            }
        }

        if (!foundPattern) {
            // If no match is found, move to the next character
            outputWord01 += inputWord[i];
            i++; // Move the index by 1
        }
    }

    if (inputWord === 'nono') {
        outputWord01 = 'YEAH YEAH!!!';
    }

    // Update the output text and trigger the animation
    let outputElement = document.querySelector('.output01');
    
    outputElement.classList.add('fade-out'); // Add a class for fade-out animation
 
    outputElement.innerHTML = outputWord01;

};