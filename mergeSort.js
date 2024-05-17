const arr = [6, 4, 2, 1, 9, 8, 3, 5];

const merge = (arrL, arrR) => {
  let l = 0;
  let r = 0;
  let ind = 0;
  let retArr = [];
  while (!!arrL[l] && !!arrR[r] && arrL[l] && arrR[r]) {
    if (arrL[l] > arrR[r]) {
      retArr[ind] = arrR[r];
      r++;
    } else if (arrL[l] < arrR[r]) {
      retArr[ind] = arrL[l];
      l++;
    }
    ind++;
  }

  while (!!arrL[l]) {
    retArr[ind] = arrL[l];
    l++;
    ind++;
  }
  while (!!arrR[r]) {
    retArr[ind] = arrR[r];
    r++;
    ind++;
  }
  return retArr;
};

mergeSort = (arr) => {
  if (!arr) return [];
  if (arr.length === 1) {
    return arr;
  }
  const lArr = arr.slice(0, arr.length / 2);
  const rArr = arr.slice(arr.length / 2);
  const l = mergeSort(lArr);
  const r = mergeSort(rArr);
  const mergedArray = merge(l, r);
  return mergedArray;
};

console.log("sortedArr=> ", mergeSort(arr));
