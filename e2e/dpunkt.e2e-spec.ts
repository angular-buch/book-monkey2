import { browser, element, by } from 'protractor';

describe('dpunkt.verlag', function() {

    // does not wait for on angular on a non-angular page
    beforeEach(() => browser.ignoreSynchronization = true);

    it('should just call it Angular', function() {
        browser.get('http://dpunkt.de/buecher/12400/9783864903571-angular.html');
        let heading = element(by.tagName('h3'));
        expect(heading.getText()).toEqual('Angular');
    });
});

