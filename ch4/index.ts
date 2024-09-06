function add(a: number, b: number): number {
  return a + b;
}

function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || 'Not signed in')
}

function log2(message: string, userId = 'Not signed in') {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId)
}

type Context = {
  appId?: string
  userId?: string
}

function log3(message: string, context: Context = {}) {

}

function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0)
}

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

// typing this
function fancyDate(this: Date): string {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

fancyDate.call(new Date)

// iterable
const numbers = {
  *[Symbol.iterator]() {
    for (let i = 1; i <= 10; i++) {
      yield i
    }
  }
}

const g = numbers[Symbol.iterator]() // iterator (object that has .next() method) // generator is special as it returns iterable iterator
numbers // iterables (must implement [Symbol.iterator])

type f = (a: number, b: number) => number


// function overloading
type Reserve = {
  (from: Date, to: Date, destination: string): void
  (from: Date, destination: string): void
}

let reserve: Reserve = (from, to: Date | string, destination?: string) => {

}

reserve(new Date, new Date, '')

// polymorphism (generic)
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

// generics bound
type FilterT<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}

let filter: FilterT<number> = (array, f) => { }