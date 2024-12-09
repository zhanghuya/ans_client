import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  files: File[] = [];
  isDragging: boolean = false;

  // 输出事件
  @Output() filesDropped = new EventEmitter<File[]>();

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles && droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      this.files.push(...newFiles);
      this.filesDropped.emit(this.files); // 触发事件，将文件发送给父组件
    }
  }

  onFilesAdded(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const newFiles = Array.from(input.files);
      this.files.push(...newFiles);
      this.filesDropped.emit(this.files);
    }
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
    this.filesDropped.emit(this.files); // 更新文件列表
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    this.isDragging = false;
  }
}
