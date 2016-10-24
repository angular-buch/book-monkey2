export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}

export const BookFormErrorMessages = [
  new ErrorMessage('title', 'required', 'Ein Buchtitel muss angegeben werden'),
  new ErrorMessage('isbn', 'required', 'Es muss eine ISBN Nummer angegeben werden'),
  new ErrorMessage('isbn', 'isbnFormat', 'Die ISBN Nummer muss aus 10 oder 13 Zeichen bestehen'),
  new ErrorMessage('published', 'required', 'Es muss ein Erscheinungsdatum angegeben werden'),
  new ErrorMessage('author', 'required', 'Es muss ein Autor angegeben werden'),
];
