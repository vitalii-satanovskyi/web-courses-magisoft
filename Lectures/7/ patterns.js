/**
 * Pattern module 
 */

const module1 = (function () {
    let _name = 'Pyotr';

    function publicGetName() {
        return _name;
    }

    function publicSetName(name) {
        _name = name;
    }

    return {
        setName: publicSetName,
        getName: publicGetName
    };
})();

module1.setName('test');
module1.getName();

/**
 * Modules in es6 
 */

import module1 from './module1';


//module1.js
const module1 = //some code 
   export default module1;


/**
  * Pattern decorator
*/


function work(a) {
    console.log('Done work %s', a);
}

function makeLogging(f, log) {

    function wrapper(a) {
        log.push(a);
        return f.call(this, a);
    }

    return wrapper;
}

const log = [];
const workWithLogger = makeLogging(work, log);

workWithLogger(1); // 1
workWithLogger(5); // 5

for (var i = 0; i < log.length; i++) {
    alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}

/**
 * Pattern singleton 
 */

const singleton = (function () {
    let instance;

    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return {
        getInstance: function (name, age) {
            if (!instance) {
                instance = new User(name, age);
            }
            return instance;
        }
    }
})();
const user1 = singleton.getInstance('Peter', 24);
const user2 = singleton.getInstance('Mark', 26);
// prints true
console.log(user1 === user2);

/**
 * Factory pattern 
 */


class Car {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || 'brand new';
        this.color = options.color || 'white';
    }
}
class Truck {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || 'used';
        this.color = options.color || 'black';
    }
}
class VehicleFactory {
    createVehicle(options) {
        if (options.vehicleType === 'car') {
            return new Car(options);
        } else if (options.vehicleType === 'truck') {
            return new Truck(options);
        }
    }
}


/**
 * Pattern mediator
 */


var mediator = (function () {
    var subscribe = function (channel, fn) {
        if (!mediator.channels[channel]) mediator.channels[channel] = [];
        mediator.channels[channel].push({ context: this, callback: fn });
        return this;
    },
        publish = function (channel) {
            if (!mediator.channels[channel]) return false;
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0, l = mediator.channels[channel].length; i < l; i++) {
                var subscription = mediator.channels[channel][i];
                subscription.callback.apply(subscription.context, args);
            }
            return this;
        };
    return {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        installTo: function (obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
}());


mediator.name = "tim";
mediator.subscribe('nameChange', function (arg) {
    console.log(this.name);
    this.name = arg;
    console.log(this.name);
});
mediator.publish('nameChange', 'david'); //tim, david
//Pub/sub via third party mediator
var obj = { name: 'sam' };
mediator.installTo(obj);
obj.subscribe('nameChange', function (arg) {
    console.log(this.name);
    this.name = arg;
    console.log(this.name);
});
obj.publish('nameChange', 'john'); //sam, john

/**
 * Observer pattern
 */

class EventObserver {
    constructor() {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn)
    }

    broadcast(data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}

const blogObserver = new EventObserver();

const input  = document.createElement('input');



const textField = document.querySelector('.textField')
const countField = document.querySelector('.countField')


blogObserver.subscribe(text => {
    console.log('broadcast catched')
  })

  textField.addEventListener('keyup', () => {
    blogObserver.broadcast(textField.value)
  })



  SOLID: https://habr.com/ru/company/ruvds/blog/426413/