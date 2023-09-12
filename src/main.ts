import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { bootstrapApplication } from "@angular/platform-browser";
import { createRegExp, digit } from "magic-regexp";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "magic-regexp-app",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>magic-regexp on Angular</h1>
    <p>Input min 5 digits for a valid input</p>
    <div>
      <input
        [(ngModel)]="value"
        (ngModelChange)="onInput()"
        placeholder="Enter numbers"
      />
      <div class="status">{{ status }}</div>
    </div>
  `,
})
export class App {
  value = "";

  status = "Initial value";

  private regex = createRegExp(digit.times(5));

  onInput() {
    if (this.regex.test(this.value)) {
      this.status = "Valid";
    } else {
      this.status = "Invalid";
    }
  }
}

bootstrapApplication(App);
