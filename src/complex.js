export default class Complex {
	constructor(real, imag){
		this._real = real;
		this._imag = imag;
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
				real = this._real + num.real;
				imag = this._imag + num.imag;
				break;
			case '-':
				real = this._real - num.real;
				imag = this._imag - num.imag;
				break;
			case '*':
				real = this._real * num.real - this._imag * num.imag;
				imag = this._imag * num.real + this._real * num.imag;
				break;
			case '/':
				throw `Division of complex numbers is not yet implemented`;
		}

		return Complex.of(real, imag);
	}

	static of(real, imag){
		return new Complex(real, imag);
	}

	real(){ return this._real; }

	imag(){ return this._imag; }

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
		return `(${this._real} + ${this._imag}i)`;
	}
}