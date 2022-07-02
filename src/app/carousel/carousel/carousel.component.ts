import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  imgs: any = [];
  shownImg: any;
  imgIndex!: number;

  constructor() {}
  //
  ngOnInit(): void {}
  addImg(e: any) {
    let files = e.target.files;
    let sliderLenghth = this.imgs.length + files.length;
    let limit;
    if (sliderLenghth > 5) {
      limit = 5 - this.imgs.length;
    } else {
      limit = files.length;
    }
    for (let i = 0; i < limit; i++) {
      let file = files[i];

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgs.push(reader.result);
        this.shownImg = this.imgs[0];
      };
    }
    this.shownImg = this.imgs[0];
  }

  showImg(i: number) {
    this.imgIndex = i;
    this.shownImg = this.imgs[i];
  }
  delimg() {
    this.imgs.splice(this.imgIndex, 1);
    if (this.imgIndex == this.imgs.length || this.imgIndex > 0) {
      --this.imgIndex;
      this.shownImg = this.imgs[this.imgIndex];
    } else {
      this.shownImg = this.imgs[this.imgIndex];
    }
  }
  getPrevious() {
    // this.imgIndex اخر اندكس كان معروض

    // this.shownImg=this.imgs[this.imgIndex]   الى بيعرضلى الصورة
    // this.imgs  ده الصور بتاعتى
  // globalindex=arrimgs.length-1;

    --this.imgIndex;
    this.shownImg = this.imgs[this.imgIndex];
    if(this.imgIndex<0)
    {
      this.imgIndex = this.imgs.length-1;
      this.shownImg = this.imgs[this.imgIndex];

    }

  }

  getNext(){
    this.imgIndex++;
    this.shownImg = this.imgs[this.imgIndex];
    if(this.imgIndex>this.imgs.length-1)
    {
      this.imgIndex = 0;
      this.shownImg = this.imgs[this.imgIndex];

    }

  }
}
