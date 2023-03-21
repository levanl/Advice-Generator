import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAdviceComponent } from './generate-advice.component';

describe('GenerateAdviceComponent', () => {
  let component: GenerateAdviceComponent;
  let fixture: ComponentFixture<GenerateAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
