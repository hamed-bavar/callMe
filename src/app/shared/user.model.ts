export interface User {
  avatar: string; //
  bio: string; //
  born: Date | null; //
  city: string; //
  country: string; //
  created_at: Date;
  email: string;
  followers_count: number;
  followings_count: number;
  name: string; //
  username: string;
  following_status: string;
  ID: number;
}
export interface SearchResult {
  username: string;
  bio: string;
  ID: number;
  avatar: string;
}
