import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import BookStoreService from './book-store-service';


describe('BookStoreService Service', () => {

  beforeEachProviders(() => []);


  it('should ...', inject([BookStoreService], (service:BookStoreService) => {

  }));

});
