import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datum,  } from '../interfaces/publicaciones/detalle';
import { Router } from '@angular/router';
import { Pokedex } from '../interfaces/publicaciones/listar';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  publicaciones: Datum[] = [];

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }
  verDetalle(id: number) {
    this.router.navigate(['/news-detail', id]);
  }

  obtenerPublicaciones() {
    this.http.get<Pokedex>('http://127.0.0.1:8000/api/v1/publicaciones/')
      .subscribe((data: Pokedex) => {
        this.publicaciones = data.data;
      });
  }
}
