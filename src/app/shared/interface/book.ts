export interface Book {
  name: string;
  authors: string[];
  released: string;
  favorite: boolean;

  url?: string;
  isbn?: string;
  numberOfPages?: string;
  publisher?: string;
  country?: string;
  mediaType?: string;
  characters?: string[];
  povCharacters?: string[];
}
