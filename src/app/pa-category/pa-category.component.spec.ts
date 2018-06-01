import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaCategoryComponent } from './pa-category.component';

describe('PaCategoryComponent', () => {
  let component: PaCategoryComponent;
  let fixture: ComponentFixture<PaCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
