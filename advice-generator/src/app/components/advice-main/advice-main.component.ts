import { Component } from '@angular/core';
import { take } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-advice-main',
  templateUrl: './advice-main.component.html',
  styleUrls: ['./advice-main.component.scss']
})
export class AdviceMainComponent {

    quote:any;

    constructor(private apiService: HttpServiceService) {}


    ngOnInit():void {
      this.showAdvice()
    }

    showAdvice() {
      this.apiService.getAdviceData().pipe(take(1)).subscribe((res) => {
        this.quote = res
        console.log(this.quote)
      })
    }
    


}
