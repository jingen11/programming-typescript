interface Food {
  calories: number
  tasty: boolean
}

interface Sushi extends Food {
  salty: boolean
}

interface Cake extends Food {
  sweet: boolean
}

interface A {
  good(x: number): string
  bad(x: number): string
}

interface B extends A {
  good(x: number | string): string
  bad(x: string): string
}

// Declaration merging
interface User {
  name: string
}

interface User {
  age: number
}

let a: User = {
  name: 'Ashley',
  age: 30
}

type TUser = {
  name: string
}

type TUser = {
  age: number
}

interface IUser {
  age: string
}

interface IUser {
  age: number
}

interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  name = 'Whiskers'
  eat(food: string) {
    console.log('Ate some', food, '. Mmm!')
  }
  sleep(hours: number) {
    console.info('Slept for', hours, 'hours')
  }
  meow() {
    console.info('Meow')
  }
}

