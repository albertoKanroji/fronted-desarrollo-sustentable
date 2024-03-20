import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Datum,
  PublicacionDetalle,
  Comentario,
} from 'src/app/interfaces/publicaciones/detalle';
import { Pokedex } from 'src/app/interfaces/publicaciones/listar';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  publicacionDetalle: PublicacionDetalle = {
    success: false,
    status: 0,
    message: '',
    data: {} as Datum,
  };
  comentariosUsuarios: Record<number, string> = {}; // Diccionario para almacenar nombres de usuarios
  publicaciones: Datum[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Obtiene el parámetro 'id' de la URL y lo convierte a tipo number
      this.getPublicacionDetalle(id);
    });   
    this.obtenerPublicaciones();
  }
  verDetalle(id: number) {
    this.router.navigate(['/news-detail', id]);
  }

  obtenerPublicaciones() {
    this.http
      .get<Pokedex>('http://127.0.0.1:8000/api/v1/publicaciones/')
      .subscribe((data: Pokedex) => {
        this.publicaciones = data.data;
      });
  }

  getPublicacionDetalle(id: number) {
    const url = `http://127.0.0.1:8000/api/v1/publicaciones/${id}`;
    this.http.get<PublicacionDetalle>(url).subscribe((response) => {
      this.publicacionDetalle = response;
      console.log(this.publicacionDetalle);
    });
  }
}
