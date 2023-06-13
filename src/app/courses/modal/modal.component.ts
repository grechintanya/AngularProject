import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DeleteButtonClickedEvent } from "src/app/utils/public_api";

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
  })
export class ConfirmationModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DeleteButtonClickedEvent) {}
  result?: DeleteButtonClickedEvent;

  ngOnInit() {
    this.result = this.data
  }
}