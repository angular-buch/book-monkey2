export class Validation {
  constructor(){
    return {
      title: {
        error: '',
        messages: {
          'required': 'Ein Buchtitel muss angegeben werden',
        }
      },
      isbn: {
        error: '',
        messages: {
          'required': 'Es muss eine ISBN Nummer angegeben werden',
          'minlength': 'Die ISBN Nummer muss mindestens 10 Zeichen enthalten',
          'maxlength': 'Eine ISBN Nummer kann nicht mehr als 10 Zeichen haben'
        }
      },
      published: {
        error: '',
        messages: {
         'required': 'Es muss ein Erscheinungsdatum angegeben werden'
        }
      },
      authors: {
        error: '',
        messages: {
         'required': 'Es muss mindestens ein Autor angegeben werden'
        }
      }
    };
  }
}
