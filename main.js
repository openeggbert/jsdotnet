
import { System } from './src/System/export.js';

const span1 = new System.TimeSpan(1, 30, 15, 500);
console.log(span1.toString());

const span2 = System.TimeSpan.fromMinutes(90);
console.log(span2.toString());

////

const span = new System.TimeSpan(1, 30, 0); 
console.log(span.toString()); 

const sum = System.Math.add(10, 5);
console.log(sum);
