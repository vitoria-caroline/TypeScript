import Person from './Person.js'

export class Document {
  public title: string
  public subtitle: string
  public publishedAt: Date | number
  public author: Person

  constructor (title: string, subtitle: string, publishedAt: Date | number, author: Person) {
    this.title = title 
    this.subtitle = subtitle
    this.publishedAt = publishedAt
    this.author = author
  }
}

export default Document