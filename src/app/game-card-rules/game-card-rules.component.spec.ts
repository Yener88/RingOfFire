import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardRulesComponent } from './game-card-rules.component';

describe('GameCardRulesComponent', () => {
  let component: GameCardRulesComponent;
  let fixture: ComponentFixture<GameCardRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCardRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
