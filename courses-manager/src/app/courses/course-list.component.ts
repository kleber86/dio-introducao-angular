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
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 14.99,
                code: 'XPT0-001',
                duration: 140,
                rating: 4.5,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 24.99,
                code: 'XPT0-002',
                duration: 100,
                rating: 4,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }
}