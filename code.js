// helloWorld function
    function helloWorld() {
        return "Hello, World!";
    }

// sayHello function
    function sayHello(input) {
        // if (input === "Alex"){
        //     return "Hello Alex!";
        // } else if (input === "Jane"){
        //     return "Hello Jane!";
        // } else if (input === "Pat") {
        //     return "Hello Pat!";
        // }
        if (input) {
            return "Hello " + input + "!";
        }
        else {
            return "Hello World!"
        }
    }