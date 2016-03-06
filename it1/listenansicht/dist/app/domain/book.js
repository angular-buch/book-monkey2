System.register(['./thumbnail'], function(exports_1) {
    var thumbnail_1;
    var Book;
    return {
        setters:[
            function (thumbnail_1_1) {
                thumbnail_1 = thumbnail_1_1;
            }],
        execute: function() {
            Book = (function () {
                function Book(isbn, title) {
                    this.isbn = isbn;
                    this.title = title;
                    this.authors = [];
                    this.thumbnails = [];
                }
                Book.prototype.addAuthor = function (author) {
                    this.authors.push(author);
                };
                Book.prototype.addThumbnail = function (url, title) {
                    this.thumbnails.push(new thumbnail_1.Thumbnail(url, title));
                };
                return Book;
            })();
            exports_1("Book", Book);
        }
    }
});
//# sourceMappingURL=../../../../app/domain/book.js.map