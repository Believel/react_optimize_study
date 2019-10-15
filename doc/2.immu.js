let {Map,is} = require('immutable');
let map1 = Map({a:{aa:1},b:2,c:3});
let map2 = map1.set('b',50);
let map3 = map1.set('b',50);
console.log(map1 === map2);
console.log(map1.get('b'));
console.log(map2.get('b'));
console.log(map1.get('a') === map2.get('a'));
/* let obj1 = {a:{b:'c'}};
let obj2 = {a:{b:'c'}};
console.log(obj1 === obj2);
console.log(_.isEqual(obj1,obj2)); */
//is 可以实现深比较，但是性能非常非常高
console.log(is(map2,map3));
