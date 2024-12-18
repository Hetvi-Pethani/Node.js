const sum = (a, b) => {
    return a + b;
}
const sub = () => {
    let a = 10;
    b = 5;
    console.log(`sub:-${a - b}`)
}
const arr = [10, 2, true, 90]

const users = [
    { id: 1, name: 'John', phone: "12345" },
    { id: 2, name: 'Jane', phone: "67890" },
]
const obj = {
    name: 'John',
    phone: "12345",
}
module.exports = { sum, sub, arr, users, obj };