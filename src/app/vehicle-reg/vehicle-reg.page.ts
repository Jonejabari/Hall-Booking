import { Component, OnInit } from '@angular/core';
import { BokerService } from '../servic/boker.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface StudentData {
  FucultyNumber: number;
  FacultyName: string;
  FacultyDetails: string;
  
}

@Component({
  selector: 'app-vehicle-reg',
  templateUrl: './vehicle-reg.page.html',
  styleUrls: ['./vehicle-reg.page.scss'],
})
export class VehicleRegPage implements OnInit {

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
      FacultyNumber: ['', [Validators.required]],
      FacultyName: ['', [Validators.required]],
      FacultyDetails: ['',[Validators.required]]
    })

    this.bokerService.read_veh().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          FacultyName: e.payload.doc.data()['FacultyName'],
          FacultyNumber: e.payload.doc.data()['FacultyNumber'],
          FacultyDetails:e.payload.doc.data()['FacultyDetails']
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
    record.EditFacultyName = record.FacultyName;
    record.EditFacultyNumber = record.FacultyNumber;
    record.EditFacultyDetails = record.FacultyDetails;
    
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['FacultyName'] = recordRow.Edit.FacultyName;
    record['FacultyNumber'] = recordRow.Edit.FacultyNumber;
    record['FacultyDetails'] = recordRow.Edit.FacultyDetails
    
    this.bokerService.update_veh(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
