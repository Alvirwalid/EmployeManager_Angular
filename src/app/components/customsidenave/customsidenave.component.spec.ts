import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsidenaveComponent } from './customsidenave.component';

describe('CustomsidenaveComponent', () => {
  let component: CustomsidenaveComponent;
  let fixture: ComponentFixture<CustomsidenaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomsidenaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomsidenaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
