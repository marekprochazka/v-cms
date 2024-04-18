export class Stack<T> {
  private _internal: T[]

  constructor() {
    this._internal = []
  }

  public push(item: T) {
    this._internal.push(item)
  }

  public pop(): T | undefined {
    return this._internal.pop()
  }

  public clear() {
    this._internal = []
  }

  public get length(): number {
    return this._internal.length
  }

  public get isEmpty(): boolean {
    return this._internal.length === 0
  }

  public get top(): T | undefined {
    return this._internal[this.length - 1]
  }
}
