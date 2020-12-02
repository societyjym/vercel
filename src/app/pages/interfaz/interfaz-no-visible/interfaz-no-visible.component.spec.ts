import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazNoVisibleComponent } from './interfaz-no-visible.component';

describe('InterfazNoVisibleComponent', () => {
  let component: InterfazNoVisibleComponent;
  let fixture: ComponentFixture<InterfazNoVisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfazNoVisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazNoVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
