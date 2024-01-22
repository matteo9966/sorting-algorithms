export type InsertionSortAnimation = {
  listStatus: number[];
  currentIndex: number;
  iterationIndex: number;
  animationFn: "iterationAnimation" | "swapAnimation";
  sortType: "insertion-sort";
};

export function insertionSort(list: number[]): InsertionSortAnimation[] {
  const animationQueue: InsertionSortAnimation[] = [];
  if (!list.length) {
    return [];
  }
  if (list.length <= 1) {
    return [
      {
        animationFn: "iterationAnimation",
        currentIndex: 0,
        iterationIndex: 0,
        listStatus: list,
        sortType: "insertion-sort",
      },
    ];
  }
  let temp = list[0];
  for (let j = 1; j < list.length; j++) {
    temp = list[j];
    let k = j - 1;
    while (k >= 0 && list[k] > temp) {
      animationQueue.push({
        animationFn: "iterationAnimation",
        currentIndex: j,
        iterationIndex: k,
        listStatus: [...list],
        sortType: "insertion-sort",
      });
      list[k + 1] = list[k];
      animationQueue.push({
        animationFn: "swapAnimation",
        currentIndex: j,
        iterationIndex: k,
        listStatus: [...list],
        sortType: "insertion-sort",
      });
      k--;
    }
    list[k + 1] = temp;
    animationQueue.push({
      animationFn: "swapAnimation",
      currentIndex: j,
      iterationIndex: k,
      listStatus: [...list],
      sortType: "insertion-sort",
    });
  }
  return animationQueue;
}
