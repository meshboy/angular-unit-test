import { Component, OnInit } from "@angular/core";
import { QuoteService } from "../service/Quote.service";
import { QuoteModel } from "../model/QuoteModel";

@Component({
  selector: "app-Quotes",
  templateUrl: "./Quotes.component.html",
  styleUrls: ["./Quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  public quoteList: QuoteModel[];
  public fetchedList: QuoteModel[];
  public quoteText: String = null;

  constructor(private service: QuoteService) {}

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    this.service.fetchQuotesFromServer().then((data: QuoteModel[]) => {
      this.fetchedList = data;
    });
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = null;
  }

  removeQuote(index) {
    this.service.removeQuote(index);
  }
}
