System.register([], function(exports_1) {
    var IsbnValidator;
    return {
        setters:[],
        execute: function() {
            IsbnValidator = (function () {
                function IsbnValidator() {
                }
                IsbnValidator.isbn = function (control) {
                    var isbnPattern = /^(?=[-0-9xX ]{13}$)(?:[0-9]+[- ]){3}[0-9]*[xX0-9]$/;
                    if (!control.value.match(isbnPattern))
                        return { "isbn": true };
                    return null;
                };
                return IsbnValidator;
            })();
            exports_1("IsbnValidator", IsbnValidator);
        }
    }
});
//# sourceMappingURL=../../../../app/validators/isbn.validator.js.map