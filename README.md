# typescript

## TypeScrit vs JavaScript

Typescript is a superset of JavaScript, that means any syntactically valid JS code is also valid TS code.  
Example:

```javascript
// Valid in JS and TS
function makeBurger() {
    return "Bun|Salad|Paddy|Tomato|Ketchup|Bun"
}

// Neither valid in JS nor TS
function makeBurger( {
    return "Bun|Salad|Paddy|Tomato|Ketchup|Bun"
}
```

However TS adds static type checks which means that it introduces restrictions on which types can be used.  
Example:

```javascript
const burger = {
  bunType: "Classic",
  isVegetarian: false,
  Sauces: ["Ketchup", "Mayonnaise", "Chilli-Sauce"],
  Topping: ["Tomato", "Salad"],
};

// Will result in a static code check error with TS
// Will result in a runtime error with JS (also in TS)
const isTasty = burger.isTasty;
```

Even if TS is a superset of JS and adds static checks the runtime behaviour of JS code that is transfered to a TS project will always stay the same. Thas means e.g. if TS shows some errors for JS code, when running it then it still behaves the same as plain JS code. For the example above `const isTasty = burger.isTasty;` will result in an `undefined` for both, JS and TS.
