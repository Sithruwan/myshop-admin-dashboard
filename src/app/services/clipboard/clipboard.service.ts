import {inject, Injectable} from '@angular/core';
import {SnackBarService} from '../snackBar/snack-bar.service';


@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  private snackBarService = inject(SnackBarService);

  constructor() { }


  copyToClipboard(text: string) {
    if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(()=>{
        this.snackBarService.openSnackBar("Copied to clipboard", "Close",1);
      }).catch(error=>{
        this.snackBarService.openSnackBar("Failed to copy", "Close",1);
      })
    }else{
      this.snackBarService.openSnackBar("API not support", "Close",1);
    }


  }





}
