import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewsListComponent } from './previews-list.component';

describe('PreviewsListComponent', () => {
  let component: PreviewsListComponent;
  let fixture: ComponentFixture<PreviewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
