import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InventoryHomeComponent } from "./inventory-home.component";
import { commonTestingModules } from "../../common/common.testing";

describe("InventoryHomeComponent", () => {
  let component: InventoryHomeComponent;
  let fixture: ComponentFixture<InventoryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      declarations: [InventoryHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
