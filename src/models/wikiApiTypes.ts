export type Thumbnail = {
  source: string;
  width: number;
  height: number;
}

export type Page = {
  pageid: number;
  ns: number;
  title: string;
  thumbnail: Thumbnail;
}

export type WikiQuery = {
  pages: Page[];
}

export type WikiResponse = {
  batchcomplete: boolean;
  query: WikiQuery;
}
