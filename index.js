'use strict'

function isInt(n) {
    return Number(n) === n && n % 1 === 0;
}
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}
function isString(s) {
    return (typeof s === 'string' || s instanceof String);
}
function isObject(s) {
    return (typeof s === 'object' || s instanceof Object);
}
function isNumber(value) {
    if (typeof value !== 'number') {
      return false
    }
    if (value !== Number(value)) {
      return false
    }
    if (value === Infinity || value === !Infinity) {
      return false
    }
    return true
}

class Color { }

const _rgba = (r, g, b, alpha) => {
    return { r: r, g: g, b: b, alpha: alpha };
}
const _rgb = (r, g, b) => {
    return _rgba(r, g, b, 1.0);
}
const _shex2rgb = (hex) => {
    var result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
    return result ? {
      r: parseInt(""+result[1]+result[1], 16),
      g: parseInt(""+result[2]+result[2], 16),
      b: parseInt(""+result[3]+result[3], 16)
    } : null;
}
const _shex2rgba = (hex) => {
    var result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
    return result ? {
      r: parseInt(""+result[1]+result[1], 16),
      g: parseInt(""+result[2]+result[2], 16),
      b: parseInt(""+result[3]+result[3], 16),
      a: parseInt(""+result[4]+result[4], 16)
    } : null;
}
const _hex2rgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
const _hex2rgba = (hex) => {    
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: parseInt(result[4], 16)
    } : null;
}
const _rgb2hex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
const _rgba2val = (r, g, b, a) => {
    if(a==null) a = 0xFF;
    else
    if(isFloat(a)) {
        a = Math.round(a*255) || 0x00;
    }
    if(a<0) a = 0;
    if(a>0xFF) a = 0xFF;
    return r*0x1000000 + g*0x10000 + b*0x100 + a;
}
//_color("#RGB")
//_color("#RGB", 0.5)
//_color("#RRGGBB")
//_color("#RRGGBB", 0.5)
//_color("#RRGGBBAA")
//_color(0xFF00FF7F)
//_color(0xFF00FF, 0.5)
//_color(255,0,255,127)
//_color(255,0,255)  => a set to 255
const _color = (r, g, b, a) => {
    if(r==null) return null;

    let color = r;
    if(isString(color)) {
        switch(color.toLowerCase()) {

            case 'lightred':
                return _color({ r: 255, g: 0, b: 0, alpha: 1.0 });
            case 'lightgreen':
                return _color({ r: 0, g: 255, b: 0, alpha: 1.0 });
            case 'lightblue':
                return _color({ r: 0, g: 0, b: 255, alpha: 1.0 });
    
            case 'darkred':
                return _color({ r: 100, g: 0, b: 0, alpha: 1.0 });
            case 'darkgreen':
                return _color({ r: 0, g: 100, b: 0, alpha: 1.0 });
            case 'darkblue':
                return _color({ r: 0, g: 0, b: 100, alpha: 1.0 });
    
            case 'white': 
                return _color(255, 255, 255);
            case 'black':	
                return _color(0, 0, 0);
    
            case 'silver':	
                return _color('#d6d6d6');
    
            case 'lightgray':	
                return _color(172, 172, 172);
            case 'gray':	
                return _color(128, 128, 128);
            case 'darkgray':	
                return _color(66, 66, 66);
    
            case 'red':	
                return _color(172, 0, 0);
    
            case 'maroon':	
                return _color(128, 0, 0);
    
            case 'lightyellow':	
                return _color(255, 255, 0);
            case 'yellow':	
                return _color(192, 192, 0);
            case 'darkyellow':	
                return _color(100, 100, 0);
    
            case 'olive':	
                return _color(128, 128, 0);
            case 'lime':
                return _color(0, 255, 0);
    
            case 'green':
                return _color(0, 172, 0);
    
            case 'aqua':	
                return _color(0, 255, 255);
            case 'teal':	
                return _color(0, 128, 128);
    
            case 'blue':	
                return _color(0, 0, 172);
    
            case 'navy':	
                return _color(0, 0, 66);
            case 'fuchsia':	
                return _color(255, 0, 255);
            case 'purple':	
                return _color(128, 0, 128);
        }    
    }

    if(r instanceof Object || isString(r)) {   // json r.g.b with alpha
        if(r.toString().charAt(0)=='#') {
            if(g==null) {
                if(r.length==4) {
                    let c = _shex2rgb(r);
                    if(g!=null) {
                        c.a = g;
                    }
                    return _rgba2val(c.r, c.g, c.b, c.a);
                }
                if(r.length==5) {
                    let c = _shex2rgba(r);
                    return _rgba2val(c.r, c.g, c.b, c.a);
                }
                if(r.length==7) {
                    let c = _hex2rgb(r);
                    if(g!=null) {
                        c.a = g;
                    }
                    return _rgba2val(c.r, c.g, c.b, c.a);
                }
                if(r.length==9) {
                    let c = _hex2rgba(r);
                    return _rgba2val(c.r, c.g, c.b, c.a);
                }
            }
        } else {
            r = r.r || 0;    
            g = r.g || 0;
            b = r.b || 0;
            if(r.a!==null) a = r.a;
            else if(r.alpha!==null) a = Math.round(r.alpha*255);
            else a = 0xFF;
        }
    }
    else
    if(r!=null && g==null) {    // 0xRRGGBBAA
        return r;
    }
    else
    if(r!=null && g!=null && b==null) {    // 0xRRGGBB, alpha
        if(isFloat(g)) {
            a = Math.round(g*255) || 0x00;
        }
        if(a>0xFF) a = 0xFF;
        if(a<0) a = 0;
        return r*0x100 + a;
    }
    return _rgba2val(r, g, b, a);
}

Color.prototype.hex = function(r, g, b, a) {
    return _color(r, g, b, a);
}
Color.prototype.json = function(hex) {
    if(isString(hex) && hex.charAt(0)==='#') return _hex2rgba(hex);
    return _hex2rgba("#" + this.hex(hex));
}


const color = new Color();
module.exports = color;