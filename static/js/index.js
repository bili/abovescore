console.log(_.type('fasfsd'), _.type(234), _.type(new Date), _.type(false));
console.log(_.isNumber('342'), _.isNumber(2342));
var bili = {name: 'bili', age: 27};
console.log(_.tmpl("i'm #{name}, a #{age} year-old boy.", bili));
console.log(_.support('animation'));