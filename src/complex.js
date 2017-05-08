export default class Complex {
	constructor(){
		if (arguments.length === 1){
			this.real = arguments[0]["0"];
			this.imag = arguments[0]["1"];
		} else if (arguments.length === 2) {
			this.real = arguments[0];
			this.imag = arguments[1];
		} else {
			throw `Error`;
		}

	}

	_performChecks(value){
		if (!(value instanceof Complex)){
			throw `${value} is not a complex number.`;
		}

		if (value.real === null || value.imag === null){
			throw `This number does not have a valid real and/or imaginary component: ${value.toString()}`;
		}
	}

	_doOperation(num, operation){
		this._performChecks(num);
		let real;
		let imag;
		switch (operation){
			case '+':
				real = this.real + num.real;
				imag = this.imag + num.imag;
				break;
			case '-':
				real = this.real - num.real;
				imag = this.imag - num.imag;
				break;
			case '*':
				real = this.real * num.real - this.imag * num.imag;
				imag = this.imag * num.real + this.real * num.imag;
				break;
			case '/':
				throw `Division of complex numbers is not yet implemented`;
		}

		return Complex.of(real, imag);
	}

	static of(){
		return new Complex(arguments);
	}

	add(num){
		return this._doOperation(num, '+');
	}

	subtract(num){
		return this._doOperation(num, '-');
	}

	multiply(num){
		return this._doOperation(num, '*');
	}

	divide(num){
		return this._doOperation(num, '/');
	}

	toString(){
		return `(${this.real} + ${this.imag}i)`;
	}
}