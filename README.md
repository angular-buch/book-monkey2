# Book-Monkey 2
[![Build Status](https://travis-ci.org/angular-buch/book-monkey2.svg)](https://travis-ci.org/angular-buch/book-monkey2)

[![Monkey](src/assets/images/monkey-thinking.png)](http://book-monkey2.angular-buch.com/)

Der __"Book-Monkey"__ ist das Demo-Projekt zum Buch ["Angular: Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen"](https://angular-buch.com/).
Mithilfe dieses Buchs werden Sie Googles neuestes Framework kennenlernen.
Wir laden Sie dazu ein, mit den aktuellsten Technologien moderne Single-Page-Anwendungen zu erstellen.

Anhand des Beispielprojekts __"Book-Monkey"__ führen wir Sie schrittweise an die Entwicklung von Angular-Anwendungen heran. Sie werden in die grundlegenden Konzepte eingeführt, die es Ihnen ermöglichen, strukturierte, modularisierte und somit wartbare Applikationen zu erstellen.

Dieses Repository fässt alle Schritte zur Entwicklung des BookMonkeys zusammen und stellt sie in einer gemeinsamen Anwendung dar.
Die einzelnen Schritte sind außerdem jeweils als einzelne Repositorys verfügbar und sollten für die schrittweise Entwicklung genutzt werden:


* __Iteration-1 - Komponenten & Template-Syntax__
  1. _[Komponenten](https://book-monkey2.angular-buch.com/iteration-1/components)_
  2. _[Property Bindings](https://book-monkey2.angular-buch.com/iteration-1/property-bindings)_
  3. _[Event Bindings](https://book-monkey2.angular-buch.com/iteration-1/event-bindings)_
* __Iteration-2 - Services & Routing__
  1. _[Dependency Injection](https://book-monkey2.angular-buch.com/iteration-2/di)_
  2. _[Routing](https://book-monkey2.angular-buch.com/iteration-2/navigation)_
* __Iteration-3 - Http__
  1. _[HTTP](https://book-monkey2.angular-buch.com/iteration-3/http)_
* __Iteration-4 - Formularverarbeitung & Validierung__
  1. _[Template Driven Forms](https://book-monkey2.angular-buch.com/iteration-4/template-driven-forms)_
  2. _[Reactive Forms](https://book-monkey2.angular-buch.com/iteration-4/reactive-forms)_
  3. _[Custom Validation](https://book-monkey2.angular-buch.com/iteration-4/custom-validation)_
* __Iteration-5 - Pipes & Direktiven__
  1. _[Pipes](https://book-monkey2.angular-buch.com/iteration-5/pipes)_
  2. _[Direktiven](https://book-monkey2.angular-buch.com/iteration-5/directives)_
* __Iteration-6 - Module und fortgeschrittenes Routing__
  1. _[Die Anwendung modularisieren](https://book-monkey2.angular-buch.com/iteration-6/modules)_
  2. _[Lazy Loading](https://book-monkey2.angular-buch.com/iteration-6/lazy-loading)_
  3. _[Guards](https://book-monkey2.angular-buch.com/iteration-6/guards)_
  4. _[Resolver](https://book-monkey2.angular-buch.com/iteration-6/resolver)_


# Das Buch

Lesen Sie mehr auf [angular-buch.com](https://angular-buch.com/).

[![Book](src/assets/images/book-thumbnail.png)](https://angular-buch.com/)


# Vollständige Demo

Der BookMonkey wird im Buch in mehreren Iterationen weiter entwickelt.  
Eine Übersicht aller Funktionen ist auf [book-monkey2.angular-buch.com](http://book-monkey2.angular-buch.com/) erreichbar.

## Einzelne Beispiele

Neben der vollständigen Demo können Sie die einzelnen Entwicklungsschritte durch mehre Github-Repositories nachvollziehen.
Achten Sie auf den Download-Link im Footer der Demo unter [book-monkey2.angular-buch.com](http://book-monkey2.angular-buch.com/).


## Anzeige der Änderungen zwischen den einzelnen Schritten

** Achtung: aktuell nur unter Linux/ Unix Systemen verfügbar **
Innerhalb jeder Iteration existieren einer oder mehrere Schritte, die jeweils den vorherigen Stand des BookMonkeys erweitern bzw. verändern.
Um eine Auflistung aller Unterscheide zwischen den einzelnen Entwicklungsschritten zu erhalten, kann  der folgende Befehl auf der Konsole aufgerufen werden:

```bash
npm run diff
```

Der Befehl führt das Skript `step-diff.sh` aus und erstellt einen neuen Ordner `diffs`.
Dort liegen (sortiert nach Schritten) HTML-Dateien, die jeweils die Änderungen zwischen den BookMonkey-Versionen auflisten.
Weiterhin wird eine Index-Datei mit verweisen auf die diffs erzeugt und ein Webserver zur Auslieferung (http-server) gestartet, sofern dieser auf dem System installiert ist.

## Start

Die gezeigten Kommandozeilen-Befehle setzen voraus, dass [Node.js](https://nodejs.org/) und [Git](https://git-scm.com/) installiert sind. 

```
git clone https://github.com/angular-buch/book-monkey2.git
cd book-monkey2
npm install
npm start
```

# License
Code released under the [MIT license](https://opensource.org/licenses/MIT).
