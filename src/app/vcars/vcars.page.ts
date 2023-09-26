import { Component, OnInit } from '@angular/core';
import { BokerService } from '../servic/boker.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface StudentData {
  FacultyName: string;
  FacultyNumber: number;
  HallNumber: number;
  HallName: string;
  HallLocation: string;
  Status: string;
}

@Component({
  selector: 'app-vcars',
  templateUrl: './vcars.page.html',
  styleUrls: ['./vcars.page.scss'],
})
export class VcarsPage implements OnInit {
  studentList = [];
  studentData: StudentData;
  studentForm: FormGroup;

  constructor(
    private bokerService: BokerService,
    public fb: FormBuilder
  ) { 
    this.studentData = {} as StudentData;
  }

  ngOnInit() {

    this.studentForm = this.fb.group({
      HallName: ['', [Validators.required]],
      HallLocation: ['', [Validators.required]],
      HallNumber: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      FacultyName: ['',[Validators.required]],
      FacultyNumber: ['',[Validators.required]]
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
          FacultyName: e.payload.doc.data()['FacultyName'],
          FacultyNumber: e.payload.doc.data()['FacultyNumber']
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
    record.EditHallNumber = record.EditHallNumber;
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
