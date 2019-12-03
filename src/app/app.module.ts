import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { SearchComponent } from "./components/search/search.component";
import { ResultsComponent } from "./components/results/results.component";
import { GetBooksService } from "./services/get-books.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollDispatchModule,
    HttpClientModule
  ],
  providers: [GetBooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
