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
}

export interface Block {
  title: string;
  element: string;
}
