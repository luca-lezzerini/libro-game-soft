import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuoriDelCastelloComponent } from './fuori-del-castello.component';

describe('FuoriDelCastelloComponent', () => {
  let component: FuoriDelCastelloComponent;
  let fixture: ComponentFixture<FuoriDelCastelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuoriDelCastelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuoriDelCastelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
