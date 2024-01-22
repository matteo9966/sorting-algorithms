import { BubbleSortAnimation } from "../types/animationQueue.type";
// export const bubbleSort = <T>(list: T[]) => {
//   const phases = [];
//   phases.push([...list]);
//   let swapped = false;
//   for (let j = 0; j < list.length; j++) {
//     for (let k = 0; k < list.length - j - 1; k++) {
//       if (list[k] > list[k + 1]) {
//         [list[k], list[k + 1]] = [list[k + 1], list[k]];
//         phases.push([...list]);
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//   }
//   return phases;
// };

//use an animation queue, add each function to a queue and call it on every tick recieved by the centralized counter

export const bubbleSort = (
  list: number[],
) => {
  const animationsQueue: BubbleSortAnimation[] = [];

  const bubbleSortRecursiveHelper = (list: number[], n: number): number[] => {
    let swapped = false;
    for (let j = 0; j < n - 1; j++) {
      animationsQueue.push({
        animationFn: "itarationAnimation",
        listStatus: [...list],
        currentIndex: j,
        sortType:'bubble-sort'
      });
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
        animationsQueue.push({
          animationFn: "swapAnimation",
          listStatus: [...list],
          currentIndex: j,
          sortType:'bubble-sort'
        });
        swapped = true;
      }
    }
    if (swapped) {
      return bubbleSortRecursiveHelper(list, n - 1);
    }
    return list;
  };

  bubbleSortRecursiveHelper(list, list.length);
  return animationsQueue;
};

// export const bubbleSortAnimationFunctions = async <T>(
//   list: T[],
//   itarationAnimation?: { (index: number): Promise<void> },
//   swapAnimation?: { (list: T[]): Promise<void> }
// ) => {
//   const phases = [];
//   phases.push([...list]);
//   let swapped = false;
//   for (let j = 0; j < list.length; j++) {
//     for (let k = 0; k < list.length - j - 1; k++) {
//       await itarationAnimation?.(k);
//       if (list[k] > list[k + 1]) {
//         [list[k], list[k + 1]] = [list[k + 1], list[k]];
//         await swapAnimation?.(list);
//         phases.push([...list]);
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//   }
//   return phases;
// };
