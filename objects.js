class Human {

    constructor(name, age) {

        this.name = name
        this.age = age

    }

    talk () {
        return this.name + " speaks"
    }

}

const girl = new Human ('Janae', 28)
console.log(girl.talk())

class Man extends Human {

}

const Bill = new Man ('Bill', 36)
console.log(Bill.talk())

