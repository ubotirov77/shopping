// Public , private , protected
class Account {
    // state
    #owner; // privete 
    #amount; // private
    currency; // public
    // constructor
    constructor(owner, amount, currency ='usd') {
      this.#owner = owner;
      this.#amount = amount; 
      this.currency = currency;
    }
    // method quramiz 
  checkBalance(){
    console.log(`Hi ${this.#owner}, your balance: ${this.#amount} ${this.currency}`);
    this.#test();
  }
    deposit(money){
    this.#amount += money;  
  }
   
    #test(){
      console.log("This only obtainable inside class");
    }
  } 
  // Encapsulation : Public, private, protected
  // Java: Public, private, protected
  // PHP : Public, private, protected
  // python: , __, _
  // JavaScript: , #, _
  
  const myAccount = new Account('Norman',1000);
  
  console.log('==== 2 =====');
  
  myAccount.deposit(7000);
  myAccount.checkBalance();
  
  myAccount.deposit(15000);
  myAccount.checkBalance();
  //myAccount.test();
  
  console.log("=====2=====");
  
  // myAccount.owner = 'Martin';  // Owner O'zgarmadi sababi owner Private ga o'zgardi
  // myAccount.checkBalance();
  
  // console.log("=====3=====");
  // myAccount.amount = 20000000; // Amount ham O'zgarmadi sabab amount ham private ga o'zgartirildi
  // myAccount.checkBalance();
  
  //console.log(myAccount.currency);
  //console.log(myAccount.#owner);  // Undefined chiqadi sababi owner private holatda 
  console.log("=================================INHERITANCE==========================================")
  // =================================================================================================
                                         // INHERITANCE \\
  //===================================================================================================
  
  // Parent Class
  class Car {
    constructor(brand, model){
      this.brand = brand;
      this.model = model;
    }
    
   getDetails(){
     console.log(`${this.brand} ${this.model}`)
   }
    // _ start bo'lsa protected bo'ladi protected level between public and private
    // parent classni child classlaridan hosil bo'lgan objectlar orqali chaqira olamiz 
    // less common use than public and private
    
    start(){ 
      console.log("start engine");
    }
    stop(){
      console.log("Stop engine");
    }
    
    maximizeSpeed(){
      console.log("Maximal speed is not provided")
    }
  }
  
  // child Class 
  
  class Toyota extends Car {
    #fuel = 0;
    constructor(model, category, speed){
      super('Toyota',model);
      this.category = category;
      this.speed = speed;
    }
    fillUpGasoline(a){
      this.#fuel += a;
    }
    maximizeSpeed(){
      console.log(`${this.model} reaches ${this.speed}km`)
    }
  }
  
  class Tesla extends Car {
    #batery = 0;
    constructor(brand,category,speed){
      super("Tesla", "Model S" , 330);
      this.category = category;
      this.speed = speed;
    }
    
    chargePower(b){
      this.#batery += b;
    }
     maximizeSpeed(){
      console.log(`${this.model} reaches ${this.speed}km`)
    }
  }
  
  const myCar = new Toyota("Camry","Sedan", 220);
  myCar.getDetails();
  myCar.start();
  //myCar.stop();
  //myCar.fillUpGasoline(20);
  //myCar.maximizeSpeed();
  
  
  console.log("======================================");
  
  const yourCar = new Tesla("Model S","Sedan", 330);
  yourCar.getDetails();
  //yourCar.stop();
  //yourCar.chargePower(50);
  yourCar.start();
  
  // Polymorphism
  myCar.maximizeSpeed();
  yourCar.maximizeSpeed();
  