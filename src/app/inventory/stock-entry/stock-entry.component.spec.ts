import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StockEntryComponent } from "./stock-entry.component";
import { commonTestingModules } from "../../common/common.testing";

describe("StockEntryComponent", () => {
  let component: StockEntryComponent;
  let fixture: ComponentFixture<StockEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      declarations: [StockEntryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
