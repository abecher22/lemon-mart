import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReceiptLookupComponent } from "./receipt-lookup.component";
import { commonTestingModules } from "../../common/common.testing";

describe("ReceiptLookupComponent", () => {
  let component: ReceiptLookupComponent;
  let fixture: ComponentFixture<ReceiptLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      declarations: [ReceiptLookupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
