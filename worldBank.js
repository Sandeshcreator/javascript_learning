// function worldthings(myNoun ,myadjective, myVerb, myAdverb) {
//     let result ="";
//     result += "The " + myadjective +" "+ myNoun + " " + myVerb + " to the store "+ " "+ myAdverb
//      return result;    
// }

// console.log(worldthings("dog", "big", "ran", "quickly" ));
// console.log(worldthings("bike", "slow", "flew", "slowly" ));

//changing array 
// let ourArray =[22,33,44,55]
// ourArray[1]=15;
// alert(ourArray)

// push in array
// let ourArray =["sandesh","hloo","make it alone"]
// ourArray.push(["okay","introvert"]);
// ourArray.forEach(element =>  {
//     console.log(element)
    
// });

//pop operation
// let ourArray =[22,33,44,55];
// let removeItem= ourArray.pop();
// alert(ourArray);

//Testing obj for properties
 let myobj ={
    gift :"pony",
    pet:"kitten",
    bed:"sleigh"
 };

 function checkObj(checkProp) {
        if (myobj.hasOwnProperty(checkProp)) {

            return myobj[checkProp];

        }else{
            return "Not Found";
        }


 }


 console.log(checkObj("gift"));
