System.register([], function(exports_1) {
    var Book;
    return {
        setters:[],
        execute: function() {
            Book = (function () {
                function Book(isbn, title, authors) {
                    this.isbn = isbn;
                    this.title = title;
                    this.authors = authors;
                }
                return Book;
            })();
            exports_1("Book", Book);
        }
    }
});
//# sourceMappingURL=../../../../app/models/book.js.map