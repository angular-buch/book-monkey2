import { RouterConfig } from '@angular/router';

import {Home} from './home/home';

import { IterationOneComponent } from './book-monkey/iteration-1/iteration-1.component';
import { BookMonkeyAppComponent as BookDetailsApp, AppRoutes as BookDetailsAppRoutes  } from './book-monkey/iteration-1/book-details/index';
import { BookMonkeyAppComponent as BookListApp, AppRoutes as BookListAppRoutes } from './book-monkey/iteration-1/book-list/index';
import { BookMonkeyAppComponent as BookListRefactoredApp, AppRoutes as BookListRefactoredAppRoutes } from './book-monkey/iteration-1/book-list-refactored/index';

import { IterationTwoComponent } from './book-monkey/iteration-2/iteration-2.component';
import { BookMonkeyAppComponent as diApp, AppRoutes as DiAppRoutes } from './book-monkey/iteration-2/di/index';
import { BookMonkeyAppComponent as NavigationApp, AppRoutes as NavigationAppRoutes } from './book-monkey/iteration-2/navigation/index';

import { IterationThreeComponent } from './book-monkey/iteration-3/iteration-3.component';
import { BookMonkeyAppComponent as FormsApp, AppRoutes as FormsAppRoutes } from './book-monkey/iteration-3/forms/index';
import { BookMonkeyAppComponent as ValidationApp, AppRoutes as ValidationAppRoutes } from './book-monkey/iteration-3/validation/index';

import { IterationFourComponent } from './book-monkey/iteration-4/iteration-4.component';
import { BookMonkeyAppComponent as HttpApp, AppRoutes as HttpAppRoutes } from './book-monkey/iteration-4/http/index';

import { IterationFiveComponent } from './book-monkey/iteration-5/iteration-5.component';
import { BookMonkeyAppComponent as PipesApp, AppRoutes as PipesAppRoutes } from './book-monkey/iteration-5/pipes/index';
import { BookMonkeyAppComponent as DirectivesApp, AppRoutes as DirectivesAppRoutes } from './book-monkey/iteration-5/directives/index';

export const AppRoutes: RouterConfig = [
    {
        path: '/',
        component: Home,
        index: true
    },
    {
        path: '/iteration-1',
        component: IterationOneComponent,
        children: [
            {
                path: '/book-list',
                component: BookListApp,
                children: [ ...BookListAppRoutes ]
            },
            {
                path: '/book-list-refactored',
                component: BookListRefactoredApp
                children: [ ...BookListRefactoredAppRoutes ]                
            },
            {
                path: '/book-details',
                component: BookDetailsApp
                children: [ ...BookDetailsAppRoutes ]
            }
        ]
    },
    {
        path: '/iteration-2',
        component: IterationTwoComponent,
        children: [
            {
                path: '/dependency-injection',
                component: diApp
                children: [ ...DiAppRoutes ]
            },  
            {
                path: '/navigation',
                component: NavigationApp
                children: [ ...NavigationAppRoutes ]
            }
        ]
    },
    {
        path: '/iteration-3',
        component: IterationThreeComponent,
        children: [
            {
                path: '/form',
                component: FormsApp
                children: [ ...FormsAppRoutes ]
            },
            {
                path: '/validation',
                component: ValidationApp
                children: [ ...ValidationAppRoutes ]
            }
        ]
    },
    {
        path: '/iteration-4',
        component: IterationFourComponent,
        children: [
            {
                 path: '/http',
                 component: HttpApp
                children: [ ...HttpAppRoutes ]
            }
        ]
    },
    {
        path: '/iteration-5',
        component: IterationFiveComponent,
        children: [
            {
                path: '/pipes',
                component: PipesApp
                children: [ ...PipesAppRoutes ]
            },
            {
                path: '/directives',
                component: DirectivesApp
                children: [ ...DirectivesAppRoutes ]
            }
        ]
    }
];

