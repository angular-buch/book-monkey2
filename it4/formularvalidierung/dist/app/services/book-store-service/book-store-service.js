System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', '../../models/book'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, book_1;
    var BookStoreService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (book_1_1) {
                book_1 = book_1_1;
                exports_1({
                    "Book": book_1_1["Book"],
                    "Thumbnail": book_1_1["Thumbnail"]
                });
            }],
        execute: function() {
            BookStoreService = (function () {
                function BookStoreService(http) {
                    this.http = http;
                    this.api = 'https://book-monkey.firebaseio.com';
                }
                BookStoreService.prototype.getAll = function () {
                    var _this = this;
                    return this.http
                        .get(this.api + "/books.json")
                        .map(function (response) { return response.json(); })
                        .map(function (books) { return Object.keys(books).map(function (key) { return _this.toBook(books[key]); }); });
                };
                BookStoreService.prototype.getSingle = function (isbn) {
                    var _this = this;
                    return this.http
                        .get(this.api + "/books/" + isbn + ".json")
                        .map(function (response) { return response.json(); })
                        .map(function (book) { return _this.toBook(book); });
                };
                BookStoreService.prototype.create = function (book) {
                    return this.http
                        .post(this.api + "/books.json", JSON.stringify(book));
                };
                BookStoreService.prototype.update = function (book) {
                    return this.http
                        .put(this.api + "/books/" + book.isbn + ".json", JSON.stringify(book));
                };
                BookStoreService.prototype.delete = function (isbn) {
                    return this.http
                        .delete(this.api + "/books/" + isbn + ".json");
                };
                BookStoreService.prototype.toBook = function (rawBook) {
                    var book = new book_1.Book(rawBook.isbn, rawBook.title, rawBook.authors);
                    book.subtitle = rawBook.subtitle;
                    book.thumbnails = rawBook.thumbnails ? rawBook.thumbnails.map(this.toThumbnail) : [];
                    book.rating = rawBook.rating;
                    book.published = new Date(rawBook.published);
                    return book;
                };
                BookStoreService.prototype.toThumbnail = function (rawThumbnail) {
                    return new book_1.Thumbnail(rawThumbnail.url, rawThumbnail.title);
                };
                BookStoreService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BookStoreService);
                return BookStoreService;
            })();
            exports_1("BookStoreService", BookStoreService);
        }
    }
});
//# sourceMappingURL=../../../../../app/services/book-store-service/book-store-service.js.map