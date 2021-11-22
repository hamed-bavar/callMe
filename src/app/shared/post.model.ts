export interface PostData {
  title: string;
  description: string;
  photos: any[];
  private: boolean;
  keywords: string;
}
export interface Thumbnail {
  ID: number;
  description: string;
  title: string;
  photos: { path: string }[];
}
