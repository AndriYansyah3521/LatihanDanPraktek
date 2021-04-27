import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelcostomerComponent } from './tabelcostomer.component';

describe('TabelcostomerComponent', () => {
  let component: TabelcostomerComponent;
  let fixture: ComponentFixture<TabelcostomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelcostomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelcostomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
