// const temps = [11, 13, 10, 8, 15, 20, 22, 25, 28, 23, 20, 18, 14, 10];
const temps = [11, 13, 10, 8, 15];

// // naive approach
// let maxPair = [];
// let maxSum = Number.NEGATIVE_INFINITY;
// for (let i = 0; i < temps.length; i++) {
//   for (let j = i; j < temps.length; j++) {
//     let sum = 0;
//     for (let k = i; k <= j; k++) {
//       sum += temps[k];
//       if (sum > maxSum) {
//         maxSum = sum;
//         maxPair[0] = i;
//         maxPair[1] = j;
//       }
//     }
//   }
// }

// console.log("maxPair=> ", maxPair, maxSum);

// // almost naive approach
// maxPair = [];
// maxSum = Number.NEGATIVE_INFINITY;
// for (let i = 0; i < temps.length; i++) {
//   let sum = 0;
//   for (let j = i; j < temps.length; j++) {
//     sum += temps[j];
//     if (sum > maxSum) {
//       maxSum = sum;
//       maxPair[0] = i;
//       maxPair[1] = j;
//     }
//   }
// }
// console.log("almostNaive Sum=> ", maxPair, maxSum);

// divide & conquer approach
const SummerRec = (arr, start = 0, end = arr.length) => {
  debugger;
  if (end <= start) return [arr[start], [start, end]];
  const [maxSumLeft, maxPairLeft] = SummerRec(arr, start, parseInt(end / 2));
  const [maxSumRight, maxPairRight] = SummerRec(arr, parseInt(end / 2), end);

  let sumLeft = 0;
  let maxLInd = undefined;
  let maxL = Number.NEGATIVE_INFINITY;
  for (let i = parseInt(end / 2); i >= start; i--) {
    sumLeft += arr[i];
    if (sumLeft > maxL) {
      maxL = sumLeft;
      maxLInd = i;
    }
  }

  let sumRight = 0;
  let maxRInd = undefined;
  let maxR = Number.NEGATIVE_INFINITY;
  for (let i = parseInt(end / 2); i <= end; i++) {
    sumRight += arr[i];
    if (sumRight > maxR) {
      maxR = sumRight;
      maxRInd = i;
    }
  }

  const maxMid = maxR + maxL;
  if (maxMid >= maxSumRight && maxMid >= maxSumLeft)
    return [maxMid, [maxLInd, maxRInd]];
  else if (maxSumLeft >= maxSumRight) return [maxSumLeft, maxPairLeft];
  else return [maxSumRight, maxPairRight];
};
console.log("summerRec=> ", SummerRec(temps));

// linear time solution
