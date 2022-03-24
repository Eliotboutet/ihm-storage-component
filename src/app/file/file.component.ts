import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  @Input() fileType: 'video' | 'image' | 'text' | 'audio' = 'image';
  @Input() fileName: string | undefined;
  @Input() addHour: string | undefined;
}
