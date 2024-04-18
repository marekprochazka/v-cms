export class InvalidEndTagException extends Error {
  constructor(endTag: string, startTag: string) {
    super(`End tag ${endTag} does not match start tag ${startTag}`)
  }
}
