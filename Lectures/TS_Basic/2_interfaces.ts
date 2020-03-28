interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
};

const rect2: Rect = {
  id: '2131231',
  size: {
    width: 50,
    height: 50
  }
};
// rect2.id = 'sdsf'; // err, readonly
rect2.color = '#ddd';

const rect = {} as Rect;
const rect4 = <Rect>{};

// ============================
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
};

// ====================
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(data: Date): void {
    this.time = data;
  }
}

// ===================
interface IStyles {
  [key: string]: string
}

const css: IStyles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '3px'
}