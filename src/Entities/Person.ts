import Gender from './Gender.js'

export class Person implements IShowYourself {
  public name: string
  public gender: Gender
  public birth: Date

  constructor (name: string, gender: Gender, birth: Date) {
    this.name = name
    this.gender = gender
    this.birth = birth
  }

  public showYourself () {
    const article = this.gender === Gender.Male ? 'o' : 'a'
    return `Olá, eu sou ${article} ${this.name}.`
  }
}

export default Person