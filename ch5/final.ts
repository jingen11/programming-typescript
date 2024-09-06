class MessageQueue {
  private constructor(private messages: string[]) { }
  static create(messages: string[]) {
    return new MessageQueue(messages)
  }
}

class BadQueue extends MessageQueue { }

new MessageQueue([])

MessageQueue.create([])

