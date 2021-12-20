import { User } from './user.model';
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
export interface Comment {
  ID: number;
  UserID: number;
  PostID: number;
  Text: string;
  OwnComment: boolean;
  Avatar: string;
  Bio: string;
  UserName: string;
}
export interface Photo {
  path: string;
}
export interface PostDetails {
  Description: string;
  HasLiked: boolean;
  ID: number;
  Keywords: string;
  Likes: number;
  Photos: any[];
  Title: string;
  UserID: number;
  UserName: string;
  Bio: string;
  Comments: Comment[];
}
