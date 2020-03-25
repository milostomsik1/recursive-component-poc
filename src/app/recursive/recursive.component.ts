import { Component, Input } from '@angular/core';

export interface Category {
  name: string;
  subcategories: Category[];
}

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.scss']
})
export class RecursiveComponent {
  @Input() categories: Category[];
}
