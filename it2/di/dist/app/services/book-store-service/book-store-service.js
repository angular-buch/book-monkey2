System.register(['angular2/core', '../../models/book'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, book_1;
    var BookStoreService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (book_1_1) {
                book_1 = book_1_1;
            }],
        execute: function() {
            BookStoreService = (function () {
                function BookStoreService() {
                    this.books = [
                        new book_1.Book('ISBN1234567890', 'Angular 2', ['Gregor Woiwode', 'Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher']),
                        new book_1.Book('978-3864901546', 'AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm']),
                        new book_1.Book('978-3898647281', 'JavaScript für Enterprise-Entwickler', ['Oliver Ochs'])
                    ];
                }
                BookStoreService.prototype.getAll = function () {
                    return this.books;
                };
                BookStoreService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BookStoreService);
                return BookStoreService;
            })();
            exports_1("BookStoreService", BookStoreService);
        }
    }
});
//# sourceMappingURL=../../../../../app/services/book-store-service/book-store-service.js.map