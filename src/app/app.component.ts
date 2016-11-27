import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/product.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-product-list></app-product-list>
  `,
  styleUrls: ['app.component.css'],
  directives: [ProductListComponent],
  providers: [ProductService]
})
export class AppComponent {
  title = 'app works!';
}
