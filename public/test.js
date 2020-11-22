"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Entities/Book");
const Gender_1 = __importDefault(require("./Entities/Gender"));
const Periodical_1 = require("./Entities/Periodical");
const Person_1 = __importDefault(require("./Entities/Person"));
const pessoa1 = new Person_1.default('Hal Elrod', Gender_1.default.Male, new Date('1979-05-30T00:00:00'));
const livro1 = new Book_1.Book(8901, 6, 9, 'Milagre da Manhã', 'O segredo para transformar sua vida', new Date('2012-12-07T00:00:00'), pessoa1);
const periodical1 = new Periodical_1.Periodical(2710, 5, 789, 'Revista VEJA', 'Efeito Colateral', new Date('2020-10-28T00:00:00'), pessoa1);
const pessoas = [pessoa1];
const livros = [livro1];
const periodicais = [periodical1];
console.log(pessoas);
console.log(livros);
console.log(periodicais);
