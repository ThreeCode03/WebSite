let bitInput = document.getElementById("addBit");
let numOutput = document.getElementById("num");

let bitAdd;
let posBit;
let num = 0;

function bitToNum() {
    if (bitInput.value.includes(2) || bitInput.value.includes(3) || bitInput.value.includes(4) || bitInput.value.includes(5) || bitInput.value.includes(6) || bitInput.value.includes(7) || bitInput.value.includes(8) || bitInput.value.includes(9)) {
       alert("puoi inserire solo 0 e 1");
       bitInput.value = null;
    }

    bitAdd = bitInput.value;
    posBit = bitAdd.length;
    j = 0
    num = 0;
    for (i = posBit -1; i >= 0; i--) {
            num += bitAdd[i] * Math.pow(2, j)
            j++
            numOutput.innerHTML = "" + num;
    }
}

let numInput = document.getElementById("addNum");
let bitOutput = document.getElementById("bit");

let bit = 0;
let bitMath;

function numToBit() {
    numAdd = numInput.value;
    
    bit = "";
    bitTot = numAdd;
    bitMath = 0

    for (i = bitTot; Math.floor(i) > 0; Math.floor(i /= 2)) {
        bitMath += Math.floor(bitTot % 2) + ""
        bitTot /= 2;
    }

    for (i = bitMath.length - 1; i > 0; i--) {
        bit += bitMath[i]
    }

    bitOutput.innerHTML =  "" + bit;
}