export function convertToman(number: number) {
    let reversedNumber = number.toString().split("").reverse()
    let numArray = []
    for (let index = 0; index < reversedNumber.length ; index++) {
        const element = reversedNumber[index];
        if (index % 3 === 0 && index !== 0 ) {
            numArray.push(",")
        }
        numArray.push(element)
    }

    let finalNumber = numArray.reverse()
   return finalNumber
    
}
