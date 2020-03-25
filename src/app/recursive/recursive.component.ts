import { Component, Input, ElementRef, OnInit, HostListener } from '@angular/core';

export interface Category {
  name: string;
  slug: string;
  subcategories: Category[];
}

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.scss'],
})
export class RecursiveComponent implements OnInit {
  @Input() categories: Category[];
  depthLevel = 0;
  isExpanded = false;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnInit() {
    this.depthLevel = this.getDepthLevel(this.el.nativeElement);
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.toggle();
  }

  getDepthLevel(element: HTMLElement): number {
    let depth = 0;

    (function getDepth(el: HTMLElement) {
      if (el.parentElement.tagName === el.tagName) {
        depth++;
        getDepth(el.parentElement);
      }
    }(element));

    return depth;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
