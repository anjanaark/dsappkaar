import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhasboardtryComponent } from './dhasboardtry.component';

describe('DhasboardtryComponent', () => {
  let component: DhasboardtryComponent;
  let fixture: ComponentFixture<DhasboardtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhasboardtryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhasboardtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
