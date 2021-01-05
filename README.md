# Color for HEX and JSON

const color = require('@appres/color');

let color_val = color.hex("#F0F");
let color_val = color.hex("#F0F", 0.5);
let color_val = color.hex("#F0F7");
let color_val = color.hex("#FF00FF");
let color_val = color.hex("#FF00FF", 0.5);
let color_val = color.hex("#FF00FF7F");
let color_val = color.hex(0xff00ff7f);
let color_val = color.hex(0xff00ff, 0.5);
let color_val = color.hex(0xff00ff, 0x7f);
let color_val = color.hex(255, 0, 255);
let color_val = color.hex(255, 0, 255, 127);
let color_val = color.hex(255, 0, 255, 0.5);
let color_val = color.hex({r: 255, g: 0, b: 255, alpha: 0.5});
let color_val = color.hex({r: 255, g: 0, b: 255, a: 127});

let color_json = color.json("#F0F");
let color_json = color.json("#F0F", 0.5);
let color_json = color.json("#F0F7");
let color_json = color.json("#FF00FF");
let color_json = color.json("#FF00FF", 0.5);
let color_json = color.json("#FF00FF7F");
let color_json = color.json(0xff00ff7f);
let color_json = color.json(0xff00ff, 0.5);
let color_json = color.json(0xff00ff, 0x7f);
let color_json = color.json(255, 0, 255);
let color_json = color.json(255, 0, 255, 127);
let color_json = color.json(255, 0, 255, 0.5);

