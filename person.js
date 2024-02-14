class Person{
    static count = 0
    // The constructor allows you to have a default value
    // contructor allows you to create an object
    constructor(){
        this.firstName = "Please provide your First Name",
        this.lastName = "Please provide your First Name"
        this.age  = 0
        // when using this.count the number will not increment
        // person.count will increment the count for all instances of the class
        Person.count += 1;
    }
    // First Name
    // setter allows you to update the value
    set FirstName(value){
        this.firstName = value;
    }

    // getter allows you to return the value
    get FirstName() { 
        return this.firstName
    }

    // Last Name
    set LastName(value){
        this.lastName = value;
    }

    get LastName() { 
        return this.lastName
    }

    // Age
    set Age(value){
        this.age = value;
    }

    // getter allows you to return the value
    get Age() { 
        return this.age
    }

    // display method
    display(){
        console.log(`
        ====== Person ID: ${Person.count}=======
        First name: ${this.FirstName}
        Last name: ${this.LastName}
        Age: ${this.Age}
        ======================================`);
    }
}

export{
    Person
}