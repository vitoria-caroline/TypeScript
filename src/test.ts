import { Book } from "./Entities/Book"
import gender from "./Entities/Gender"
import { Periodical } from "./Entities/Periodical"
import Person from "./Entities/Person"

const pessoa1 = new Person('Hal Elrod', gender.Male, new Date('1979-05-30T00:00:00'),)

const livro1 = new Book(8901, 6, 9,'Milagre da Manhã', 'O segredo para transformar sua vida',  new Date('2012-12-07T00:00:00') , pessoa1)

const periodical1 = new Periodical(2710, 5, 789, 'Revista VEJA', 'Efeito Colateral', new Date('2020-10-28T00:00:00') , pessoa1 )

const pessoas = [pessoa1]
const livros = [livro1]
const periodicais = [periodical1]


console.log(pessoas)
console.log(livros)
console.log(periodicais)