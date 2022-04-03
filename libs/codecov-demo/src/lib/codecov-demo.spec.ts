import { printGreaterNumber } from './codecov-demo';

const log = jest.fn();
window.console.log = log;

describe('codecovDemo', () => {
  it('should print 10 when 5,10 is passed', () => {
    printGreaterNumber(5, 10);
    expect(log).toHaveBeenCalledWith(10);
  });
});
