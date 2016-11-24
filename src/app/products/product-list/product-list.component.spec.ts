/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('Component: ProductList', () => {
  it('should create an instance', () => {
    let component = new ProductListComponent();
    expect(component).toBeTruthy();
  });
});
