/*A file size is given in bytes. Find the amount of full Kbytes of this size (1 K = 1024 bytes).
 Use the operator of integer division.*/
export function fulKby(mby: number) {
  let Kby: number;
  Kby = Math.floor(mby / 1024);
  return Kby;
}
