let usinput=''

const userin = (usin) => {
    usinput= prompt(`Enter a ${usin} to check `)
    return usinput;

}


/*JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223

let usinput= prompt("Enter a number to be reserve")

const reser = (usinput) => {
    let reservenumb= '';
    for (let index = usinput.length-1; index >=0; index--) {
         reservenumb+= usinput[index];   
    }
    return reservenumb;
    }

   console.log(reser(usinput))*/


   /* Palindrom

let usinput= prompt("Enter a name to check ")

const palindrm=(usinput)=>{
    let reservename= "";

    for (let index = usinput.length-1; index >=0; index--) {
        reservename+= usinput[index]; 

   }
   if (usinput==reservename) {
    console.log("its a plaindrome")
    return true;
    } else {
    console.log("no its not plaindrome")
    return false;
   }
}
console.log(palindrm(usinput))
*/


 /* check y in */

 userin("name")

 const check=(usinput)=>{
    const checkedchar="y";

    let count= 0;

    for (let index = 0; index < usinput.length; index++) {
        count += checkedchar === usinput[index] ? 1 : 0;
        }
        return count;

   }
 
console.log(check(usinput))

 


  