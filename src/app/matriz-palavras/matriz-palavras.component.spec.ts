import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizPalavrasComponent } from './matriz-palavras.component';

describe('MatrizPalavrasComponent', () => {
  let component: MatrizPalavrasComponent;
  let fixture: ComponentFixture<MatrizPalavrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizPalavrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizPalavrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
