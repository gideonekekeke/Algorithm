// Returns True if the given string is a palindrome, False otherwise.

// Convert string str.lower() and use re.sub to remove non-alphanumeric characters from it. Then compare the new string to the reversed.


const Palind = (n)=>{
    // reverse the string word or caracter

    let reverse = n.split('').reverse().join('').toLower()
    console.log(reverse);


    if(n !== reverse){
        return false 
    }else {
        return true
    }
}

console.log(Palind('hHllo'));
