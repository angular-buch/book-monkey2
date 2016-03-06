System.register(['./thumbnail', './book'], function(exports_1) {
    var thumbnail_1, book_1;
    return {
        setters:[
            function (thumbnail_1_1) {
                thumbnail_1 = thumbnail_1_1;
            },
            function (book_1_1) {
                book_1 = book_1_1;
            }],
        execute: function() {
            exports_1("Thumbnail", thumbnail_1.Thumbnail);
            exports_1("Book", book_1.Book);
        }
    }
});
//# sourceMappingURL=../../../../app/domain/models.js.map