import { Category } from "./category";

export interface Blog {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  content: string;
  desc: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  categories: Category[];
}
