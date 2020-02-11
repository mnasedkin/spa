import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaNavListComponent } from './spa-nav-list.component';

describe('SpaNavListComponent', () => {
  let component: SpaNavListComponent;
  let fixture: ComponentFixture<SpaNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
