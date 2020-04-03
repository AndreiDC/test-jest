/* Given an array of N real numbers, find the order number of its 
last local  maximum (an array element is called the local maximum if it is greater then its neighbord). */
export default function arr33(n: number, arr = []) {
  var lasLocMax: number,
    arrlm = [];
  lasLocMax = null;

  if (arr[n - 1] > arr[n - 2]) {
    lasLocMax = n;
  } else {
    lasLocMax = 1;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] < arr[index + 1] && arr[index + 1] > arr[index + 2]) {
        arrlm.push(index + 1);
        lasLocMax = arrlm[arrlm.length - 1];
        lasLocMax = lasLocMax + 1;
        break;
      }
    }
  }

  return lasLocMax;
}
