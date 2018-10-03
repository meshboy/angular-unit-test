import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuotesComponent } from "../../quotes/components/Quotes.component";
import { RouterModule, Routes } from "@angular/router";

const AppRoute: Routes = [
  {
    path: "",
    component: QuotesComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(AppRoute)],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule {}
