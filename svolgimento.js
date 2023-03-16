// esercizio 1

function sum(num1, num2) {
    if (num1 === num2) {
        return 3 * (num1 + num2);
    }
    return num1 + num2;
}

//esercizio 2

function checkTwoInt(num1, num2) {
    if (num1 === 50 || num2 === 50 || (num1 + num2) === 50) {
        return true;
    }
    return false;
}

//esercizio 3

function removeChar(str, pos) {
    if (pos >= 1 && pos <= str.length) {
        let arr = str.split('');
        arr.splice(pos - 1, 1);
        return arr.join('');
    }
    return "Posizione del carattere da eliminare non valida";
}

//esercizio 4

function maxValue(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    } else if (num3 > max) {
        max = num3;
    }
    return max;
}

//esercizio 5

function checkInterval(num1, num2) {
    let cond1 = false;
    let cond2 = false;
    if ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) {
        cond1 = true;
    }
    if ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)) {
        cond2 = true;
    }
    return cond1 && cond2;
}

//esercizio 6

function repeatString(str, num) {
    let result = "";
    for(let i = 1; i <= num; i++) {
        result += str + " ";
    }
    return result;
}

//esercizio 7

function checkCity(city) {
    if (city.startsWith('Los') || city.startsWith('New')) {
        return city;
    }
    return false;
}

//esercizio 8

function sumArrayElem(arr) {
    if (arr.length === 3) {
        let result = 0;
        let cond = true;
        for(let elem of arr) {
            if (typeof elem === "number") {
                result += elem;
            } else {
                cond = false;
                break;
            }
        }
        if (cond) {
            return result;
        } else {
            return "Gli elementi dell'array non sono tutti numeri";
        }
    }
    return "L'array non è composto da tre elementi";
}

//esercizio 9

function checkArrayContainsOneOrThree(arr) {
    if (arr.length === 2) {
        if (arr.includes(1) || arr.includes(3)) {
            return true;
        } else {
            false;
        }
    } else {
        return "L'array di input ha un numero di elementi diverso da 2";
    }
    return false;
}

//esercizio 10

function checkArrayNotContainsOneOrThree(arr) {
    if (arr.length === 2) {
        if (arr.includes(1) || arr.includes(3)) {
            return false;
        } else {
            true;
        }
    } else {
        return "L'array di input ha un numero di elementi diverso da 2";
    }
    return false;
}

//esercizio 11

function getMaxString(stringArr) {
    let result = stringArr[0];
    for(let i = 1; i < stringArr.length; i++) {
        if (stringArr[i].length > result.length) {
            result = stringArr[i];
        }
    }
    return result;
}

//esercizi 12

function getCornerType(deg) {
    if (deg > 0 && deg < 90) {
        return "acuto";
    } else if (deg > 90 && deg < 180) {
        return "ottuso";
    } else if (deg === 90) {
        return "retto";
    } else if (deg === 180) {
        return "piatto";
    }
}

//esercizio 13
//supponiamo che l'array sia composto da soli numeri
function getMaxValueIndex(arr) {
    let index = 0;
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}

//esercizio 14
//supponiamo che l'array sia composto da soli numeri interi
function getMaxEvenNumber(arr) {
    let result = -1;
    for(let elem of arr) {
        if (elem > result && (elem % 2) === 0) {
            result = elem;
        }
    }
    if (result === -1) {
        return "L'array non contiene numeri pari";
    }
    return result;
}

//esercizio 15

function checkSign(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    }
    return false;
}

//esercizio 16

function generateNewString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        let first = str.substring(0, 3).toLowerCase();
        let end = "";
        if (str.length > 3) {
            end = str.substring(3).toUpperCase();
        }
        return first + end;
    }
}

//esercizio 17

function getValue(num1, num2) {
    let sum = num1 + num2;
    if (sum >= 50 && sum <= 80) {
        return '65';
    }
    return '80';
}

//esercizio 18

function convertNumberToString(num) {
    let cond1 = false;
    let cond2 = false;
    let cond3 = false;
    let value1 = "";
    let value2 = "";
    let value3 = "";
    if (num % 3 === 0) {
        cond1 = true;
        value1 = "Diego";
    }
    if (num % 5 === 0) {
        cond2 = true;
        value2 = "Riccardo";
    }
    if (num % 7 === 0) {
        cond3 = true;
        value3 = "Stefano";
    }
    if (!(cond1 || cond2 || cond3)) {
        return num;
    }
    return value1 + value2 + value3;
    
}

//esercizio 19

function getAcronym(sentence) {
    let arr = sentence.split(" ");
    let result = "";
    for(let elem of arr) {
        result += elem.charAt(0).toUpperCase();
    }
    return result;
}


console.log(sum(10, 34));
console.log(sum(30, 30));
console.log(checkTwoInt(25, 25));
console.log(checkTwoInt(50, 2));
console.log(checkTwoInt(10, 50));
console.log(checkTwoInt(3, 2));
console.log(removeChar("rivoluzione", 5));
console.log(removeChar("rivoluzione", 20));
console.log(removeChar("rivoluzione", -3));
console.log(maxValue(20, 10, 56));
console.log(maxValue(30, 5, 12));
console.log(maxValue(10, 44, 22));
console.log(checkInterval(44, 72));
console.log(checkInterval(20, 97));
console.log(checkInterval(55, 65));
console.log(repeatString("ciao", 4));
console.log(checkCity('Los Angeles'));
console.log(checkCity('New York'));
console.log(checkCity('Roma'));
console.log(sumArrayElem([5, 10, 15]));
console.log(sumArrayElem([5, 10, 15, 50]));
console.log(sumArrayElem([5, "ciao", 15]));
console.log(checkArrayContainsOneOrThree([0, 5]));
console.log(checkArrayContainsOneOrThree([1, 5]));
console.log(checkArrayContainsOneOrThree([0, 3]));
console.log(checkArrayContainsOneOrThree([3, "ciao"]));
console.log(checkArrayContainsOneOrThree(["ciao", "stringa"]));
console.log(checkArrayNotContainsOneOrThree([0, 5]));
console.log(checkArrayNotContainsOneOrThree([1, 5]));
console.log(checkArrayNotContainsOneOrThree([0, 3]));
console.log(checkArrayNotContainsOneOrThree([3, "ciao"]));
console.log(checkArrayNotContainsOneOrThree(["ciao", "stringa"]));
console.log(getMaxString(["ciao", "saluto", "arriverderci", "buongiorno", "buonanotte"]));
console.log(getCornerType(45));
console.log(getCornerType(125));
console.log(getCornerType(90));
console.log(getCornerType(180));
console.log(getMaxValueIndex([10, 2, 34, 55, 1, 88, 8]));
console.log(getMaxEvenNumber([12, 25, 38, 55, 1, 87, 8]));
console.log(getMaxEvenNumber([11, 25, 37, 55, 1, 87, 9]));
console.log(checkSign(10, 20));
console.log(checkSign(-2, -50));
console.log(checkSign(10, -2));
console.log(checkSign(-1, 100));
console.log(generateNewString("c"));
console.log(generateNewString("ci"));
console.log(generateNewString("cia"));
console.log(generateNewString("arrivederci"));
console.log(getValue(30, 24));
console.log(getValue(40, 45));
console.log(convertNumberToString(12)); //Diego
console.log(convertNumberToString(30)); //DiegoRiccardo
console.log(convertNumberToString(25)); //Riccardo
console.log(convertNumberToString(49)); //Stefano
console.log(convertNumberToString(2)); //2
console.log(convertNumberToString(21)); //DiegoStefano
console.log(getAcronym("associazione teologica amici cristo"));
console.log(getAcronym("fabbrica italiana automobili torino"));
console.log(getAcronym("Società Per Azioni"));
