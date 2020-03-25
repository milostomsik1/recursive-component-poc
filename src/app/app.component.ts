import { Component } from '@angular/core';
import { Category } from './recursive/recursive.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Category[] = [
    {
      name: 'main 1',
      subcategories: [
        {
          name: 'sub 1',
          subcategories: [
            {
              name: 'sub sub 1',
              subcategories: []
            },
            {
              name: 'sub sub 2',
              subcategories: []
            },
          ]
        },
        {
          name: 'sub 2',
          subcategories: []
        },
      ]
    },
    {
      name: 'main 2',
      subcategories: [
        {
          name: 'sub 3',
          subcategories: []
        },
        {
          name: 'sub 4',
          subcategories: []
        },
      ]
    },
  ];
}
