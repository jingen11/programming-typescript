function add(a:number, b:number): number {
  return a +b;
}

function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message,userId||'Not signed in')
}

function log2(message: string, userId = 'Not signed in') {
  let time = new Date().toLocaleTimeString();
  console.log(time, message,userId)
}

type Context = {
  appId?: string
  userId?: string
}

function log3(message: string, context: Context = {}) {

}

function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n)=>total + n,0)
}

function sumVariadicSafe(...numbers: number[]):number {
  return numbers.reduce((total,n)=>total + n, 0)
}

// typing this
function fancyDate(this: Date) : string {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

fancyDate.call(new Date)