export interface CardInterface {
  cardProblem: string;
  cardDate: string;
  cardPriority: string;
  cardisRequestNeeded: boolean;
}
export interface ImageCardInterface {
  url: string;
}
export interface FetchObject {
  alt_description: string;
  color: string;
  id: string;
  likes: number;
  urls: FetchedURLS;
  user: FetchedUser;
}
export interface URLs {
  urls?: {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}
export interface FetchedURLS {
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
export interface FetchedUser {
  first_name: string;
  last_name: string;
  location: string;
  username: string;
  twitter_username: string;
  instagram_username: string;
  total_photos: number;
  total_likes: number;
}
export interface NavElement {
  page: string;
  link: string;
}
export interface QueryParametersInterface {
  query: string;
  page: number;
  elementsOnPage: number;
  orient: string;
  color: string;
  orderBy: string;
}
export interface IdParameterInterface {
  id: string;
}
export interface RequestResponseInterface {
  results: FetchObject[];
  total_pages: number;
}
