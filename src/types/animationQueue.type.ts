import { InsertionSortAnimation } from "../algorithms/insertion-sort";
import { BubbleSortAnimation } from "../algorithms/bubble-sort";
import { SelectionSortAnimation } from "../algorithms/selection-sort";

export { InsertionSortAnimation, BubbleSortAnimation, SelectionSortAnimation };

export type SortingAnimation =
  | BubbleSortAnimation
  | InsertionSortAnimation
  | SelectionSortAnimation;

export type AnimationQueue =
  | BubbleSortAnimation[]
  | InsertionSortAnimation[]
  | SelectionSortAnimation[];
