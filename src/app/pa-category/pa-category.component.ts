import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pa-category',
  templateUrl: './pa-category.component.html',
  styleUrls: ['./pa-category.component.css']
})
export class PaCategoryComponent {
  @Input() category;
  @Output() selectCategory = new EventEmitter();

  onSelectCategory() {
    this.selectCategory.emit(this.category);
  }
}
