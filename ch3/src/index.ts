let a :Object;

a = 1 // dont do this

let c : {b:Number}

c = {
    a: 1,
    b: 2
}

let u: {
    b: number,
    c?: string,
    [key: number]: Boolean
}

type Age = number

type Person {
    name: string,
    age: Age
}

let age : Age = 55

age = 56

type Color = 'red'
let co: Color
co = 'Blue'

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

let cdo: CatOrDogOrBoth = {
    name: 'name',
    purrs: true,
}// either a cat or a dog or both(which is same as cat and dog)

let cda: CatAndDog = { // must implement all
    name: 'name',
    purrs: true,
    barks: true,
    wags: true,
}