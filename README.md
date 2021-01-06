# Value and JSON for the Color

## Import
```
const color = require('@appres/color');
```

## Uses
```
function: val
    color.val({"#color"});
    color.val({value});
    color.val({value},{a});
    color.val({value},{alpha});
    color.val({r}, {g}, {b});
    color.val({r}, {g}, {b}, {a});
    color.val({r}, {g}, {b}, {alpha});
    color.val({json});

return:
    type:   number
            value is color value with alpha
    ex: 
            as hex
                0xff00ff7f
            as decimal
                4278255487




function: json
    color.json({"#color"});
    color.json({value});
    color.json({value},{a});
    color.json({value},{alpha});
    color.json({r}, {g}, {b});
    color.json({r}, {g}, {b}, {a});
    color.json({r}, {g}, {b}, {alpha});

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

## Samples
```

color.val("#F0F");      // 0xff00ffff
color.val("#F0F", 0.5); // 0xff00ff80
color.val("#F0F7");     // 0xff00ff77
color.val("#FF00FF");   // 0xff00ffff
color.val("#FF00FF", 0.5);      // 0xff00ff80
color.val("#FF00FF7F"); // 0xff00ff7f
color.val(0xff00ff);    // 0xff00ffff
color.val(0xff00ff7f);  // 0xff00ff7f
color.val(0xff00ff, 0.5);       // 0xff00ff80
color.val(0xff00ff, 0x7f);      // 0xff00ff7f
color.val(255, 0, 255); // 0xff00ffff
color.val(255, 0, 255, 127);    // 0xff00ff7f
color.val(255, 0, 255, 0.5);    // 0xff00ff80
color.val(0xff, 0x00, 0xff);    // 0xff00ffff
color.val(0xff, 0x00, 0xff, 0x7f);      // 0xff00ff7f
color.val(0xff, 0x00, 0xff, 0.5);       // 0xff00ff80
color.val({r: 255, g: 0, b: 255, a: 127});      // 0xff0000ff
color.val({r: 0xff, g: 0x00, b: 0xff, a: 0x7f});        // 0xff0000ff
color.val({r: 255, g: 0, b: 255, alpha: 0.5});  // 0xff0000ff
color.val({r: 0xff, g: 0x00, b: 0xff, alpha: 0.5});     // 0xff0000ff


color.json("#F0F");     // {"r":255,"g":0,"b":255,"a":255}
color.json("#F0F", 0.5);        // {"r":255,"g":0,"b":255,"a":128}
color.json("#F0F7");    // {"r":255,"g":0,"b":255,"a":119}
color.json("#FF00FF");  // {"r":255,"g":0,"b":255,"a":255}
color.json("#FF00FF", 0.5);     // {"r":255,"g":0,"b":255,"a":128}
color.json("#FF00FF7F");        // {"r":255,"g":0,"b":255,"a":127}
color.json(0xff00ff);   // {"r":255,"g":0,"b":255,"a":255}
color.json(0xff00ff7f); // {"r":255,"g":0,"b":255,"a":127}
color.json(0xff00ff, 0.5);      // {"r":255,"g":0,"b":255,"a":128}
color.json(0xff00ff, 0x7f);     // {"r":255,"g":0,"b":255,"a":127}
color.json(255, 0, 255);        // {"r":255,"g":0,"b":255,"a":255}
color.json(255, 0, 255, 127);   // {"r":255,"g":0,"b":255,"a":127}
color.json(255, 0, 255, 0.5);   // {"r":255,"g":0,"b":255,"a":128}
color.json(0xff, 0x00, 0xff);   // {"r":255,"g":0,"b":255,"a":255}
color.json(0xff, 0x00, 0xff, 0x7f);     // {"r":255,"g":0,"b":255,"a":127}
color.json(0xff, 0x00, 0xff, 0.5);      // {"r":255,"g":0,"b":255,"a":128}
color.json(4278255487); // {"r":255,"g":0,"b":255,"a":127}

```
