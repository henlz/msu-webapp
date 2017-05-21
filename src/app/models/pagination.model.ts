export class Pagination<T> {
  objects: Array<T>;
  current_page: number;
  next_page: number;
  prev_page: number;
  total_pages: number;
  total_count: number;
}
