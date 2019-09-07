import { Component } from '@angular/core';

@Component({
  selector: 'header-panel',
  templateUrl: '../views/header-panel.component.html',
  styleUrls: ['../styles/header-panel.component.css']
})
export class HeaderPanelComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
