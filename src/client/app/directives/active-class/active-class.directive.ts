import {Directive, Input, HostBinding} from 'angular2/core';
import {Router} from 'angular2/router';


@Directive({
  selector: '[activeClass]'
})

export class ActiveClassDirective {

  @Input() activeClass: string; //not used as actual CSS class at the moment
  @Input() routerLink: any;

  constructor(private _router: Router){ }

  @HostBinding('class.active') get isRouteActive() : boolean {
    return this._router.isRouteActive(this._router.generate(this.routerLink));
  }
}
