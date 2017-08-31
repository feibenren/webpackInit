import { Person } from "./class/Person.js";
import { fn1 } from './test.js';
//js
var p1 = new Person('wangbing');
p1.eat();
// p1.say();
//img
var img_baidu = require('../img/baidu.png');
document.getElementById('img_box').innerHTML = `<img src="${img_baidu}">`;
//css
import { sec1_css } from '../scss/sec1.scss';
fn1();

/* if (module.hot) {
    module.hot.accept('./class/Person.js', function() {
        console.log('Accepting Person module!');
    })
} */