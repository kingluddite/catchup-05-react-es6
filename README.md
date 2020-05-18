## Template Strings
* aka "Template literals"
* Strings use `""` and `''`
* ES6 introduced template literals that use the backtick (`)
    - Surround your string with backticks
    - Put a javascript expression inside the template string `${variable}`

```
let name = 'John';
console.log(`Hello, my name is ${name`); // Hello my name is John
```

## Pros of Template strings
* Easier to read
* Easier to move and rearrange things

## ACTIVITY!
### Integrate template string inside getTip function
```
let getTip = function tipCalculator(total, tipPercent = 0.2) {
  return (total * (1 + tipPercent)).toFixed(2);
};
```

* But you want to output a template string that says `A 20% tip on the total value of $100 would be $120`
