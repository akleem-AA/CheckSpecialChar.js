const  containsSpecialChars = (str) => {
  const specialChars = /[`!@#$&%^*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let valid = specialChars.test(str);
    console.log("string status = ",valid)
    if(!valid){
      console.log("Valid=",str)
        return str;
    }else{
        console.log("find fist speical char = ",str)
        //divite string into array base on special char
        let checkSpecialChar = str.split(specialChars)
          console.log(checkSpecialChar)
          //getting legth of special char..
          let indexNumber = checkSpecialChar[0].length
           let result = str.slice(0,indexNumber) + "..."
                console.log(result)
                //return final result 
            return result;
    }
}

let specialString = containsSpecialChars(" Beachco&mbing")
console.log("return =",specialString)
