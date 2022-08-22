function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let valid = specialChars.test(str);
    console.log(valid)
    if(!valid){
      console.log("Valid=",str)
        return str;
    }else{
        console.log("Not-Valid =",str)
        //divite string into array base on special char
        let checkSpecialChar = str.split(specialChars)
          console.log(checkSpecialChar)
          //getting legth of special char..
          let indexNumber = checkSpecialChar[0].length
            console.log(indexNumber)
           let result = str.slice(0,indexNumber) + "..."
                console.log(result)
                //return final result 
            return result;
    }
    return valid;
}

let specialString = containsSpecialChars("Eyewear.& Contacts")
console.log("return =",specialString)// output Eyewear...
