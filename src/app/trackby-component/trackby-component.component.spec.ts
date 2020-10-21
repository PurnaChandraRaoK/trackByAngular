import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbyComponentComponent } from './trackby-component.component';

describe('TrackbyComponentComponent', () => {
  let component: TrackbyComponentComponent;
  let fixture: ComponentFixture<TrackbyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackbyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackbyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
