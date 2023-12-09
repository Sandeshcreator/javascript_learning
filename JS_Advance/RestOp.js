   //normal for in loop

//function sun(name, course, ...arrays) {
 
//     let sum =0;
//     for(let i in arrays ){
//     sum+=arrays[i]
//   }
//   document.write(name +" "+ course+sum +"<br>")

  //  }
  //  sun("sandy","sandy", 20,50)
   // sun("sandehsh", 40,50)

   function sun(name, course, ...arrays) {
    let sum = arrays.reduce((total, currentValue) => total + currentValue, 0);

    
    document.write(name + " " + course + " " + sum + "<br>");
  }
  
  sun("sandy", "sandy", 20, 50);
  sun("sandehsh", "sandehsh", 40, 50);
  