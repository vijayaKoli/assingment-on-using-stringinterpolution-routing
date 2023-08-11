import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomponetComponent } from './newcomponet.component';

describe('NewcomponetComponent', () => {
  let component: NewcomponetComponent;
  let fixture: ComponentFixture<NewcomponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcomponetComponent]
    });
    fixture = TestBed.createComponent(NewcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
