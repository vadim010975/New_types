import Post from './Post';

export default class Cart {
  private _items: Post[] = [];
  add(item: Post): void {
    this._items.push(item);
  }
  get items(): Post[] {
    return [...this._items];
  }
}