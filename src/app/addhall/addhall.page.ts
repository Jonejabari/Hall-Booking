import { Component, OnInit } from '@angular/core';
import { HallService } from '../services/hall.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface StudentData {
  HallNumber: number;
  HallLocation: string;
  HallName: string;
  Status: string;
}

@Component({
  selector: 'app-addhall',
  templateUrl: './addhall.page.html',
  styleUrls: ['./addhall.page.scss'],
})
export class AddhallPage implements OnInit {

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
      HallNumber: ['', [Validators.required]],
      HallName: ['', [Validators.required]],
      HallLocation: ['', [Validators.required]],
      Status: ['', [Validators.required]],
    })

    this.bokerService.read_veh().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          HallNumber: e.payload.doc.data()['HallNumber'],
          HallName: e.payload.doc.data()['HallName'],
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
    record.EditHallNumber = record.HallNumber;
    record.EditHallName = record.EditHallName;
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

