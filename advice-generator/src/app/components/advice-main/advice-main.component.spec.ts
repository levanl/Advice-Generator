import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceMainComponent } from './advice-main.component';

describe('AdviceMainComponent', () => {
  let component: AdviceMainComponent;
  let fixture: ComponentFixture<AdviceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
