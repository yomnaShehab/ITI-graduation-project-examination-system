import {Component, Input} from '@angular/core';
import {ICourse} from "../../interfaces/course.interface";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: ICourse[] = [];
}
