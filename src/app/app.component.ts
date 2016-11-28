import { Component } from '@angular/core';
import { HTTP_PROVIDERS  } from '@angular/http';
import 'rxjs/Rx'; //load all features
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
  providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'app works!';
}
