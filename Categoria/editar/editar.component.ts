import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  constructor(private service:ServiceService, private router:Router) { }
  categoria:Categoria=new Categoria();
  ngOnInit() {
    this.Editar();
  }
Editar(){
  let idc = localStorage.getItem("idc");
  this.service.getCategoriaId(+idc).subscribe(data=>{
    this.categoria=data;
  })
}
Actualizar(categoria:Categoria){
   this.service.updateCategoria(categoria).subscribe(data=>{
     this.categoria=data;
     alert("Registro modificado correctamente...!");
     this.router.navigate(["listar"]);
   })
}
}
