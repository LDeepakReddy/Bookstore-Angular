import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;
 
  header: any = "";

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem('token');
  }
  user=localStorage.getItem('token')
  getallbooks() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/displayAllBooks', true, header)
  }

  addToBag(book_id: any) {
    console.log('book_id', book_id)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('/addBookToCartByBookId', { book_id }, true, header)
  }

  getCart() {
    // this.token = localStorage.getItem('token');
    // //  console.log('token', this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('/getAllBooksInCart', true, header)
  }

  incrementQuantity(id: any) {
    console.log(id);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
      body: { id: id }
    }
    return this.httpService.postService('/increamentBookQuantityInCart', {id}, true, header)
  }

  decrementQuantity(id: any) {
    console.log(id);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService('/decrementBookQuantityInCart', {id}, true, header)
  }

 
  addToWishlist(book_id: any) {
    console.log('book_id', book_id)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('/addBookToWishlistByBookId', { book_id }, true, header)
  }

  getWishlist() {
    // this.token = localStorage.getItem('token');
    // //  console.log('token', this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
        
      })
    }
    return this.httpService.getService('/getAllBooksInWishlist', true, header)
  }


  //  order(data: any) {
  //   this.token = localStorage.getItem('token');
  //   let options = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer ' + this.token,
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.httpService.postService('/placeorder',data,true, options);
  // }




 
  removecartitem(id: any) {
    this.token = localStorage.getItem('token');
    console.log(id)
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
        // 'x-access-token':  'Bearer ' + this.token
      }),
      body: { id: id }
    }
    return this.httpService.deleteService("/deleteBookByCartId", true, header)
  }


  removewishlist(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    console.log("Deleted wishlist",reqdata)
    return this.httpService.deleteService( '/deleteBookByWishlistId',  true,header );
  }



  order(reqData: any) {
    console.log(reqData)
    let headers = {
      address_id: reqData.orders.address_id,
      name: reqData.orders.name,
      quantity: reqData.orders.quantity
    }
    
    //   console.log(this.user);
    this.getToken();
    return this.httpService.postService('/placeorder', headers, true, this.header);
  }



  getToken() {
    this.header = {
      headers: { Authorization: "Bearer " + this.user }
    }
  }


 

}
