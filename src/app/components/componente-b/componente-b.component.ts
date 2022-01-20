import { Component, OnInit } from '@angular/core';
import { ObjetosService } from '../../services/objetos.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor( private objetosService: ObjetosService ) { }

  ngOnInit(): void {
  }

  mostrarObjetos() {
    
    let objetos = this.objetosService.getObjetos();
    
    console.log(objetos);
  }

}
