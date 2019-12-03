import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { GetBooksService } from "../../services/get-books.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @ViewChild("searchInput", { static: false }) searchInput: ElementRef;
  @ViewChild("resultsComponent", { static: false })
  resultsComponent;
  error = null;
  results = null;
  loading = false;

  constructor(private getBooksService: GetBooksService) {}
  ngOnInit() {}

  search() {
    let inputValue = this.searchInput.nativeElement.value;
    if (inputValue.trim() !== "") {
      this.loading = true;
      this.getBooksService.getData(inputValue).subscribe(
        data => {
          let res: any = data;
          this.results = res.items || [];
          this.error = null;
          this.loading = false;
          this.resultsComponent.clearExpanded();
        },
        err => {
          this.error =
            err.response && err.response.data && err.response.data.error
              ? err.response.data.error.message
              : "Unexpected Error.";
          this.results = null;
          this.loading = false;
          this.resultsComponent.clearExpanded();
        }
      );
    } else {
      this.error = "Please enter a term before searching.";
      this.results = null;
    }
  }

  onKeydownInput(e) {
    if (e.key === "Enter") {
      this.search();
    }
  }

  onChangeInput(e) {
    this.error = null;
    this.results = null;
  }
}
