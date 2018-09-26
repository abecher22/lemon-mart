import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductsComponent } from "./products.component";
import { commonTestingModules } from "../../common/common.testing";

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      declarations: [ProductsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
