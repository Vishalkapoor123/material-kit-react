export async function test(){
const response = await fetch('http://localhost:3000/').then(res => console.log(res));
console.log(response);
}