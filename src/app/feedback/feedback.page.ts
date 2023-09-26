import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../services/fireauth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface StudentData {
  FROM: string;
  MESSAGE: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  studentList = [];
  studentData: StudentData;
  studentForm: FormGroup;

  constructor(private firebaseService: FireauthService,
    public fb: FormBuilder
  ) {
    this.studentData = {} as StudentData;
   }

  ngOnInit() {

    this.studentForm = this.fb.group({
      FROM: ['', [Validators.required]],
      MESSAGE: ['', [Validators.required]]
    })

    this.firebaseService.read_broker().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          FROM: e.payload.doc.data()['FROM'],
          MESSAGE: e.payload.doc.data()['MESSAGE'],
        };
      })
      console.log(this.studentList);

    });
  }

  CreateRecord() {
    console.log(this.studentForm.value);
    this.firebaseService.create_broker(this.studentForm.value).then(resp => {
      this.studentForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_broker(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditFROM = record.FROM;
    record.EditMESSAGE = record.MESSAGE;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['FROM'] = recordRow.EditFROM;
    record['MESSAGE'] = recordRow.EditMESSAGE;
    this.firebaseService.update_broker(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
