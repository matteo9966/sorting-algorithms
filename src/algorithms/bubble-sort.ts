export const bubbleSort = <T>(list: T[]) => {
  const phases = [];
  phases.push([...list]);
  let swapped = false;
  for (let j = 0; j < list.length; j++) {
    for (let k = 0; k < list.length - j - 1; k++) {
      if (list[k] > list[k + 1]) {
        [list[k], list[k + 1]] = [list[k + 1], list[k]];
        phases.push([...list]);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return phases;
};

//use an animation queue, add each function to a queue and call it on every tick recieved by the centralized counter

export const bubbleSortRecursive = (list: number[], n: number): number[] => {
  const phases = [];
  phases.push([...list]);
  let swapped = false;
  for (let j = 0; j < n - 1; j++) {
    if (list[j] > list[j + 1]) {
      [list[j], list[j + 1]] = [list[j + 1], list[j]];
      phases.push([...list]);
      swapped = true;
    }
  }
  if (swapped) {
    return bubbleSortRecursive(list, n - 1);
  }
  return list;
};

export const bubbleSortAnimationFunctions = async <T>(
  list: T[],
  itarationAnimation?: { (index: number): Promise<void> },
  swapAnimation?: { (list: T[]): Promise<void> }
) => {
  const phases = [];
  phases.push([...list]);
  let swapped = false;
  for (let j = 0; j < list.length; j++) {
    for (let k = 0; k < list.length - j - 1; k++) {
      await itarationAnimation?.(k);
      if (list[k] > list[k + 1]) {
        [list[k], list[k + 1]] = [list[k + 1], list[k]];
        await swapAnimation?.(list);
        phases.push([...list]);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return phases;
};
