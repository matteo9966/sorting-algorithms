export type BubbleSortAnimation = {
  animationFn: "itarationAnimation" | "swapAnimation";
  listStatus: number[];
  currentIndex: number;
  sortType: "bubble-sort";
};
export type InsertionSortAnimation = {
  listStatus: number[];
  currentIndex: number;
  iterationIndex: number;
  animationFn: "iterationAnimation" | "swapAnimation";
  sortType: "insertion-sort";
};

export type SortingAnimation = BubbleSortAnimation | InsertionSortAnimation;

export type AnimationQueue = BubbleSortAnimation[]|InsertionSortAnimation[];
