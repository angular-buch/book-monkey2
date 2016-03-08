export class Book {
  subtitle: string;
  rating: number;
  published: Date;
  description: string;
  
  constructor(
    public isbn: string,
    public title: string,
    public authors: string[]) {
  }
}
