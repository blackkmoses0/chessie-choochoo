import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationInformationComponent } from './station-information.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('StationInformationComponent', () => {
  let component: StationInformationComponent;
  let fixture: ComponentFixture<StationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StationInformationComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
