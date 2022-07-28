import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesbtnComponent } from './rulesbtn.component';

describe('RulesbtnComponent', () => {
  let component: RulesbtnComponent;
  let fixture: ComponentFixture<RulesbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
