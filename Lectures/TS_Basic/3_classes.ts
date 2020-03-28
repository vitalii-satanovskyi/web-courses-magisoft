class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version}`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4;
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// ======================

// protected - доступно только в классе и его дочерних классах
// public - доступно везде (дефолтное)
// private - доступно только в классе
 
class Animal {
  protected voice: string = ''; 
  public color: string = 'black';

  private go(): void {
    console.log('go')
  }

}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}
const cat = new Cat()
// cat.voice // - err
// cat.go()
cat.setVoice('test')

console.log(cat)

// ========================================================
class Person {
  constructor(private name: string){}
}

const max = new Person('Name');

// ============================= абстрактные классы
// абстрактные классы наследуются но ни во что не компелируются
abstract class Components {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Components {
  render(): void {
    console.log('Component on render')
  }
  info(): string {
    return 'This is info'
  }
}
