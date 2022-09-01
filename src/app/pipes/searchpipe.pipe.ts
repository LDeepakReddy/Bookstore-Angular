import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, searchBook: string) {
    console.log(searchBook)
    if (value.length === 0 || searchBook === '') {
      return value;
    }
    const Message = [];
    for (const Book of value) {
      if (Book.name.toLocaleLowerCase().includes(searchBook) || Book.author.toLocaleLowerCase().includes(searchBook)) {
        Message.push(Book)
      }
    }
    return Message;
  }

}
