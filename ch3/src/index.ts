let a :Object;

a = 1 // dont do this

let c : {b:Number}

// c = {
//     a: 1,
//     b: 2
// }

let u: {
    b: number,
    c?: string,
    [key: number]: Boolean
}

type Age = number

type Person = {
    name: string,
    age: Age
}

let age : Age = 55

age = 56

type Color = 'red'
let co: Color
// co = 'Blue'

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
// tuples
let at: [number] = [1]
let bt:[string,string,number] = ['','',1]
let ct :[number, number?] = [1]
let ft :[string,...string[]]

//readonly
let as : readonly number[] = [1,2,3]

function f1(x:number) {
  if(x < 10)return x;
  return null;
}

function f2() {
  return undefined
}

function f3() {

}

function f4() {
  while(true){}
}

function f5(){
  throw new Error('')
}

// enum
const enum Language{
  English,
  Spanish,
  Russian
}

let ae = Language.English
// ae = Language[2] Error

function la(l:Language){
  return 'd'
}

la(2) // all number is enums