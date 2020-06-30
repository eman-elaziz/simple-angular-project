import { Component, OnInit } from '@angular/core';
declare var $

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      var owl = $('.owl-carousel');
      owl.owlCarousel({
          items:5,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:1000,
          autoplayHoverPause:true
      });
      $('.play').on('click',function(){
          owl.trigger('play.owl.autoplay',[1000])
      })
      $('.stop').on('click',function(){
          owl.trigger('stop.owl.autoplay')
      })
    });
   
 
    
   }

  ngOnInit(): void {
  }


}
