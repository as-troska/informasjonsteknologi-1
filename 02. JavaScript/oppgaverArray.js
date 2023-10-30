let tall = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(tall[2], tall[4], tall[6], tall[8], tall[10])

let tallOppgave3 = [2, 4, 6, 8]
tallOppgave3.pop()
tallOppgave3.shift()

console.log(tallOppgave3)

tallOppgave3.splice(1, 0, 5)

console.log(tallOppgave3)

tallOppgave3.unshift(3);

tallOppgave3.push(7)
console.log(tallOppgave3)

tallOppgave3[0] = "tre";
tallOppgave3[2] = "fem";
let index7 = tallOppgave3.indexOf(7)
tallOppgave3[index7] = "syv";
console.log(tallOppgave3)

console.log(tallOppgave3.indexOf(10), tallOppgave3.indexOf(-10))

let tyveTilfeldigeTall = []

for (let i = 0; i < 20; i++) {
    tyveTilfeldigeTall.push(Math.floor(Math.random() * 100))
}

console.log(tyveTilfeldigeTall)