export class Book {
    id: number;
    title: String;
    subtitle: String;
    authors: Array<String>;
    isbn: String;
    rating: Number;
    published: Date;

    constructor(title, authors, isbn){
        this.title = title;
        this.authors = authors;
        this.isbn = isbn;
    }
}
