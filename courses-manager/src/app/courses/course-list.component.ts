import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit{
    courses: Course[] = []

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Html + CSS',
                imageUrl: '',
                price: 14.99,
                code: 'XPT0-001',
                duration: 140,
                rating: 4.5,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular',
                imageUrl: '',
                price: 24.99,
                code: 'XPT0-002',
                duration: 100,
                rating: 4,
                releaseDate: 'December, 4, 2019'
            },
            {
                id: 3,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 20.99,
                code: 'XPT0-003',
                duration: 200,
                rating: 4.1,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }
}