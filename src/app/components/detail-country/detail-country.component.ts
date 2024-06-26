import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/shared/services/country.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  nameCountry: string | null = '';
  detailCountry: any;

  constructor(private router: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.nameCountry = params.get('nameCountry');
      this.getCountriesDetail();
    });
  }

  getCountriesDetail() {
    if (this.nameCountry) {
      this.countryService.getCountry(this.nameCountry).subscribe({
        next: (res) => {
          this.detailCountry = res.map((country: any) => country)

          console.log(this.detailCountry)

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


}
