import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import {
  DataApiJsonPlaceHolder,
  ISaludarService,
  SaludarService,
} from './saludos.service';

describe('AppComponent', () => {
  // const saludarServiceSpy = jasmine.createSpyObj('ISaludarService', [
  //   'saludar',
  // ]);

  // saludarServiceSpy.saludar.and.returnValue('Hi mauro!');

  const dataFakeApi: DataApiJsonPlaceHolder = {
    completed: true,
    id: 1,
    title: 'data fake',
    userId: 1,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: ISaludarService,
          useClass: SaludarService,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // arrange
    const app = fixture.componentInstance; // act
    expect(app).toBeTruthy(); // assert
  });

  it(`should return 'Hi mauro!'`, () => {
    const spy = spyOn(
      SaludarService.prototype,
      'getDataApiPlaceHolder'
    ).and.returnValue(of(dataFakeApi));

    // const spy = spyOn(SaludarService.prototype, 'saludar').and.returnValue(
    //   'Hi mauro!'
    // );

    const fixture = TestBed.createComponent(AppComponent); // arrange
    const app = fixture.componentInstance; //arrange

    app.ngOnInit();
    const saludo = app.saludo; // act
    
    expect(saludo).toBe('Hi mauro!'); // assert
    expect(spy).toHaveBeenCalled();
  });
});
