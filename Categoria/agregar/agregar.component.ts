import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Categoria } from 'src/app/Modelo/Categoria';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //nombre:string = "";
  categoria:Categoria=new Categoria();
  constructor(private service:ServiceService, private router:Router) { }
  ngOnInit() {
  }
  Guardar(){
     this.service.createCategoria(this.categoria).subscribe(data=>{
      alert("Registro guardado correctamente...!");
      this.router.navigate(["listar"]);
    })
   // alert(this.categoria.nom_cat);
  }
}
