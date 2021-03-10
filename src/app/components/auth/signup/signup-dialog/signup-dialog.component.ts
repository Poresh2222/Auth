import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, RouterEvent, NavigationStart } from '@angular/router';

import { DetectDeviceService } from 'src/app/services/utils/detect-device.service';
import { DESKTOP_REGULAR, DialogConfig, FULL_DIALOG_CONFIG } from 'src/app/components/dialog/dialog.config';
import { BasePageComponent } from 'src/app/components/base-page/base-page.component';
import { filter, tap, take, takeUntil } from 'rxjs/operators';


export interface SignUpDialogData{

}

@Component({
  template: ''
})
export class SignupDialogRouteComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private router: Router,
    private detectDesktopService: DetectDeviceService,
    private route: ActivatedRoute) {  
  }

  dialogSize:DialogConfig = FULL_DIALOG_CONFIG ;

  ngOnInit(): void {
    if (this.detectDesktopService.isDesktop()){
      this.dialogSize = DESKTOP_REGULAR
    }
    
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      ...this.dialogSize,
      panelClass: "signup",
      disableClose: true,
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([dialogRef.componentInstance.redirectUrl], { relativeTo: this.route });
    });
  }
}
@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent extends BasePageComponent {

  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA)
    public _data: SignUpDialogData) {

    super();

    router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationStart),
      tap(() => this.dialogRef.close()),
      take(1),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  public redirectUrl:string = "../"

  closeDialog(redirectUrl:string): void {
    this.redirectUrl = redirectUrl;
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
  }

}
