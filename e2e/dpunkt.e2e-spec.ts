import { <TEX>\bfseries browser, element, by</TEX> } from 'protractor';

describe('dpunkt.verlag', () => {

  // does not wait for on angular on a non-angular page
  beforeAll(() => <TEX>\bfseries browser.ignoreSynchronization = true</TEX>);

  it('should just call it Angular', () => {
    <TEX>\bfseries browser</TEX>.get('http://dpunkt.de/buecher/12400/9783864903571-angular.html');
    const heading = <TEX>\bfseries element</TEX>(<TEX>\bfseries by</TEX>.tagName('h3'));
    expect(heading.getText()).toEqual('Angular');
  });

  afterAll(() => <TEX>\bfseries browser.ignoreSynchronization = false</TEX>);
});

