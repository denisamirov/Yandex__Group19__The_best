class Car{
    constructor(model, maxSpeed){
      this.model=model;
      this.maxSpeed=maxSpeed;
    }
    
    makeSound(){
      return "Врум врум!"
    }
  
    displayCar() {
      return `Это ${this.model} и она едет ${this.maxSpeed} км/ч!`
    } 
}

let Tesla = new Car("Tesla", 100)
console.log(Tesla)
console.log(Tesla.displayCar())



class Lada extends Car {
  constructor(model, maxSpeed, price) {
    super(model, maxSpeed)
    this.price = price
  }
  
  displayCar() {
    return super.displayCar() + 'Это российский автопром! Мощь!'
  }
  
  makeSound() {
    return super.makeSound() + 'Жигули!!!'
  }
}

let Lada_2 = new Lada("Lada", 80, 1000000)
console.log(Lada_2)
console.log(Lada_2.displayCar())
// alert(Lada_2.makeSound())