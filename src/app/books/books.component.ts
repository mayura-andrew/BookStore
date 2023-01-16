import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

interface Book {
  name: string;
  author: string;
  image: string;
  amount: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BooksService) {}
  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  //   isDisabled: boolean = false;

  //   handleClick() {
  //     alert('Hello Word!');
  //   }
  //   myName: string = '';

  // toggleBooks() {
  //   this.isShowing = !this.isShowing;
  // }
}
