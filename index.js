// console.log('hello world')

// let backpack = []

// // backpack.push('sword')
// // backpack.push('shield')
// // backpack.push('food')

// backpack.push('sword', 'shield', 'food')

// // let sword = backpack.shift()
// let sword = backpack.splice(0, 1)

// let furCoat = 'fur coat'

// backpack.push(furCoat)

// backpack.pop()



// backpack.push('flint', 'blanket', 'knife', 'toothbrush')

// let itemCount = backpack.length

// let backpack2 = backpack.splice(2, 3)

// console.log(backpack, backpack2)

// // for(let i = 0; i < backpack.length; i++){
// //     console.log(backpack[i])
// // }
// // for(let j = 0; j < backpack2.length; j++){
// //     console.log(backpack2[j])
// // }

// if(backpack.length >= 3){
//     for(let i = 0; i < 3; i++){
//         console.log(backpack[i])
//     }
// }else{
//     for(let i = 0; i < backpack.length; i++){
//         console.log(backpack[i])
//     }
// }

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('------------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guessMe is divisible by 4 or 5. Added 25')
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log('guessMe is divisible by 3. Subtracted 27')
        guessMe -= 27
    } else {
        console.log('Added 3')
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22 guessMe is now ${guessMe}`)
}

console.log(guessMe)