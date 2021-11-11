import { ProfileService } from './../profile.service';
import { EditProfileComponent } from './../edit-profile/edit-profile.component';
import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() followers: number = 0; //
  @Input() following: number = 0; //
  @Input() username: string; //
  @Input() avatar: string; //
  @Input() bio: string;
  @Input() born: Date | null = new Date();
  @Input() city: string = 'guilan';
  @Input() country: string = 'iran';
  @Input() created_at: Date;
  isMobile: boolean = false;
  file: any = undefined;
  @ViewChild('fileInput') input: any;
  @ViewChild('imagePreview') imagePreview: any;
  goToEditPage() {
    this.router.navigate(['/dashboard/edit_profile']);
  }
  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 650 ? true : false;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 650 ? true : false;
  }
  editPhoto() {
    this.input.nativeElement.click();
  }
  getImageFile($event: any) {
    this.file = undefined;
    this.file = this.input.nativeElement.files[0];
    this.imagePreview.nativeElement.src = URL.createObjectURL(
      this.input.nativeElement.files[0]
    );
  }
  cancelImage() {
    this.file = undefined;
    if (this.avatar) {
      this.imagePreview.nativeElement.src = this.avatar;
    } else {
      this.imagePreview.nativeElement.src = undefined;
    }
  }
  confirmImage() {
    this.profileService.editImage(this.file).subscribe((e) => {
      console.log('avatar');
      this.avatar = e.avatar;
      this.file = undefined;
    });
  }
}
