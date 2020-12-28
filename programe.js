//prime number
// looping from lowerNumber to higherNumber
for (let i = 1; i <= 10; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if ( flag == 0) {
        console.log(i);
    }
}