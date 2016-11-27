import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { ProductFilterPipe } from '../product-filter.pipe';
import { StarComponent } from '../../shared/star/star.component';
import { ProductService } from '../product.service'
@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
  pipes: [ProductFilterPipe ],
  directives: [StarComponent]
})
export class ProductListComponent implements OnInit{

  products: IProduct[];
  constructor(private _productService: ProductService){}

  pageTitle: String = "Product List!";
  imageWidth: number = 50;
  imageMargin: number = 20;
  showImage: boolean = false;
  listFilter: string = 'cart';
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit():void{
    console.log("ngOoInit() function");
    this.products = this._productService.getProducts();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' +message;
  }
}
