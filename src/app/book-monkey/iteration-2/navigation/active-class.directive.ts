import {Directive, ElementRef, Input, Host} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';


@Directive({
  selector: '[activeClass]',
  host: {
    '[class.active]': 'isRouteActive'
  }
})

export class ActiveClassDirective {

  @Input() routerLink: any;

  constructor(private _router: Router){ }

  get isRouteActive(): boolean {
    return this._router.isRouteActive(this._router.generate(this.routerLink));
  }


}
