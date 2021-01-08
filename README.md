# Value and JSON for the Color

# Install
```
npm i @appres/color
```

## Import
```
const Color = require('@appres/color');

or 

import { Color } from '@appres/color';

```

## Usage
```
function: val
    Color.val("color name");
    Color.val("#color");
    Color.val(value);
    Color.val(value, a);
    Color.val(value, alpha);
    Color.val(r, g, b);
    Color.val(r, g, b, a);
    Color.val(r, g, b, alpha);
    Color.val({json});

return:
    type:   number
            value is color value with alpha
    ex: 
            as hex
                0xff00ff7f
            as decimal
                4278255487


function: json
    Color.json("color name");
    Color.json("#color");
    Color.json(value);
    Color.json(value, a);
    Color.json(value, alpha);
    Color.json(r, g, b);
    Color.json(r, g, b, a);
    Color.json(r, g, b, alpha);

return:
    type:   json
    ex; 
        {
            r: 255,
            g: 0,
            b: 255,
            a: 127            
        }

```

## color name
```
    lightred
    red	
    darkred

    lightgreen
    green
    darkgreen

    lightblue
    blue	
    darkblue    

    lightyellow	
    yellow	
    darkyellow	

    white 
    black	    
    
    silver	    

    lightgray	
    gray	
    darkgray	
    
    maroon    
    olive	
    lime        
    aqua	
    teal
    navy	
    fuchsia	
    purple

```

## Samples
```
Color.val("red");       // 0xac0000ff
Color.val("lightred");  // 0xff0000ff
Color.val("darkred");   // 0x640000ff

Color.val("#F0F");      // 0xff00ffff
Color.val("#F0F", 0.5); // 0xff00ff80
Color.val("#F0F7");     // 0xff00ff77
Color.val("#FF00FF");   // 0xff00ffff
Color.val("#FF00FF", 0.5);      // 0xff00ff80
Color.val("#FF00FF7F"); // 0xff00ff7f
Color.val(0xff00ff);    // 0xff00ffff
Color.val(0xff00ff7f);  // 0xff00ff7f
Color.val(0xff00ff, 0.5);       // 0xff00ff80
Color.val(0xff00ff, 0x7f);      // 0xff00ff7f
Color.val(255, 0, 255); // 0xff00ffff
Color.val(255, 0, 255, 127);    // 0xff00ff7f
Color.val(255, 0, 255, 0.5);    // 0xff00ff80
Color.val(0xff, 0x00, 0xff);    // 0xff00ffff
Color.val(0xff, 0x00, 0xff, 0x7f);      // 0xff00ff7f
Color.val(0xff, 0x00, 0xff, 0.5);       // 0xff00ff80
Color.val({r: 255, g: 0, b: 255, a: 127});      // 0xff00ff7f
Color.val({r: 0xff, g: 0x00, b: 0xff, a: 0x7f});        // 0xff00ff7f
Color.val({r: 255, g: 0, b: 255, alpha: 0.5});  // 0xff00ffff
Color.val({r: 0xff, g: 0x00, b: 0xff, alpha: 0.5});     // 0xff00ffff

Color.json("red");      // {"r":172,"g":0,"b":0,"a":255}
Color.json("lightred"); // {"r":255,"g":0,"b":0,"a":255}
Color.json("darkred");  // {"r":100,"g":0,"b":0,"a":255}

Color.json("#F0F");     // {"r":255,"g":0,"b":255,"a":255}
Color.json("#F0F", 0.5);        // {"r":255,"g":0,"b":255,"a":128}
Color.json("#F0F7");    // {"r":255,"g":0,"b":255,"a":119}
Color.json("#FF00FF");  // {"r":255,"g":0,"b":255,"a":255}
Color.json("#FF00FF", 0.5);     // {"r":255,"g":0,"b":255,"a":128}
Color.json("#FF00FF7F");        // {"r":255,"g":0,"b":255,"a":127}
Color.json(0xff00ff);   // {"r":255,"g":0,"b":255,"a":255}
Color.json(0xff00ff7f); // {"r":255,"g":0,"b":255,"a":127}
Color.json(0xff00ff, 0.5);      // {"r":255,"g":0,"b":255,"a":128}
Color.json(0xff00ff, 0x7f);     // {"r":255,"g":0,"b":255,"a":127}
Color.json(255, 0, 255);        // {"r":255,"g":0,"b":255,"a":255}
Color.json(255, 0, 255, 127);   // {"r":255,"g":0,"b":255,"a":127}
Color.json(255, 0, 255, 0.5);   // {"r":255,"g":0,"b":255,"a":128}
Color.json(0xff, 0x00, 0xff);   // {"r":255,"g":0,"b":255,"a":255}
Color.json(0xff, 0x00, 0xff, 0x7f);     // {"r":255,"g":0,"b":255,"a":127}
Color.json(0xff, 0x00, 0xff, 0.5);      // {"r":255,"g":0,"b":255,"a":128}
Color.json(4278255487); // {"r":255,"g":0,"b":255,"a":127}

```
