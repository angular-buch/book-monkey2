import {Directive, Input, HostBinding} from '@angular/core';
import {Router} from '@angular/router';

@Directive({ selector: '[activeClass]' })

export class ActiveClassDirective {
  /*@Input() activeClass: string;
  @Input() routerLink: any;

  constructor(private _router: Router){ }

  @HostBinding('class.active') get isActive() : boolean {
    return this._router.isRouteActive(this._router.generate(this.routerLink));
  }*/

  /* Host-Bindings werden im Moment VOR den Inputs ausgeführt. Das soll sich ändern.
  Bis dahin müssen wir die CSS-Klasse statisch in der Direktive hinterlegen.
  Später verwenden wir den folgenden auskommentierten Weg.

  @HostBinding('class.' + this.activeClass) get isActive() : boolean {
    return this._router.isRouteActive(this._router.generate(this.routerLink));
  }*/
}
