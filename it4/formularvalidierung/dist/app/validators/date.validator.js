System.register([], function(exports_1) {
    var DateValidator;
    return {
        setters:[],
        execute: function() {
            DateValidator = (function () {
                function DateValidator() {
                }
                DateValidator.germanDate = function (control) {
                    var germanDatePattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
                    if (!control.value.match(germanDatePattern))
                        return { "germanDate": true };
                    return null;
                };
                return DateValidator;
            })();
            exports_1("DateValidator", DateValidator);
        }
    }
});
//# sourceMappingURL=../../../../app/validators/date.validator.js.map