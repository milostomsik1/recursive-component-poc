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
      name: 'main1',
      slug: 'main1',
      subcategories: [
        {
          name: 'sub1',
          slug: 'main1/sub1',
          subcategories: [
            {
              name: 'subsub1',
              slug: 'main1/sub1/subsub1',
              subcategories: []
            },
            {
              name: 'subsub2',
              slug: 'main1/sub1/subsub2',
              subcategories: []
            },
          ]
        },
        {
          name: 'sub 2',
          slug: 'main1/sub2',
          subcategories: []
        },
      ]
    },
    {
      name: 'main2',
      slug: 'main2',
      subcategories: [
        {
          name: 'sub3',
          slug: 'main2/sub3',
          subcategories: []
        },
        {
          name: 'sub4',
          slug: 'main2/sub4',
          subcategories: []
        },
      ]
    },
  ];
}
