import { Category } from "./category";

export interface Blog {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  title: string;
  content: string;
  desc: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  categories: Category[];
}
