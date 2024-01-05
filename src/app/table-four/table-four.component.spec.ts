import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFourComponent } from './table-four.component';

describe('TableFourComponent', () => {
  let component: TableFourComponent;
  let fixture: ComponentFixture<TableFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableFourComponent]
    });
    fixture = TestBed.createComponent(TableFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
