import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { DataserviceService } from 'src/app/Services/dataService/dataservice.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  booksArray: any = [];
  searchBook = "";
  Book: any;
  booksquantity: any;
  constructor(private bookService: BookService, private router: Router,private data: DataserviceService,) { }
  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.getAllBook();
    this.data.incomingData.subscribe((res) => {
      console.log("Searching Process", res)
      this.searchBook = res;
    })
  }
  getAllBook() {
    this.bookService.getallbooks().subscribe((response: any) => {
      console.log(response);
      this.booksquantity = response.books.length;
      this .totalLength=  response.books.length;
      this.booksArray = response.books;
      console.log(this.booksArray);
    });
  }

  lowtohigh() {
    this.booksArray = this.booksArray.sort((low: any, high: any) => low.price - high.price);
  }
  hightolow() {
    this.booksArray = this.booksArray.sort((low: any, high: any) => high.price - low.price);
  }
  newestarrivals() {
    this.booksArray.reverse();
  }
  AddToBag(Book: any) {
    this.bookService.addToBag(Book.id).subscribe((response: any) => {
      console.log('book add to Bag ', response)
      // this.snackbar.open('Added to cart ', '', {
      //   duration: 2000,
      // });
      this.router.navigateByUrl('/cart')
    })
  }

  AddToWishlist(Book: any) {
    this.bookService.addToWishlist(Book.id).subscribe((response: any) => {
      console.log('book added to wishlist ', response)
      // this.snackbar.open('Added to wishlist ', '', {
      //   duration: 2000,
      // });
      this.router.navigateByUrl('/wishlist')
    })
  }



  bookview(Book: any) {

    localStorage.setItem('bookId', Book.id);
    this.router.navigateByUrl('/dashboard/bookview/' + Book.id)

  }

}
