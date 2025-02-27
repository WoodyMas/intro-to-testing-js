// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello Function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello World! when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello Jane! when executed', function() {
        expect(sayHello("Jane")).toBe(`Hello, Jane!`);
    });
    it('should return the string "Hello Pat! when executed', function() {
        expect(sayHello("Pat")).toBe(`Hello, Pat!`);
    });
    it('should return the string "Hello Alex! when executed', function() {
        expect(sayHello("Alex")).toBe(`Hello, Alex!`);
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

// describe('sayHello', function() {});
//describe('isFive', function() {
//     it('should be a defined function', function() {
//         expect(typeof isFive).toBe("function");
//     });
//     it('should return a boolean', function() {
//         expect(typeof isFive()).toBe("boolean");
//     });
//     it('should return true when passed "5"', function() {
//         expect(isFive(5)).toBe(true);
//     });
// });

describe("isFive", function () {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed "5"', function() {
        expect(isFive("5")).toBe(false);
    });
});

describe("isEven", function () {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed an even number', function() {
        expect(isEven(5)).toBe(true);
    });
    it("should return false when passed anything that isnt an even number", function() {
        expect(isEven("5")).toBe(false);
    });
});

// Working on isEven