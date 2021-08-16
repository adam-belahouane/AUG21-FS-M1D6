/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/ 
/*const onlyLetters = function(str) {
    
    let arraysWithLetters = []
    let letters = str.split("")
    for(i = 0; i < str.length; i++) {
        if( letters[i] === /[A-Z]/g ) {
            letters[i].push(arraysWithLetters)
        } else {
            delete letters[i]
        }
    }
    let result = arraysWithLetters.join("")
    return result
}
console.log(onlyLetters("hello 4")) */
/* const isThisAnEmail = function(str) {
    let email = str.split("@")
    if( email[1] === "outlook.com" || "live.co.uk") {
      return true
    } else {
      return false
    }
  }
  console.log(isThisAnEmail("adam@notanemail.com")) */
  let d = new Date()
  let n = d.getDay()
  console.log(d)
  console.log(n)