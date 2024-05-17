let bit1 = 100110;
let bit2 = 110011;

const additiveArr = [];
while (bit2 > 0) {
  const multiplier = bit2 % 10;
  bit2 = parseInt(bit2 / 10);

  let ans = null;
  let tempBit1 = bit1;
  let ansMultiplierBit = 0;
  while (tempBit1 > 0) {
    const bit = tempBit1 % 10;
    tempBit1 = parseInt(tempBit1 / 10);

    const multipliedBit = multiplier && bit ? 1 : 0;
    ans = multipliedBit * ansMultiplierBit + ans;
    ansMultiplierBit = ansMultiplierBit === 0 ? 10 : ansMultiplierBit * 10;
  }

  additiveArr.push(ans);
}
let [firstAdder] = additiveArr;
for (let i = 1; i < additiveArr.length; i++) {
  let secondAdder = additiveArr[i];
  let zeroAdderMultiplier = 10 ** i;
  secondAdder *= zeroAdderMultiplier;

  let ans = null; // 100
  let ansMultiplierBit = 0; // 1000
  debugger;
  while (secondAdder > 0) {
    let carry = 0; // 1
    let firstAdderBit = firstAdder % 10; // 1
    firstAdder = parseInt(firstAdder / 10); // 100

    let secondAdderBit = secondAdder % 10; // 1
    secondAdder = parseInt(secondAdder / 10); // 1001

    if (firstAdderBit === 1 && secondAdderBit === 1) {
      if (carry === 1) {
        ans = ansMultiplierBit === 0 ? 1 : ansMultiplierBit * 1 + ans;
      } else {
        ans = ansMultiplierBit === 0 ? 0 : ansMultiplierBit * ans;
        carry = 1;
      }
    } else if (firstAdderBit === 1 || secondAdderBit === 1) {
      if (carry === 1) {
        ans = ansMultiplierBit * ans;
        carry = 0;
      } else {
        ans = ansMultiplierBit * 1 + ans;
      }
    } else {
      if (carry === 1) {
        ans = ansMultiplierBit * 1 + ans;
        carry = 0;
      } else {
        ans = ansMultiplierBit * ans;
      }
    }
    ansMultiplierBit = ansMultiplierBit === 0 ? 10 : ansMultiplierBit * 10;
  }
  console.log("ans=> ", ans);
  firstAdder = ans;
}
console.log(additiveArr);
