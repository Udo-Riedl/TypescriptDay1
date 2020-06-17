/* Basic ex 1

Make a multiplication table using TypeScript loops from an array with number values 1 to 10 and the result should look like this:


 */

const array: number[] = []

for (let i = 1; i <= 10; i++) {
    array.push(i)
}

console.log(array)

for (const number of array) {
    for (const number2 of array) {
        const divElement = document.getElementById('results')! as HTMLElement
        divElement.innerHTML += (`<p>${number} x ${number2} = ${number * number2}</p>`)
    }
}

/* Basic ex 2

1. Print your full name in the browser.
2. Print your first name 10 times in the browser using a forEach loop. 
3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
 */

array.forEach((elem: number) => {
    const divElement = document.getElementById('name-results')! as HTMLElement
    divElement.innerHTML += `<p id="name${elem}">Balint</p>`
    setTimeout(() => {
        const nameP = document.getElementById(`name${elem}`)! as HTMLParagraphElement
        nameP.innerText += ' Bakos'
    }, 5000)
})

/* Basic ex 3

Create an array of names, this array should only accept strings.

1. Print only the index of the elements.(ForIn)
2. Print only the values. (ForOf)
3. Print both index and values(ForIn)

*/

for (const index in array) {
    console.log('Index', index)
}

for (const value of array) {
    console.log('Value', value)
}

for (const index in array) {
    console.log('Index', index, 'Value', array[index])
}
