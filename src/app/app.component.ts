import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ProductListComponent]
})
export class AppComponent {
  title = 'app works!';
}
