const greet = require('./greet');

test('Write a method greet(name)', () => {
expect(greet("Bob"));
});

test('when name is "Bobby", the method should return a string "Hello, Bobby."', () => {
    expect(greet("Bobby")).toBe("Hello, Bobby.");
    });

test('null, then the method should return the string "Hello, my friend."', () => {
    expect(greet(null)).toBe("Hello, my friend.");
    });

test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', () => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
    });

