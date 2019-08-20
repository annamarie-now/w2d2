const squares = [
  100,
  -10,
  0,
  0,
  -40,
  -10,
  -10,
  5,
  0,
  -10,
  -50,
  -10,
  0,
  0,
  -50,
  -10
];

class Player {
  constructor(name, color, cash = 1000) {
    this.position = 0;
    this.cash = cash;
    this.name = name;
    this.color = color;
  }

  move() {
    const dice = 1 + Math.floor(Math.random() * 6);
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];

    if (!this.prevPositions) {
      this.prevPositions = [];
    }
    this.prevPositions.push(this.position);
  }

  displayInfo() {
    console.log(
      this.name + " is on position " + this.position + " and has $" + this.cash
    );
  }
}

const player1 = new Player("Min", "red", 800);
player1.move();
player1.displayInfo();

const player2 = new Player("Svenja", "blue");
player2.move();
player2.displayInfo();

/*
const player1 = {
  name: "Min",
  color: "red",
  position: 0,
  cash: 1000,
  move: function() {
    const dice = 1 + Math.floor(Math.random() * 6);
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
  },
  displayInfo: function() {
    console.log(
      this.name + " is on position " + this.position + " and has $" + this.cash
    );
  }
};

player1.move();
player1.displayInfo();
player1.move();
player1.move();
player1.move();
player1.displayInfo();

const player2 = {
  name: "Svenja",
  color: "blue",
  position: 0,
  cash: 1000
};

const player3 = {
  name: "Bruno",
  color: "black",
  position: 0,
  cash: 1000
};
*/

/*
// let dice = Math.ceil(Math.random() * 6); Math.random() can return 0;
let dice = 1 + Math.floor(Math.random() * 6);
player1.position = player1.position + dice;
player1.cash += squares[player1.position];

dice = 1 + Math.floor(Math.random() * 6);
player2.position += dice;
player2.cash += squares[player2.position];

dice = 1 + Math.floor(Math.random() * 6);
player3.position += dice;
player3.cash += squares[player3.position];
*/

class BankAccount {
  constructor(name, currency) {
    this.owner = name;
    this.currency = currency;
    this.balance = 0;
  }

  depositMoney(amount) {
    this.balance += amount;
  }

  withdrawMoney(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }

  showBalance() {
    console.log(this.currency + this.balance);
  }
}

let account1 = new BankAccount("Pierre", "$");
account1.depositMoney(100);
account1.withdrawMoney(25);
account1.showBalance();
// $75

class Vehicle {
  constructor(make, model, year, color, wheels) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.wheels = wheels;

    this.speed = 0;
    this.factor = 1.2;
  }

  accelerate() {
    this.speed += 5 * this.factor;
  }

  brake(factor) {
    // in case this.speed - 10 is negative, then use 0
    this.speed = Math.max(this.speed - 10 * factor, 0);
  }
}

class MotorBike extends Vehicle {
  constructor(make, model, year, color, helmetColor) {
    super(make, model, year, color, 2);
    this.factor = 1.4;
    this.helmetColor = helmetColor;
  }

  wheelie() {
    console.log("Bike is on 1 wheel! yoooohoo");
  }

  //   overwrite a method from the parent class
  brake() {
    // calls the brake method from the parent class
    super.brake(2);
  }
}

const vehicle1 = new Vehicle("Subaru", "Impreza", "1997", "blue", 4);
vehicle1.accelerate();
// speed is 6 (5 * 1.2)
const motorbike1 = new MotorBike("Ducati", "848evo", "2010", "red", "green");
motorbike1.accelerate();
// speed is 7 (5 * 1.4)
