export const printGreaterNumber = (a: number, b: number): void => {
  if (a > b) {
    console.log(a);
  } else if (b > a) {
    console.log(b);
  }
  // what if a and b are equal?
  return;
};

export const add = (a: number, b: number) => a + b;
