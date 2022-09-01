import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.scss']
})
export class BookviewComponent implements OnInit {
  BookId: any;
  book: any;
  

  constructor(private bookservice:BookService,private router: Router) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem("bookId");
    console.log(this.BookId);
    this.getUserAllBook();
  }


  getUserAllBook() {
    this.bookservice.getallbooks().subscribe((response: any) => {
      response.books.forEach((element: any) => {
        if (element.id == this.BookId) {
          this.book = element;
        }
      });
    })
  }

  AddToBag(book: any) {
    this.bookservice.addToBag(book.id).subscribe((response: any) => {
      console.log('book add to Bag ', response)
      this.router.navigateByUrl('/cart')
    })
  }

 
}
