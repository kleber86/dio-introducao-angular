import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    courseID: number
    
    constructor(private activatedRouter: ActivatedRoute){}

    ngOnInit(): void{
        this.courseID = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    }

}