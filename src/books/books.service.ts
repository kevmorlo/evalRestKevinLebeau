import { Injectable } from '@nestjs/common';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.books.find(book => book.id === id);
  }

  create(book: Book): Book {
    book.id = this.idCounter++;
    this.books.push(book);
    return book;
  }

  update(id: number, updatedBook: Book): Book {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex > -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
      return this.books[bookIndex];
    }
    return null;
  }

  delete(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}