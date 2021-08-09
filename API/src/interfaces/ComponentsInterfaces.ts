export interface CardInterface {
  cardProblem: string;
  cardDate: string;
  cardPriority: string;
  cardisRequestNeeded: boolean;
}
export interface ImageCardInterface {
  url: string;
}
export interface URLs {
  urls?: {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}
