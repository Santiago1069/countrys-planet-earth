import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/services/country.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nameCountries: Array<any> = new Array<any>();

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries() {
    this.countryService.getCountries().subscribe({
      next: (res) => {
        this.nameCountries = res.map((country: any) => country.name.common).sort()
      }, error: (err) => {
        Swal.fire({
          title: "Oops!",
          text: "" + err + "",
          icon: "error",
        });
      }
    })
  }
}
