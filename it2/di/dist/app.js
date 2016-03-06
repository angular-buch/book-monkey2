System.register(['angular2/platform/browser', './app/book-monkey'], function(exports_1) {
    var browser_1, book_monkey_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (book_monkey_1_1) {
                book_monkey_1 = book_monkey_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(book_monkey_1.BookMonkeyApp);
        }
    }
});
//# sourceMappingURL=../../app.js.map