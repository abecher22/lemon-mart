import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {
  commonTestingModules,
  commonTestingProviders,
  MatIconRegistryFake,
  DomSanitizerFake,
  ObservableMediaFake,
} from "./common/common.testing";
import { ObservableMedia } from "@angular/flex-layout";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      providers: commonTestingProviders.concat([
        { provide: ObservableMedia, useClass: ObservableMediaFake },
        { provide: MatIconRegistry, useClass: MatIconRegistryFake },
        { provide: DomSanitizer, useClass: DomSanitizerFake },
      ]),
      declarations: [AppComponent],
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it("should render the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-container")).toBeDefined();
  }));
});
