type Reservation = {}

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
  (destination: string): Reservation
}

let reserve: Reserve = (from: Date | string, to?: Date | string, destination?: string): Reservation => {
  return {}
}

function call<T extends unknown, U, V extends unknown[]>(
  f: (...args: [T, string, ...V]) => U, ...args: [T, string, ...V]
): U {
  return f(...args)
}
function fill(length: number, value: string, third: number): string[] {
  return Array.from({ length }, () => value)
}
function fill2(length: number, value: number, third: number): number[] {
  return Array.from({ length }, () => value)
}
call(fill, 10, 'a', 12) // evaluates to an array of 10 'a's
// call(fill2, 10, 11, 12)

function is<T>(...args: T[]): boolean {
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] !== args[i + 1]) return false;
  }
  return true
}

// Compare a string and a string 
is('string', 'otherstring') // false
// Compare a boolean and a boolean 
is(true, false) // false
// Compare a number and a number 
is(42, 42) // true
// Comparing two different types should give a compile-time error
is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable
// to parameter of type 'number'.
// [Hard] I should be able to pass any number of arguments 
is([1], [1, 2], [1, 2, 3]) // false