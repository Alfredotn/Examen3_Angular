import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core'
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-detalle',
  templateUrl: './proveedor-detalle.component.html',
  styleUrls: ['./proveedor-detalle.component.css']
})
export class ProveedorDetalleComponent implements OnInit {

  @Input() proveedor?: Proveedor;
  
  constructor(private datosProveedor:ProveedorService) { 
    
  }

  ngOnInit(): void {
  }

  actualizar()
  {
    console.log(this.proveedor.name);
    console.log(this.proveedor.id);

    var newProveedor= <Proveedor>{};

    newProveedor.id=this.proveedor.id;
    newProveedor.name=this.proveedor.name;
    newProveedor.type="proveedor";
    newProveedor.saldo=0;
    newProveedor.estado="nuevo";

    this.datosProveedor
      .getSize()
      
      this.datosProveedor.actualizarProveedor(newProveedor).subscribe(responseList => {
        this.actualizar = responseList[0];
        this.actualizar = responseList[1];
    });


  }



  
}
