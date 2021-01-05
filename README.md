# Value and JSON for the Color

## Import
```
const color = require('@appres/color');
```

## Uses
```
function:
    color.hex({"#color"});
    color.hex({value});
    color.hex({r}, {g}, {g});
    color.hex({r}, {g}, {g}, {a});

return:
    number type
    color value
    ex; 
        hex
            0xff00ff7f
        decimal
            4278255487


```

## Samples
```
let cVal = color.val("#F0F");
let cVal = color.val("#F0F", 0.5);
let cVal = color.val("#F0F7");
let cVal = color.val("#FF00FF");
let cVal = color.val("#FF00FF", 0.5);
let cVal = color.val("#FF00FF7F");
let cVal = color.val(0xff00ff7f);
let cVal = color.val(0xff00ff, 0.5);
let cVal = color.val(0xff00ff, 0x7f);
let cVal = color.val(255, 0, 255);
let cVal = color.val(255, 0, 255, 127);
let cVal = color.val(255, 0, 255, 0.5);
let cVal = color.val({r: 255, g: 0, b: 255, alpha: 0.5});
let cVal = color.val({r: 255, g: 0, b: 255, a: 127});

let cJson = color.json("#F0F");
let cJson = color.json("#F0F", 0.5);
let cJson = color.json("#F0F7");
let cJson = color.json("#FF00FF");
let cJson = color.json("#FF00FF", 0.5);
let cJson = color.json("#FF00FF7F");
let cJson = color.json(0xff00ff7f);
let cJson = color.json(0xff00ff, 0.5);
let cJson = color.json(0xff00ff, 0x7f);
let cJson = color.json(255, 0, 255);
let cJson = color.json(255, 0, 255, 127);
let cJson = color.json(255, 0, 255, 0.5);
```
