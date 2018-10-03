import { Injectable } from "@angular/core";
import { QuoteModel } from "../model/QuoteModel";

@Injectable({
  providedIn: "root"
})
export class QuoteService {
  public quoteList: QuoteModel[] = [];

  constructor() {}

  addNewQuote(quote: String) {
    this.quoteList.push(new QuoteModel(quote, new Date()));
  }

  getQuote() {
    return this.quoteList;
  }

  removeQuote(index) {
    this.quoteList.splice(index, 1);
  }
}
