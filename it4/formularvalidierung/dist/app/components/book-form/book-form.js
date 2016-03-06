System.register(['angular2/core', 'angular2/common', '../../validators/date.validator', '../../validators/isbn.validator', '../../validators/rating.validator'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, date_validator_1, isbn_validator_1, rating_validator_1;
    var BookForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (date_validator_1_1) {
                date_validator_1 = date_validator_1_1;
            },
            function (isbn_validator_1_1) {
                isbn_validator_1 = isbn_validator_1_1;
            },
            function (rating_validator_1_1) {
                rating_validator_1 = rating_validator_1_1;
            }],
        execute: function() {
            BookForm = (function () {
                function BookForm(fb) {
                    this.fb = fb;
                    this.myForm = fb.group({
                        title: ['', common_1.Validators.required],
                        rating: ['', rating_validator_1.RatingValidator.rating],
                        published: ['', date_validator_1.DateValidator.germanDate],
                        subtitle: [''],
                        authors: fb.array([''], common_1.Validators.required),
                        thumbnails: fb.array([
                            fb.group({ url: [''], title: [''] })
                        ]),
                        isbn: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                isbn_validator_1.IsbnValidator.isbn
                            ])],
                    });
                    // this allows us to manipulate the form at runtime
                    this.authorsControlArray = this.myForm.controls['authors'];
                    this.thumbnailsControlArray = this.myForm.controls['thumbnails'];
                }
                BookForm.prototype.addAuthorControl = function () {
                    this.authorsControlArray.push(this.fb.control(''));
                };
                BookForm.prototype.addThumbnailControl = function () {
                    this.thumbnailsControlArray.push(this.fb.group({ url: [''], title: [''] }));
                };
                BookForm.prototype.submitForm = function (formData) {
                    console.log('submitting values:', formData.value);
                };
                BookForm = __decorate([
                    core_1.Component({
                        selector: 'book-form',
                        templateUrl: 'app/components/book-form/book-form.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], BookForm);
                return BookForm;
            })();
            exports_1("BookForm", BookForm);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/book-form/book-form.js.map