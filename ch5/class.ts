class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      // Kings
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
      // Queens
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),
      // Bishops
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),
    ]
  }
}

abstract class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): boolean
}

class Position {
  constructor(
    private file: File,
    private rank: Rank
  ) { }
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Queen extends Piece { }
class Bishop extends Piece { }
class Knight extends Piece { }
class Rook extends Piece { }
class Pawn extends Piece { }

type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Set {
  add(value: number): this {
    return this
  }
}

// allowed
class Zebra {
  trot() { }
}

class Poodle {
  trot() { }
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle)

//not allowed
class A {
  private x = 1
}
class B extends A { }
function f(a: A) { }
f(new A)
f(new B)
f({ x: 1 })

type State = {
  [key: string]: string
}

class StringDatabase {
  state: State = {}
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null
  }
  set(key: string, value: string): void {
    this.state[key] = value
  }
  static from(state: State) {
    let db = new StringDatabase
    for (let key in state) {
      db.set(key, state[key])
    }
    return db
  }
}
// =>
// 1. interface
interface StringDatabase {
  state: State
  get(key: string): string | null
  set(key: string, value: string): void
}
// 2. interface
interface StringDatabaseConstructor {
  new(): StringDatabase // constructor signature
  from(state: State): StringDatabase
}
