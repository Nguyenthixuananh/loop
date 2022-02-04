            // for loop
// for(var i =1; i <= 5; i++) {
//     console.log(i);
// }


            // for-in loop

// var myInfo = {
//     name: 'Xuan Anh',
//     age: 18,
//     address: 'Bac Ninh'
// };
// for(var key in myInfo) {
    // console.log(key);
//     console.log(myInfo[key]);
// }

// var languages = ['Javascript', 'PHP', 'Runy'];
// for(var key in languages){
//     // console.log(key);
//     console.log(languages[key]);
// }

// var myString= 'Javascript';
// for(var key in myString){
//     console.log(myString[key]);
// }


                // for-of loop
// var languages= ['Javascript', 'PHP', 'Java'];
// for(var value of languages){
//     console.log(value);
// }

// var myString = 'javascript';
// for(var value of myString){
//     console.log(value);
// }

// var myInfo= {
//     name: 'Xuan Anh',
//     age: 18
// };
// console.log(Object.values(myInfo));
// for(var value of Object.keys(myInfo)){
//     console.log(value);
//     console.log(myInfo[value]);
// }

                // while loop
// var myArray = ['Javascript', 'PHP', 'Ruby'];
// var i =0;
// while (i< myArray.length){
//     console.log(myArray[i]);
//     i++;
// }

                // do/while loop
// var i =0;
// do{
//     i++;
//     console.log(i);
// } while(i < 10);

                // Lap long nhau
// var myArray = [
//     [1,2], [3,4], [5, 6]
// ];
// for(i = 0; i < myArray.length; i++){
//     for(j=0; j < myArray[i].length; j++){
//         console.log(myArray[i][j]);
//     }
// }

                // De quy
function giaThuaKhongDungDeQuy(number){
    var output = 1;
    for(var i=number; i>0; i--){
        output = output*i;
    }
    return output;
}

console.log(giaThuaKhongDungDeQuy(6));

function giaiThuaDeQuy(number){
    if(number > 0){
        return number * giaiThuaDeQuy(number -1);
    }
    return 1;

}    console.log(giaiThuaDeQuy(6));
