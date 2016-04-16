import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home/home';

import {IterationOneComponent} from './book-monkey/iteration-1/iteration-1.component';
import {IterationTwoComponent} from './book-monkey/iteration-2/iteration-2.component';
import {IterationThreeComponent} from './book-monkey/iteration-3/iteration-3.component';
import {IterationFourComponent} from './book-monkey/iteration-4/iteration-4.component';
import {IterationFiveComponent} from './book-monkey/iteration-5/iteration-5.component';

import {ActiveClassDirective} from './directives/active-class/active-class.directive';

@Component({
  selector: 'samples-app',
  templateUrl: 'app/samples.html',
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})
@RouteConfig([
{
  path: '/',
  name: 'Home',
  component: Home,
  useAsDefault: true
},
{
  path: 'iteration-1/...',
  name: 'Iteration-1',
  component: IterationOneComponent
},
{
  path: 'iteration-2/...',
  name: 'Iteration-2',
  component: IterationTwoComponent
},
{
  path: 'iteration-3/...',
  name: 'Iteration-3',
  component: IterationThreeComponent
},
{
  path: 'iteration-4/...',
  name: 'Iteration-4',
  component: IterationFourComponent
},
{
  path: 'iteration-5/...',
  name: 'Iteration-5',
  component: IterationFiveComponent
}])
export class SamplesApp { }
