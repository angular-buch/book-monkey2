import {Directive, ElementRef, Input, HostBinding} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';


@Directive({
  selector: '[activeClass]'
})

export class ActiveClassDirective {

  @Input() activeClass: string;
  @Input() routerLink: any;

  constructor(private _router: Router){ }

  @HostBinding('class.active') get isRouteActive() : boolean {
    return this._router.isRouteActive(this._router.generate(this.routerLink));
  }


}
