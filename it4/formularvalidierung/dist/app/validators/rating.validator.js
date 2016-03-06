System.register([], function(exports_1) {
    var RatingValidator;
    return {
        setters:[],
        execute: function() {
            RatingValidator = (function () {
                function RatingValidator() {
                }
                RatingValidator.rating = function (control) {
                    var value = parseInt(control.value);
                    if (!(value <= 5 && value > 0))
                        return { "rating": true };
                    return null;
                };
                return RatingValidator;
            })();
            exports_1("RatingValidator", RatingValidator);
        }
    }
});
//# sourceMappingURL=../../../../app/validators/rating.validator.js.map