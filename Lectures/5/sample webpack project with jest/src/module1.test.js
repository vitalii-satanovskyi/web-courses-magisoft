import { testedFunc } from './module1';

describe('testedFunc', () => {

    it('Should add 2 numbers', () => {
        expect(testedFunc(1, 2)).toBe(3)

    })


})