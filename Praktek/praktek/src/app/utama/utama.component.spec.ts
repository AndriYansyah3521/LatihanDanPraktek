import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtamaComponent } from './utama.component';

describe('UtamaComponent', () => {
  let component: UtamaComponent;
  let fixture: ComponentFixture<UtamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
