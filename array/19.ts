export default function array(arr = []) {
  let lasElem: number,
    arrElem = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[0] < arr[i] && arr[i] < arr[9]) lasElem = i + 1;
  }
  return lasElem;
}
