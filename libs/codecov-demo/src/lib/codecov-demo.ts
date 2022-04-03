export const printGreaterNumber = (a: number, b: number): void => {
  if (a > b) {
    console.log(a);
  } else if (b > a) {
    console.log(b);
  }
  // what if a and b are equal?
  return;
};

// Condition Coverage

export const isValidPosition = (x: number, y: number, z: number) => {
  if ((x > 10 || y > 20) && z > 0) {
    return true;
  }

  return false;
};
