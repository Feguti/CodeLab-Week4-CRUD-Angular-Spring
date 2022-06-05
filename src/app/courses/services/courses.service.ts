import { Injectable } from '@angular/core';
import { Course } from "../model/course";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  listAll(): Course[] {
    return [
      {_id: '1', name: 'Information Technology', category: 'Technical'},
      {_id: '2', name: 'Edifications', category: 'Higher Course'}
    ];
  }
}
