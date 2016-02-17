_.log.debug = true;

_.log(_.type('fasfsd'), _.type(234), _.type(new Date), _.type(false));

_.log(_.isNumber('342'), _.isNumber(2342));

var bili = {name: 'bili', age: 27};
_.log(_.tmpl("i'm #{name}, a #{age} year-old boy.", bili));

var bili = {name: 'bili', money: 1254836.47};
_.log(_.tmpl("i'm #{name|UPPERCASE|REVERSE}. i have $#{money|THOUSAND}", bili));

_.log(_.support('animation'));

_.log(_.rand(4,  10));

_.log(_.formatDate(new Date(), 'yyyy-MM'));