// const student = {
//     name : 'kodom ali',
//     money : 5000,
//     study:'bangla',
//     subject:['bangla2','grammer','rochona'],
//     exam: function () {
//         return this.money +'total taka ase';
        
//     }
// };

//  const output =student.exam();
//  console.log(output);


// const bottle = {
    // color: 'red',
    // price:50,
    // isClean:true,
    // capacity:1
// };
//  console.log(keys);
// const values = Object.values(bottle);
// //  console.log(values);
// const pair = Object.entries(bottle);
// // console.log(pair );
// Object.seal(bottle)
// delete bottle.isClean;
// console.log(bottle);
// const keys = Object.keys(bottle);
// console.log(keys);

// 3 ways to read object property 
// for (const key of keys) {
//     console.log(bottle[key]); 
// };

// for (const key in bottle) {
//     console.log(key,bottle[key]);
    
// }

//  compare two things *************
        //  ******----------------

// const first = {a:2, b:3 ,c:4 ,d:5};
// const second = {a:2, b:3 ,c:4 ,d:5};

// const firstKey = Object.keys(first);
// const secondKey = Object.keys(second);
// // console.log(firstKey,secondKey);


// function compareObject(first,second) {
    
//     if (firstKey.length===secondKey.length) {
//         for (const key of firstKey) {
//           if (first[key] !== second[key]) { return false ;
            
//           } 
            
//         }
//       return true ;
        
//     }
//     else{
//        return false;
//     }
// };
// const result = compareObject(first,second);
// console.log(result);

// const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);

// const obj1= {module: 35, video:2}; 
// const obj2= {module: 35, video:2};
// console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 




