import { async, TestBed } from '@angular/core/testing';
import { CardModule } from './card.module';

describe('CardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CardModule).toBeDefined();
  });
});
