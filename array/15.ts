/*Дан массив A размера N. Вывести вначале его элементы с нечетными номерами в порядке возрастания номеров, 
а затем — элементы с четными номерами в порядке убывания номеров:
A1,    A3,    A5,    …,    A6,    A4,    A2.
Условный оператор не использовать.*/
/* arrNpp -> the numbers on the positions appear */
export default function array(n: number, arr = []) {
  let arrNpp = [],
    arrNpi = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      arrNpi.push(arr[i]);
    }
    if (i % 2 == 1) {
      arrNpp.push(arr[i]);
    }
  }
  return [...arrNpi, ...arrNpp.reverse()];
}
