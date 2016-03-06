import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {IterationOneComponent} from './components/book-monkey/iteration-1/iteration-1.component';

@Component({
  selector: 'samples-app',
  providers: [],
  templateUrl: 'app/samples.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
{
  path: 'iteration-1/...',
  name: 'Iteration-1',
  component: IterationOneComponent
}])
export class SamplesApp { }
