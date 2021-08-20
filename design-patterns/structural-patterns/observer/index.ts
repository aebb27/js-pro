interface Observer {
	update: (data: any) => void;
}
interface Subject {
	subscribe: (observer: Observer) => void;
	unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
	observers: Observer[] = [];
	constructor() {
		const input: HTMLInputElement = document.querySelector('#value');
		input.addEventListener('input', () => {
			this.notify(input.value);
		});
	}
	subscribe(observer: Observer) {
		this.observers.push(observer);
	}
	unsubscribe(observer: Observer) {
		const index = this.observers.findIndex((obs) => obs === observer);
		this.observers.splice(index, 1);
	}

	notify(data: any) {
		this.observers.forEach((obs) => obs.update(data));
	}
}

class PriceDisplay implements Observer {
	private input: HTMLInputElement;
	constructor() {
		this.input = document.querySelector('#price');
	}
	update(data: any) {
		this.input.innerText = data;
	}
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);
setTimeout(() => value.unsubscribe(display), 5000);
