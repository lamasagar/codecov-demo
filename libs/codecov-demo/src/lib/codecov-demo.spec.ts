import { printGreaterNumber } from './codecov-demo';
const log = jest.fn();
window.console.log = log;

describe('codecovDemo', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should print 10 when 5,10 is passed', () => {
    printGreaterNumber(5, 10);
    expect(log).toHaveBeenCalledWith(10);
  });

  it('should print 10 when 10,5 is passed', () => {
    printGreaterNumber(10, 5);
    expect(log).toHaveBeenCalledWith(10);
  });

  // it('should print 10 when 10,10 is passed', () => {
  //   printGreaterNumber(10, 10);
  //   expect(log).toHaveBeenCalledWith(10);
  // });

  it('should return sum', () => {
    // expect(add(11, 10)).toEqual(11);
  });
});
