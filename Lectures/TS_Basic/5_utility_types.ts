interface Human {
  name: string;
  age: number;
}

type HumanKeys = keyof Human; // name, age
let key: HumanKeys = 'name';
console.log(key);
key = 'age';
console.log(key);
// key = 'job' // error

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

/* 
utility types:
1. Partial
2. Required
3. Readonly
4. ReadonlyArray
5. Pick
6. Omit
7. Record
8. Exclude
9. Extract
10. NonNulable
11. Parameters
12. ConstructorParameters
13. ReturnType
14. InstanceType
 . . .
*/

// 
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // get - 'name' | 'email'
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'> // get - 'name' | 'email'

let u1: UserKeysNoMeta = 'name';
