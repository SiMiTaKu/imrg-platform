export interface RuleBook {
  title: string;
  chapter: Chapter[];
}

export interface Chapter {
  title: string;
  article: Article[];
}

export interface Article {
  title: string;
  section: Section[];
}

export interface Section {
  title: string;
  content?: string;
  block?: Block[];
  image?: Image;
}

export interface Block {
  title: string;
  element: string;
}

export interface Image {
  fileName: string;
  alt: string;
}
