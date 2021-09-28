import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadstrarLivroComponent } from './cadstrar-livro.component';

describe('CadstrarLivroComponent', () => {
  let component: CadstrarLivroComponent;
  let fixture: ComponentFixture<CadstrarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadstrarLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadstrarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
