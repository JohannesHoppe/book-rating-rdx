import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { StoreModule }         from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { booksReducer } from './reducers/books.reducer';

import { BookComponent }     from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { SelectPipe }        from './pipes/select/select.pipe';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.provideStore({ books: booksReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  exports: [BookComponent],
  declarations: [BookComponent, BookCardComponent, SelectPipe, BookFormComponent, BookListComponent]
})
export class BookModule { }
