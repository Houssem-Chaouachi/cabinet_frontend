import { Component, OnInit } from '@angular/core';
import { GererRdvService } from '../../service/gerer-rdv.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-liste-rdv',
  templateUrl: './liste-rdv.component.html',
  styleUrls: ['./liste-rdv.component.css']
})
export class ListeRdvComponent implements OnInit {
 acceptedPatients: any [];

  constructor(private gererRdv: GererRdvService) { }

  ngOnInit(): void {

   this.gererRdv.getRdv().subscribe((liste: []) => {
     this.acceptedPatients = liste;
     console.log('accepted Pattient', this.acceptedPatients);

   });
  }
 deletePatient(i, id) {
   this.gererRdv.deleteRdvAccepted(id).subscribe(() => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.acceptedPatients.slice(i, 1);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
          )}
        });
            });
          }
          }
