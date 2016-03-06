System.register(['angular2/core', '../../services/book-store-service/book-store-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, book_store_service_1;
    var BookList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (book_store_service_1_1) {
                book_store_service_1 = book_store_service_1_1;
            }],
        execute: function() {
            BookList = (function () {
                function BookList(bookStore) {
                    this.books = bookStore.getAll();
                }
                BookList = __decorate([
                    core_1.Component({
                        selector: 'book-list',
                        templateUrl: 'app/components/book-list/book-list.html',
                        providers: [book_store_service_1.BookStoreService]
                    }), 
                    __metadata('design:paramtypes', [book_store_service_1.BookStoreService])
                ], BookList);
                return BookList;
            })();
            exports_1("BookList", BookList);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/book-list/book-list.js.map