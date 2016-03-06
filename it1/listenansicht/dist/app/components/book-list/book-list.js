System.register(['angular2/core', '../../domain/models'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, models_1;
    var BookList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            }],
        execute: function() {
            BookList = (function () {
                function BookList() {
                    this.books = [
                        this.createBook('999-9-99999-999-9', 'Angular 2', 'Einstieg in die komponentenorientierte Entwicklung', ['Danny', 'Gregor']),
                        this.createBook('978-3864901546', 'AngularJS', 'Eine praktische Einführung', ['Philipp'])
                    ];
                }
                BookList.prototype.createBook = function (isbn, title, subtitle, authors) {
                    var book = new models_1.Book(isbn, title);
                    book.subtitle = subtitle;
                    book.published = new Date();
                    authors.forEach(function (a) { return book.addAuthor(a); });
                    return book;
                };
                BookList = __decorate([
                    core_1.Component({
                        selector: 'book-list',
                        templateUrl: 'app/components/book-list/book-list.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookList);
                return BookList;
            })();
            exports_1("default", BookList);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/book-list/book-list.js.map