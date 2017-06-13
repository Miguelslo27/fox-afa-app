import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGetPlayerComponent } from './btn-get-player.component';

describe('BtnGetPlayerComponent', () => {
  let component: BtnGetPlayerComponent;
  let fixture: ComponentFixture<BtnGetPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGetPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGetPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
