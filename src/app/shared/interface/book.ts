export interface Book {
  name: string;
  publisher: string;
  released: string;
  favorite?: boolean;
  url: string;

  isbn?: string;
  numberOfPages?: string;
  authors?: string[];
  country?: string;
  mediaType?: string;
  characters?: string[];
  povCharacters?: string[];
}
