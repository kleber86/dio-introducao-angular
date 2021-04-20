import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    
    filteredCourses: Course[] = []
    _courses: Course[] = []
    _filtrarPor: string

    constructor(private courseService: CourseService){}

    ngOnInit(): void{
        this.retriveAll()
    }

    retriveAll():void{
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses
                this.filteredCourses = this._courses
            },
            error: error => console.log('Error: ' + error)
        })
    }

    deleteById(courseId: number):void{
        this.courseService.deleteByID(courseId).subscribe({
            next: ()=> {
                console.log('Delete with success!')
                this.retriveAll()
            },
            error: error => console.log('Error', error)
        })
    }

    set filtrar(value: string){
        this._filtrarPor = value
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filtrarPor.toLowerCase())> -1)
    }

    get filtrar(){
        return this._filtrarPor
    }
}