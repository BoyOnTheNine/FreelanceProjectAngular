import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOfferActivityComponent } from './user-offer-activity.component';

describe('UserOfferActivityComponent', () => {
  let component: UserOfferActivityComponent;
  let fixture: ComponentFixture<UserOfferActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOfferActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOfferActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
