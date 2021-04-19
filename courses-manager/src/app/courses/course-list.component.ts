import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit{
    
    filteredCourses: Course[] = []
    _courses: Course[] = []
    _filtrarPor: string

    constructor(private courseService: CourseService){}

    ngOnInit(): void{
        this._courses = this.courseService.retriveAll()
        this.filteredCourses = this._courses
    }

    set filtrar(value: string){
        this._filtrarPor = value
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filtrarPor.toLowerCase())> -1)
    }

    get filtrar(){
        return this._filtrarPor
    }
}