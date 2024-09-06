// exercise 2
class MessageQueue2 {
  protected constructor(private messages: string[]) { }
  static create(messages: string[]) {
    return new MessageQueue2(messages)
  }
}

class BadQueue2 extends MessageQueue2 { }

new MessageQueue2([])

// exercise 3
type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

type Fn = {
  create(type: 'balletFlat'): BalletFlat,
  create(type: 'boot'): Boot
  create(type: 'sneaker'): Sneaker
}

let Shoe: Fn = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}

const a = Shoe.create('balletFlat')
const b = Shoe.create('boot')
const c = Shoe.create('sneaker')

// exercise 4
class RequestBuilder {
  private url: string | null = null
  private method: 'get' | 'post' | null = null
  private data: object | null = null
  private caller = new Caller()

  setMethod(method: 'get' | 'post'): Caller {
    this.method = method
    return this.caller
  }

  setData(data: object): this {
    this.data = data
    return this
  }

  setUrl(url: string): Caller {
    this.url = url
    return this.caller
  }
}

class Caller extends RequestBuilder {
  send() {

  }
}

const r = new RequestBuilder()
r.setData({}).setMethod('get').setUrl('dads').send()