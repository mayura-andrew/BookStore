import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition',
        author: 'Robert C. Martin',
        image:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount: 14,
      },
      {
        name: 'Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition',
        author: 'Robert C. Martin',
        image:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount: 10,
      },
    ];
  }
}
