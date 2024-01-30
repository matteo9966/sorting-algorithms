export type SelectionSortAnimation = {
  animationFn: "swapAnimation" | "iterationAnimation";
  listStatus: number[];
  currentIndex: number;
  sortType: "selection-sort";
  sortedIndex: number;
  minIndex: number;
};
export function selectionSort(list: number[]): SelectionSortAnimation[] {
  let minIndex: number | null = null;
  const result: SelectionSortAnimation[] = [];
  result.push({
    animationFn: "iterationAnimation",
    currentIndex: 0,
    listStatus: [...list],
    minIndex: 0,
    sortedIndex: 0,
    sortType: "selection-sort",
  });
  for (let j = 0; j < list.length; j++) {
    minIndex = j;
    for (let k = j + 1; k < list.length; k++) {
      if (list[k] < list[minIndex]) {
        minIndex = k;
      }
      result.push({
        animationFn: "iterationAnimation",
        currentIndex: k,
        listStatus: [...list],
        minIndex,
        sortedIndex: j ,
        sortType: "selection-sort",
      });
    }
    if (minIndex !== j) {
      [list[minIndex], list[j]] = [list[j], list[minIndex]];
      result.push({
        animationFn: "swapAnimation",
        currentIndex: j,
        listStatus: [...list],
        minIndex,
        sortedIndex: j,
        sortType: "selection-sort",
      });
    }
  }

  return result;
}
