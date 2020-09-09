export const createPincode = (nDigits) => {
  if (nDigits >= 1) {
    const max = parseInt(new Array(nDigits + 1).join('9'));
    let res = Math.floor(Math.random() * (max + 1));
    return new Array(nDigits - String(res).length + 1).join('0') + String(res);
  }
  console.log(`Incorrect digits number. Can't create pin code`);
  return false;
};
