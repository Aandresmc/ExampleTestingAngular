import { Component, OnInit } from '@angular/core';
import { ISaludarService, SaludarService } from './saludos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'example-test';
  saludo!: String;

  constructor(private saludarService: ISaludarService) {}

  ngOnInit(): void {
    this.saludo = this.saludarService.saludar('mauro'); // 'Hi mauro!'
  }
}
