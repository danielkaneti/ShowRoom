import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from '../../../services/reviews.service';
import { Reviews } from 'src/app/models/reviews';
import { editReviews } from 'src/app/models/reviews';


@Component({
  selector: 'app-editreview',
  templateUrl: './editreriew.component.html',
  styleUrls: ['./editreriew.component.css']
})


export class EditreviewComponent implements OnInit {

  editRev : editReviews;
  rev :Reviews;
  
  constructor(private rout: ActivatedRoute,
    private revService: ReviewsService) { }

  ngOnInit(): void {

    let id = this.rout.snapshot.params['id'];

    this.revService.getReviewById(id).subscribe(data=>{
        this.rev=data;
    });
  }


  updateReview(revTitle: string, revCont: string) {

    let id = this.rout.snapshot.params['id'];

    const reviewNew: editReviews = ({
     
      reviewTitle: revTitle,
      reviewContent: revCont,
    });

    this.revService.updateReview(id, reviewNew).subscribe();
    console.log(reviewNew);

  }
  alert(){
    alert("Success");
  }
}
