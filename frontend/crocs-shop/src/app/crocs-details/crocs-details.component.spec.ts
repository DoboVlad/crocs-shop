import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrocsDetailsComponent } from './crocs-details.component';

describe('CrocsDetailsComponent', () => {
  let component: CrocsDetailsComponent;
  let fixture: ComponentFixture<CrocsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrocsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrocsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
