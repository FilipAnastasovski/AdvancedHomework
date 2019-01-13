let plorp = ["aaaaa", "bbbbbbb", "cccccccc", "ddddddddd", "ee", "ffffff", "ggggggggggggg", "asdfghjjjreereeq"];

let longest = plorp.reduce(function(a, b) { 

  return a.length > b.length ? a : b
}, '');

console.log(longest);

/////////////////

let tree = function(leafs) {

    let branches = [];      

    if( leafs.length == 1 ) return leafs;       

    for( let k in leafs ) {

        let leaf = leafs[k];

        tree(leafs.join('').replace(leaf,'').split('')).concat("").map(function(subtree) {

            branches.push([leaf].concat(subtree));
        });
    }
    return branches;
};
console.log(tree("abcd".split('')).map(function(str){return str.join('')}))
