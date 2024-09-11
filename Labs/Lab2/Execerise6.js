class Vehicle {
    constructor(modelName, manufactureYear) {
        this.modelName = modelName;
        this.manufactureYear = manufactureYear;
    }

    getDetails() {
        return `Model: ${this.modelName} Engine ${this.manufactureYear}`;
    }
}

class LuxurySedan extends Vehicle {
    constructor(modelName, manufactureYear, balanceAmount) {
        super(modelName, manufactureYear);
        this.balanceAmount = balanceAmount;
    }

    getInfo() {
        return `${this.modelName} has a balance of $${this.balanceAmount.toFixed(2)}`;
    }
}

const car1 = new Vehicle('Pontiac Firebird', 1976);
console.log(car1.getDetails());

const luxuryCar = new LuxurySedan('Volvo SD', 2018, 30000);
console.log(luxuryCar.getInfo());
