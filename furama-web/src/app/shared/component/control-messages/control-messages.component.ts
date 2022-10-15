import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, UntypedFormControl} from "@angular/forms";
import {ValidationService} from "../../service/validation.service";

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent implements OnInit {
  @Input() control: UntypedFormControl | AbstractControl = new UntypedFormControl();
  @Input() labelName?: string;

  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage(): any {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ValidationService.getValidationErrorMessage(
          propertyName,
          this.control.errors[propertyName],
          this.labelName
        );
      }
    }

    return undefined;
  }
}
