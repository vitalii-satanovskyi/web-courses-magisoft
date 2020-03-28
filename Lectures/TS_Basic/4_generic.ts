const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ['1', '1', '2', '3', '5'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

// const cars: string[] = ['ford', 'audi'];
// const cars1: Array<string> = ['ford', 'audi'];
//
// const promise = new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve('string')
//   }, 1000)
// });
//
// promise.then(data => {
//   console.log(data.trim());
// });

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

const merged = mergeObjects({name: 'Vlad'}, {age: 24});
const merged2 = mergeObjects({model: 'Ford'}, {year: 24});
// const merged3 = mergeObjects('a', 24);
// console.log(merged);

// =================================
interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
  return {
    value,
    count: `length = ${value.length}`
  }
}

// ==================================
function getObjValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: 'vlad',
  age: 26
};

getObjValue(person, 'name');
// getObjValue(person, 'job');

// ====================================
class Collection<T extends number | string | boolean> {
  // private _items: T[] = []
  constructor(private _items: T[] = []) {
  }

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(i => item !== i)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['1', 'e', 'true']);
const numbers = new Collection<number>([1, 2, 3, 4, 5]);

// ========================================
interface ICar {
  model: string,
  year: number
}

function createAndValidCar(model: string, year: number): ICar {
  const car: Partial<ICar> = {};

  if (model.length) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }

  return car as ICar
}

// ============================================
const cars: Readonly<Array<string>> = ['1', '2']

// cars.push(1) //- error