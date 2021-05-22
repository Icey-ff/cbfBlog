export interface Reference {
  refTitle: string;
  refSrc: string;
}
export interface Comments {
  num: string,
  commentList: Array<CommentItem>
}
export interface CommentItem {
  id: string,
  username: string,
  commentContent: string
}
export default interface Articles {
  id: string;
  title: string;
  date?: string;
  text?: string;
  tags?: Array<string>;
  category?: Array<string>;
  references?: Array<Reference>;
  watchedNum?: string,
  comments?: Comments;
}