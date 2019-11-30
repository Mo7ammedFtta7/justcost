import { Ng2ImgMaxService } from 'ng2-img-max';

export class CompressImage {
  constructor(private ng2ImgMax: Ng2ImgMaxService) {}

  compress(image) {
    let file;
    this.ng2ImgMax.compressImage(image, 0.075).subscribe(
      result => {
        file = new File([result], result.name);
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
    return file;
  }

}
