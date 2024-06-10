export type BookModel = {
  title: string;
  author: string;
  readingLevel: string;
  coverPhotoURL: string;
  addBook: () => void;
  removeBook?: () => void;
  isAllBooks: boolean;
};

export type ButtonModel = {
  bgColor: string;
  hoverColor?: string
  actionButton: () => void;
  text: string
};

export interface SearchQueryProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}