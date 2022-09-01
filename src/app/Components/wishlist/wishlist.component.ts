import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistarray:any;
  countlist:any;

  constructor(private bookservice: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getwishlist();
  }
  getwishlist() {
    this.bookservice.getWishlist().subscribe((response: any) => {
      console.log(response);
      this.wishlistarray = response.wishlist
      this.wishlistarray.reverse()
      this.countlist = response.wishlist.length

    })
  }

  // removewishlistitem(book: any) {
  //   this.bookservice.userremovewishlistitem(book.product_id._id).subscribe((response: any) => {
  //     console.log(response);

  //   })
  //   // this.getwishlist();
  // }
}
