import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  @Input() entries: any[] | null;

  isExpanded = [];

  constructor() {}

  ngOnInit() {}

  clearExpanded() {
    this.isExpanded = [];
  }

  clickResult(e, entry) {
    const indexOfID = this.isExpanded.indexOf(entry.id);
    if (indexOfID < 0) {
      this.isExpanded = [...this.isExpanded, entry.id];
    } else {
      this.isExpanded = this.isExpanded.filter(id => {
        return id !== entry.id;
      });
    }
  }
}
