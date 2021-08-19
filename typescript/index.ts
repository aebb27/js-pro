let muted: boolean = true;

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

let nombre: string = 'Name';
let hola = 'hola soy' + nombre;

let people: string[] = [];
people = ['Isabel', 'Calamardo', 'Alberto'];

let numPeople: Array<string | number> = [];
numPeople.push(9);
numPeople.push('Alice');

enum Color {
	Rojo = 'Rojo',
	Verde = 'Verde',
	Azul = 'Azul',
}

let color: Color = Color.Azul;
// console.log(`Mi color fav es ${color}`);

let joker: any;
joker = { wild: 'Comodin' };

let obj: Object = { key: 'value' };

function add(a: number, b: number): number {
	return a + b;
}

const sum = add(4, 6);

function createNumber(a: number): (arg0: number) => number {
	return function (b: number) {
		return b + a;
	};
}

const addFour = createNumber(4);
const fourPlus = addFour(6);

function fullName(first: string, last: string = 'Molde'): string {
	return `${first} ${last}`;
}
// console.log(fullName('Pedro'));

interface Rectangulo {
	ancho: number;
	alto: number;
	color?: Color;
}

let rect: Rectangulo = {
	ancho: 2,
	alto: 4,
	color: Color.Rojo,
};

function area(r: Rectangulo): number {
	return r.alto * r.ancho;
}

const rectArea = area(rect);
console.log(rectArea);

rect.toString = function () {
	console.log(this);
	return this.color ? `Un rectángulo color ${this.color}` : 'Un rectángulo';
};

console.log(rect.toString());
