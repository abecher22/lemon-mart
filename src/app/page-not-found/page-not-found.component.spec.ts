import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageNotFoundComponent } from "./page-not-found.component";
import { commonTestingModules } from "../common/common.testing";

describe("PageNotFoundComponent", () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      declarations: [PageNotFoundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
