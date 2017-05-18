import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class AlertService {
  constructor(public snackBar: MdSnackBar) {
  }

  success(message: string) {
    return this.snackBar.open(message, 'Close', MdSnackBarConfig);
  }

  error(message: string) {
    return this.snackBar.open(message, 'Close', MdSnackBarConfig);
  }
}
