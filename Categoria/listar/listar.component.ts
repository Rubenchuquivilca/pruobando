import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Categoria } from 'src/app/Modelo/Categoria';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  categorias:Categoria[];
  constructor(private service:ServiceService, private router:Router) { }
  cat:Categoria=new Categoria();
  ngOnInit() {
    this.service.getCategorias().subscribe(data=>{this.categorias = data;});
  }
Editar(categoria:Categoria):void{
  localStorage.setItem("idc",categoria.idcategoria.toString());
  this.router.navigate(["edit"]);
}
Eliminar(categoria:Categoria){
  this.service.deleteCategoria(categoria).subscribe(data=>{
    alert("Registro Eliminado correctamente...!");
    this.categorias=this.categorias.filter(c=>c!==categoria);
  })
}
}
