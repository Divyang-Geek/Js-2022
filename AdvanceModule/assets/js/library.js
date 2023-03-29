// export using before the intialization
let message = "Es6 Modules";

let moduleSum = (x, y) => x * y;

// we can use export in one line same like below
// document.write("hello");

class moduleClass {
    constructor(name) {
        this.myName = name;
    }
}

// default function
export default function (x, y) {
    return x / y;
}

export { message, moduleSum, moduleClass };
