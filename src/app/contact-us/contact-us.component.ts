import { Component ,OnInit} from '@angular/core';
import {ContactoService  } from "../servi/contacto.service";
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

constructor (private contactoService:ContactoService){}

ngOnInit():void{
  console.log(this.contactoService.getComentarios());

}

}
