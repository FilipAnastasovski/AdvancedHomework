let plorp = ["aaaaa", "bbbbbbb", "cccccccc", "ddddddddd", "ee", "ffffff", "ggggggggggggg", "asdfghjjjreereeq"];

function find(example){

    let found;
    let length = 0;
    let words = example.split(" ");

    for( let i=0;  i < words.length;  i++){

        if(words[i].length > length){
            length = words[i].length;
            found = words[i];
        }
    }
    return found;
}

console.log( find("what is the longest word aaaaaaaa bbbbbbbb ccccccccc ggg eeeeeeeeeee"));

/////////////////

let result = [];
let input;
function combine(primer) {
  
    let allElements = primer.split("");
    let char = "";
    
    for (let i = 0; i < allElements.length - 1; i++) {
      
        char += allElements[i];

        for (let j = (i + 1); j < allElements.length; j++) {
          
            let resultTopush = char + allElements[j];
            result.push(resultTopush);
        }
    }
    allElements.shift();
    let pomoshno = allElements.join("");
    
    if (allElements.length !== 0) {
        combine(pomoshno);
    }
    
    else {
        let char = input.split("");
        char.forEach(element => {
            result.push(element)
        });
    }
}

combine(input = "abc");
console.log(result);

/////

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

console.log(reverse_a_number(10101010));
console.log(reverse_a_number(54321));
