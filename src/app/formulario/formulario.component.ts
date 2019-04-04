import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titulo = 'Jogo da Forca';

  frase: string;

  constructor() {this.frase =  'teste';
  }

  ngOnInit() {
  }



}
