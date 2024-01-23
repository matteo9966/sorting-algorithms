import { InsertionSortAnimation } from "../algorithms/insertion-sort";
import { BubbleSortAnimation } from "../algorithms/bubble-sort";

export { InsertionSortAnimation, BubbleSortAnimation };

export type SortingAnimation = BubbleSortAnimation | InsertionSortAnimation;

export type AnimationQueue = BubbleSortAnimation[] | InsertionSortAnimation[];
