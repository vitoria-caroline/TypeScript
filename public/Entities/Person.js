"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const Gender_js_1 = __importDefault(require("./Gender.js"));
class Person {
    constructor(name, gender, birth) {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
    }
    showYourself() {
        const article = this.gender === Gender_js_1.default.Male ? 'o' : 'a';
        return `Olá, eu sou ${article} ${this.name}.`;
    }
}
exports.Person = Person;
exports.default = Person;
