System.register(['angular2/testing', './hello-world'], function(exports_1) {
    var testing_1, hello_world_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (hello_world_1_1) {
                hello_world_1 = hello_world_1_1;
            }],
        execute: function() {
            testing_1.describe('HelloWorld Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(hello_world_1.HelloWorld).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/hello-world/hello-world.spec.js.map