import { Component, OnInit } from '@angular/core';
import { HallService } from '../services/hall.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface StudentData {
  HallName: String;
  HallNumber: number;
  HallLocation: string;
  Status: string;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  studentList = [];
  studentData: StudentData;
  studentForm: FormGroup;

  constructor(
    private bokerService: HallService,
    public fb: FormBuilder
  ) { 
    this.studentData = {} as StudentData;
  }

  ngOnInit() {

    this.studentForm = this.fb.group({
      HallName: ['', [Validators.required]],
      HallNumber: ['', [Validators.required]],
      HallLocation: ['', [Validators.required]],
      Status: ['', [Validators.required]],
    })

    this.bokerService.read_veh().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          HallName: e.payload.doc.data()['HallName'],
          HallNumber: e.payload.doc.data()['HallNumber'],
          HallLocation: e.payload.doc.data()['HallLocation'],
          Status: e.payload.doc.data()['Status'],
        };
      })
      console.log(this.studentList);

    });
  }

  CreateRecord() {
    console.log(this.studentForm.value);
    this.bokerService.create_veh(this.studentForm.value).then(resp => {
      this.studentForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.bokerService.delete_veh(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditHallName = record.HallName;
    record.EditHallNumber = record.HallNumber;
    record.EditHallLocation = record.HallLocation;
    record.EditStatus = record.Status;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['HallName'] = recordRow.EditHallName;
    record['HallNumber'] = recordRow.EditHallNumber;
    record['HallLocation'] = recordRow.EditHallLocation;
    record['Status'] = recordRow.EditStatus;
    this.bokerService.update_veh(recordRow.id, record);
    recordRow.isEdit = false;
  }

}