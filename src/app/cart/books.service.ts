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
        name: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest',
        image:
          'https://hackr.io/blog/uploads/images/introduction-to-algorithms-eastern-economy-edition.jpg',
        amount: 10,
      },
      {
        name: 'Structure and Interpretation of Computer Programs (SICP)',
        auther: 'Harold Abelson, Gerald Jay Sussman, Julie Sussman',
        image:
          'https://hackr.io/blog/uploads/images/structure-and-interpretation-of-computer-programs-2nd-edition-mit-electrical-engineering-and-computer-science1.jpg',
      },
      {
        name: 'Code Complete: A Praactical Handbook of Software Construction',
        auther: 'Steve McConnell',
        image: 'https://hackr.io/blog/uploads/images/code-caomplete.jpg',
      },
    ];
  }
}
