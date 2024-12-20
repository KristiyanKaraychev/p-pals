import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostsComponent } from './my-posts.component';

describe('ActivePostsComponent', () => {
    let component: MyPostsComponent;
    let fixture: ComponentFixture<MyPostsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MyPostsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MyPostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
