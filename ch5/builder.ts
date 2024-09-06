class RequestBuilder {
  private url: string | null = null
  private method: 'get' | 'post' | null = null
  private data: object | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setData(data: object): this {
    this.data = data
    return this
  }

  setUrl(url: string): this {
    this.url = url
    return this
  }

  send() { }
}