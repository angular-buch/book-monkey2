import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from './home/home';
import {IterationOneComponent} from './book-monkey/iteration-1/iteration-1.component';
import {IterationTwoComponent} from './book-monkey/iteration-2/iteration-2.component';
import {IterationThreeComponent} from './book-monkey/iteration-3/iteration-3.component';
import {IterationFourComponent} from './book-monkey/iteration-4/iteration-4.component';
import {IterationFiveComponent} from './book-monkey/iteration-5/iteration-5.component';

@Component({
  moduleId: module.id,
  selector: 'book-monkey-app',
  templateUrl: 'book-monkey.component.html',
  styleUrls: ['book-monkey.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
{
  path: '/',
  component: Home,
},
{
  path: '/iteration-1',
  component: IterationOneComponent
},
{
  path: '/iteration-2',
  component: IterationTwoComponent
},
{
  path: '/iteration-3',
  component: IterationThreeComponent
},
{
  path: '/iteration-4',
  component: IterationFourComponent
},
{
  path: '/iteration-5',
  component: IterationFiveComponent
}])
export class BookMonkeyAppComponent { }
