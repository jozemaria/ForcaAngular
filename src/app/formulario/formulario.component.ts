import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titulo = 'Jogo da Forca';
  mensagem: string;
  letra = '';
  letrasAcertadas: string[] = [];
  frase: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.frase = 'casa'.split('');
    for(let index=0; index<this.frase.length; index++){
      this.letrasAcertadas.push('-'); 
    }
  }
  palpitar(){
    if(this.letrasAcertadas.includes(this.letra) == false  && this.letra.includes(this.letra) == true){
      for(let char=0; char < this.frase.length; char++){
        if(this.letra == this.frase[char]){
          this.letrasAcertadas[char] = this.letra;
          this.mensagem = 'acertou';
        }
      }
    }
    if(this.frase.includes(this.letra) == false){
      this.mensagem = 'não possui essa letra';
    }
  }

}
