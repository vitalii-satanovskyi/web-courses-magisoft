/* 

Boolean: логическое значение true или false
Number: числовое значение
String: строки
Array: массивы
object: является типом, который представляет не примитивный тип, то есть все, что не является number, string, boolean, bigint, symbol, null, или undefined.
Tuple: кортежи
Enum: перечисления
Any: произвольный тип
Unknown: произвольный тип с обезательной проверкой
Null и undefined: соответствуют значениям null и undefined в javascript
Void: отсутствие конкретного значения, используется в основном в качестве возвращаемого типа функций
Never: также представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку
*/

const isFetching: boolean = true;
const int: number = 1;
const str: string = 'some str';

const numberArr1: number[] = [1, 2, 3, 4];
const numberArr2: Array<number> = [1, 2, 3, 4];

const strArr: string[] = ['1', '2', '3'];

//tuple
const mixedArr: [string, number] = ['str', 121];

//any
let v: any = '12353';
v = 123;

// unknown
let v2: unknown = 10;


/* let foo: any = 10;
// let foo: unknown = 10;

foo.x.prop;
foo.y.prop;
foo.z.prop;
foo();
new foo();
upperCase(foo);
foo `hello world!`;

function upperCase(x: string) {
    return x.toUpperCase();
}
 */



//================
function syMyName(name: string): void {
  // void - функция ничего не возвращает
  console.log(name);
}

// never
function throwErr(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

// enum
enum Membership {
  Simple,
  Standard,
  Preium
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  LINKEDIN = 'LINKEDIN'
}

const social = SocialMedia.LINKEDIN;
console.log(social)

// Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 12312321;
const id: ID = 'eqweqe';

type SomeType = string | null | undefined;
