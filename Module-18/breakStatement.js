var    i = 0;
 

// for(i = 0; i <= 20; i++){
//     console.log(i);
//     if(i == 10){
//         break;
//     }
// }

// while(i < 20){
//     console.log(i);
//     i++;
//     if(i  > 10){
//         break;
//     }
// }

while(i < 20){
    i++;
    if(i  < 10){
        continue;
    }
    console.log(i);
}