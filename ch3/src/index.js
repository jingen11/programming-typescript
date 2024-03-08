"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 1; // dont do this
let c;
// c = {
//     a: 1,
//     b: 2
// }
let u;
let age = 55;
age = 56;
let co;
let cdo = {
    name: 'name',
    purrs: true,
}; // either a cat or a dog or both(which is same as cat and dog)
let cda = {
    name: 'name',
    purrs: true,
    barks: true,
    wags: true,
};
// tuples
let at = [1];
let bt = ['', '', 1];
let ct = [1];
let ft;
//readonly
let as = [1, 2, 3];
function f1(x) {
    if (x < 10)
        return x;
    return null;
}
function f2() {
    return undefined;
}
function f3() {
}
function f4() {
    while (true) { }
}
function f5() {
    throw new Error('');
}
// enum
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Spanish"] = 1] = "Spanish";
    Language[Language["Russian"] = 2] = "Russian";
})(Language || (Language = {}));
let ae = 0 /* Language.English */;
// ae = Language[2] Error
function la(l) {
    return 'd';
}
la(2); // all number is enums
