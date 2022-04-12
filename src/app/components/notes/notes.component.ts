import { Component, OnInit } from '@angular/core';
 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
Swiper.use([Navigation]);  }




}
