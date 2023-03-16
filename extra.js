//esercizio 1

//la funzione restituisce un array di caratteri, perchè potrebbero esserci più caratteri utilizzati lo stesso numero di volte
function getMostUsedFont(str) {
    let chars = [];
    for(let i = 0; i < str.length; i++) {
        if (chars.find(element => element === str.charAt(i)) === undefined && str.charAt(i) !== " ") {
            chars.push(str.charAt(i));
        }
    }
    let values = [];
    for(let i = 0; i < chars.length; i++) {
        let count = 0;
        for(j = 0; j < str.length; j++) {
            if (chars[i] === str.charAt(j)) {
                count++;
            }
        }
        values.push(count);
    }
    let max = Math.max(...values);
    let result = [];
    for(let i = 0; i < values.length; i++) {
        if (values[i] === max) {
            result.push(chars[i]);
        }
    }
    console.log(max);
    return result;

}

//esercizio 2

function checkAnagram(str1, str2) {
    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();
    if (s1 !== s2) {
        let chars1 = s1.split('');
        let chars2 = s2.split('');
        let check = true;
        for(let elem of chars1) {
            if (chars2.find(element => element === elem) === undefined) {
                check = false;
                break;
            }
        }
        return check;
    } else {
        return false;
    }

}

//esercizio3

function getAnagrams(str, arr) {
    let result = [];
    for(let elem of arr) {
        if (checkAnagram(str, elem)) {
            result.push(elem);
        }
    }
    return result;
}

//esercizio 4

function checkPalindrome(str) {
    let s = str.toLowerCase();
    let arr = s.split('').reverse();
    let newStr = arr.join('');
    if (s === newStr) {
        return true;
    }
    return false;
}

//esercizio 5

function reverseInt(num) {
    if (num === parseInt(num.toString())) {
        let str = num.toString().split('').reverse().join('');
        return parseInt(str);
    } else {
        return "Il parametro di input non è un numero intero";
    }
}

//esercizo 6

function drawStairs(x) {
    let char = '';
    if (x === parseInt(x.toString()) && x > 0) {
        for(let i = 1; i <= x; i++ ) {
            char += '#';
            console.log(char);
        }
    }
}

//esercizio 7

function reverseString(str) {
    return str.split('').reverse().join('');
}

//esercizio 8

function getSubarrays(arr, y) {
    let result = [];
    while(arr.length > 0) {
        if (arr.length < y) {
            result.push(arr.slice(0, arr.length));
            arr.splice(0, arr.length);
        } else {
            result.push(arr.slice(0, y));
            arr.splice(0, y);
        }
    }
    return result;
}

//esercizio 9

function getPyramid(x) {
    let char = '';
    if (x > 0 && x === parseInt(x.toString())) {
        let totalSpace = x + (x - 1);
        for(let i = 1; i <= x; i++) {
            for(let j = 1; j <= i + (i - 1); j++) {
                char += '#';
            }
            let space = (totalSpace - char.length) / 2;
            for(let k = 1; k <= space; k++) {
                char = " " + char;
            }
            console.log(char);
            char = '';
        }
    } else {
        console.log("Il parametro di input deve essere un intero positivo");
    }
}

//esercizio 10

function getMatrix(n) {
    if (n > 0 && n === parseInt(n.toString())) {
        let result = [];
        for(let i = 1; i <= n; i++) {
            let temp = [];
            for(let j = 1; j <= n; j++) {
                let random = Math.round(Math.random() * 100);
                temp.push(random);
            }
            result.push(temp);
        }
        return result;
    } else {
        return "Il parametro di input deve essere un intero positivo";
    }
}


console.log(getMostUsedFont('vado a ballare'));
console.log(getMostUsedFont('professione'));
console.log(getMostUsedFont('riusciremo ad arrivare alla fine'));
console.log(checkAnagram("carenti", "incerta"));
console.log(getAnagrams("cartine", ["carenti", "incerta", "espatrio"]));
console.log(checkPalindrome("anna"));
console.log(reverseInt(406));
drawStairs(3);
console.log(reverseString("ciao"));
console.log(getSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
getPyramid(3);
getPyramid(-1);
getPyramid(3.4);
console.log(getMatrix(3));
console.log(getMatrix(-4));