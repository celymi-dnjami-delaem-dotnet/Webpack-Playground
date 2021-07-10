import { testFun2 } from './first-file';
import './styles/index.css';
import TestJson from './assets/test';
import JavaPom from './assets/pom';
import Google from './assets/powered_by_google_on_white';

console.log('Hello world!');
console.log(testFun2());
console.log(TestJson);
console.log(JavaPom);

function testFun() {
    return new Date().toString();
}

console.log(testFun());
