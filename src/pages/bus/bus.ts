import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import {ConfirmPage} from "../confirm/confirm";

@Component({
  selector: 'page-bus',
  templateUrl: 'bus.html'
})
export class BusPage {


  public bus_name:any;
  public my_seat:any=[];
  public gender_seat:any=[];
  public seat_booked:any=[];
  public seat_string:any;

  constructor(public navCtrl: NavController,public menu:MenuController)
  {
    this.menu.enable(true, 'PrinceMenu');
    this.bus_name="Prince A ";

    var i=0;
    for(i=0; i<51; i++)
    {
      this.my_seat.push("");
      this.gender_seat.push("");
      this.seat_booked.push("");
    }

    this.seat_booked[0]="1";
    this.seat_booked[1]="1";
    this.seat_booked[2]="1";
    this.seat_booked[3]="1";
    this.seat_booked[4]="1";
    this.seat_booked[5]="1";
    this.seat_booked[6]="1";
    this.seat_booked[8]="1";
    this.seat_booked[9]="1";
    this.seat_booked[10]="1";
    this.seat_booked[12]="1";
    this.seat_booked[13]="1";
    this.seat_booked[14]="1";
    this.seat_booked[15]="1";
    this.seat_booked[16]="1";
    this.seat_booked[17]="1";
    this.seat_booked[18]="1";
    this.seat_booked[19]="1";

  }

  Male(event)
  {
    //console.log(event);
    var clicked_id;
    clicked_id=event.srcElement.id;
    var seat_id;
    seat_id=clicked_id.split("_")[1];
    var seat_image=document.getElementById(clicked_id)as HTMLImageElement;
    var len=seat_image.src.split("/").length-1;

    var booked=false;

    if(this.seat_booked[seat_id-1]=="1")
    {
      booked=true;
    }
    else
    {
      booked=false;
    }


    if((seat_image.src.split("/")[len]=="red_seat.png" || seat_image.src.split("/")[len]=="purple_seat.png") && booked==true)
    {
      //alert("you are not allowed");
    }
    else {
      if (seat_id <= 24) {
        var row = seat_id / 4;
        row = Math.floor(row);
        var colum = seat_id % 4;

        var seat_image_1 = document.getElementById("seat_" + (parseInt(seat_id) - 1))as HTMLImageElement;
        var seat_image_2 = document.getElementById("seat_" + (parseInt(seat_id) + 1))as HTMLImageElement;
        var len = seat_image.src.split("/").length - 1;

        //alert(colum);

        if (colum == 1 && seat_image_2.src.split("/")[len] == "purple_seat.png") {
          //alert("not allowd 2");
        }
        else if (colum == 2 && seat_image_1.src.split("/")[len] == "purple_seat.png") {
          //alert("not allowd 1");
        }
        else if (colum == 3 && seat_image_2.src.split("/")[len] == "purple_seat.png") {
          //alert("not allowd 3");
        }
        else if (colum == 0 && seat_image_1.src.split("/")[len] == "purple_seat.png") {
          //alert("not allowd 4");
        }
        else
        {
          //alert("allowd all");
          this.MaleSeatBooking(seat_id,clicked_id);
        }
      }
      else if(seat_id ==25)
      {
        if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
        {
          //alert("you are not allowed");
        }
        else
        {
          var seat_image=document.getElementById("seat_"+(parseInt(seat_id)+1))as HTMLImageElement;
          if(seat_image.src.split("/")[len] == "purple_seat.png")
          {

          }
          else
          {
            this.MaleSeatBooking(seat_id,clicked_id);
          }
        }
      }
      else if(seat_id ==26)
      {
        if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
        {
          //alert("you are not allowed");
        }
        else
        {
          var seat_image=document.getElementById("seat_"+(parseInt(seat_id)-1))as HTMLImageElement;
          if(seat_image.src.split("/")[len] == "purple_seat.png")
          {

          }
          else
          {
            this.MaleSeatBooking(seat_id,clicked_id);
          }
        }
      }
      else if(seat_id>24 && seat_id<47)
      {
        if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
        {
          //alert("you are not allowed");
        }
        else
        {
          var row = seat_id / 4;
          row = Math.floor(row);
          var colum = seat_id % 4;

          var seat_image_1=document.getElementById("seat_"+(parseInt(seat_id)-1))as HTMLImageElement;
          var seat_image_2=document.getElementById("seat_"+(parseInt(seat_id)+1))as HTMLImageElement;
          var len=seat_image.src.split("/").length-1;

          //alert(colum);

          if(colum==3 && seat_image_2.src.split("/")[len] == "purple_seat.png")
          {
            //alert("not allowd 2");
          }
          else if(colum==0 && seat_image_1.src.split("/")[len]== "purple_seat.png")
          {
            //alert("not allowd 1");
          }
          else if(colum==1 && seat_image_2.src.split("/")[len] == "purple_seat.png")
          {
            //alert("not allowd 3");
          }
          else if(colum==2 && seat_image_1.src.split("/")[len] == "purple_seat.png")
          {
            //alert("not allowd 4");
          }
          else
          {
            //alert("allowd all");
            this.MaleSeatBooking(seat_id,clicked_id);
          }

        }
      }
      else if(seat_id>=47 && seat_id<=51)
      {
        if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
        {
          //alert("you are not allowed");
        }
        else
        {
          if(seat_id==47)
          {
            var seat_image=document.getElementById("seat_48")as HTMLImageElement;
            var len=seat_image.src.split("/").length-1;

            //alert(colum);

            if(seat_image.src.split("/")[len] == "purple_seat.png")
            {
              //alert("not allowd 2");
            }
            else
            {
              //alert("allowd all");
              this.MaleSeatBooking(seat_id,clicked_id);
            }
          }
          else if(seat_id==48)
          {
            var seat_image47=document.getElementById("seat_47")as HTMLImageElement;
            var seat_image49=document.getElementById("seat_49")as HTMLImageElement;
            var len=seat_image.src.split("/").length-1;

            //alert(colum);

            if(seat_image47.src.split("/")[len] == "purple_seat.png" || seat_image49.src.split("/")[len] == "purple_seat.png")
            {
              //alert("not allowd 2");
            }
            else
            {
              //alert("allowd all");
              this.MaleSeatBooking(seat_id,clicked_id);
            }
          }
          else if(seat_id==49)
          {
            var seat_image48=document.getElementById("seat_48")as HTMLImageElement;
            var seat_image50=document.getElementById("seat_50")as HTMLImageElement;
            var len=seat_image.src.split("/").length-1;

            //alert(colum);

            if(seat_image48.src.split("/")[len] == "purple_seat.png" || seat_image50.src.split("/")[len] == "purple_seat.png")
            {
              //alert("not allowd 2");
            }
            else
            {
              //alert("allowd all");
              this.MaleSeatBooking(seat_id,clicked_id);
            }
          }
          else if(seat_id==50)
          {
            var seat_image49=document.getElementById("seat_49")as HTMLImageElement;
            var seat_image51=document.getElementById("seat_51")as HTMLImageElement;
            var len=seat_image.src.split("/").length-1;

            //alert(colum);

            if(seat_image49.src.split("/")[len] == "purple_seat.png" || seat_image51.src.split("/")[len] == "purple_seat.png")
            {
              //alert("not allowd 2");
            }
            else
            {
              //alert("allowd all");
              this.MaleSeatBooking(seat_id,clicked_id);
            }
          }
          else if(seat_id==51)
          {
            var seat_image=document.getElementById("seat_50")as HTMLImageElement;
            var len=seat_image.src.split("/").length-1;

            //alert(colum);

            if(seat_image.src.split("/")[len] == "purple_seat.png")
            {
              //alert("not allowd 2");
            }
            else
            {
              //alert("allowd all");
              this.MaleSeatBooking(seat_id,clicked_id);
            }
          }
        }
      }
    }
  }


  Female(event)
  {
    //alert(event);
   // console.log(event);

    var clicked_id;
    clicked_id=event.target.id;
    //alert(clicked_id);
    var seat_id;
    seat_id=clicked_id.split("_")[1];
    var seat_image=document.getElementById(clicked_id)as HTMLImageElement;
    var len=seat_image.src.split("/").length-1;

    var booked=false;

    if(this.seat_booked[seat_id-1]=="1")
    {
      booked=true;
    }
    else
    {
      booked=false;
    }


    if(seat_id<=24)
    {
      if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
      {
        //alert("you are not allowed");
      }
      else
      {
        var row = seat_id / 4;
        row = Math.floor(row);
        var colum = seat_id % 4;

        var seat_image_1=document.getElementById("seat_"+(parseInt(seat_id)-1))as HTMLImageElement;
        var seat_image_2=document.getElementById("seat_"+(parseInt(seat_id)+1))as HTMLImageElement;
        var len=seat_image.src.split("/").length-1;

        //alert(colum);

        if(colum==1 && seat_image_2.src.split("/")[len] == "red_seat.png")
        {
          //alert("not allowd 2");
        }
        else if(colum==2 && seat_image_1.src.split("/")[len]== "red_seat.png")
        {
          //alert("not allowd 1");
        }
        else if(colum==3 && seat_image_2.src.split("/")[len] == "red_seat.png")
        {
          //alert("not allowd 3");
        }
        else if(colum==0 && seat_image_1.src.split("/")[len] == "red_seat.png")
        {
          //alert("not allowd 4");
        }
        else
        {
          //alert("allowd all");
          this.FemaleSeatBooking(seat_id,clicked_id);

        }

      }
    }
    else if(seat_id ==25)
    {
      if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
      {
        //alert("you are not allowed");
      }
      else
      {
        var seat_image=document.getElementById("seat_"+(parseInt(seat_id)+1))as HTMLImageElement;
        if(seat_image.src.split("/")[len] == "red_seat.png")
        {

        }
        else
        {
          this.FemaleSeatBooking(seat_id,clicked_id);
        }
      }
    }
    else if(seat_id ==26)
    {
      if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
      {
        //alert("you are not allowed");
      }
      else
      {
        var seat_image=document.getElementById("seat_"+(parseInt(seat_id)-1))as HTMLImageElement;
        if(seat_image.src.split("/")[len] == "red_seat.png")
        {

        }
        else
        {
          this.FemaleSeatBooking(seat_id,clicked_id);
        }
      }
    }
    else if(seat_id>24 && seat_id<47)
    {
      if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
      {
        //alert("you are not allowed");
      }
      else
      {
        var row = seat_id / 4;
        row = Math.floor(row);
        var colum = seat_id % 4;

        var seat_image_1=document.getElementById("seat_"+(parseInt(seat_id)-1))as HTMLImageElement;
        var seat_image_2=document.getElementById("seat_"+(parseInt(seat_id)+1))as HTMLImageElement;
        var len=seat_image.src.split("/").length-1;

        //alert(colum);

        if(colum==3 && seat_image_2.src.split("/")[len] == "red_seat.png")
        {
          //alert("not allowd 2");
        }
        else if(colum==0 && seat_image_1.src.split("/")[len]== "red_seat.png")
        {
          //alert("not allowd 1");
        }
        else if(colum==1 && seat_image_2.src.split("/")[len] == "red_seat.png")
        {
          //alert("not allowd 3");
        }
        else if(colum==2 && seat_image_1.src.split("/")[len] == "red_seat.png")
        {
          //alert("not allowd 4");
        }
        else
        {
          //alert("allowd all");
          this.FemaleSeatBooking(seat_id,clicked_id);
        }

      }
    }
    else if(seat_id>=47 && seat_id<=51)
    {
      if ((seat_image.src.split("/")[len] == "red_seat.png" || seat_image.src.split("/")[len] == "purple_seat.png") && booked == true)
      {
        //alert("you are not allowed");
      }
      else
      {
        if(seat_id==47)
        {
          var seat_image=document.getElementById("seat_48")as HTMLImageElement;
          var len=seat_image.src.split("/").length-1;

          //alert(colum);

          if(seat_image.src.split("/")[len] == "red_seat.png")
          {
            //alert("not allowd 2");
          }
          else
          {
            //alert("allowd all");
            this.FemaleSeatBooking(seat_id,clicked_id);
          }
        }
        else if(seat_id==48)
        {
          var seat_image47=document.getElementById("seat_47")as HTMLImageElement;
          var seat_image49=document.getElementById("seat_49")as HTMLImageElement;
          var len=seat_image.src.split("/").length-1;

          //alert(colum);

          if(seat_image47.src.split("/")[len] == "red_seat.png" || seat_image49.src.split("/")[len] == "red_seat.png")
          {
            //alert("not allowd 2");
          }
          else
          {
            //alert("allowd all");
            this.FemaleSeatBooking(seat_id,clicked_id);
          }
        }
        else if(seat_id==49)
        {
          var seat_image48=document.getElementById("seat_48")as HTMLImageElement;
          var seat_image50=document.getElementById("seat_50")as HTMLImageElement;
          var len=seat_image.src.split("/").length-1;

          //alert(colum);

          if(seat_image48.src.split("/")[len] == "red_seat.png" || seat_image50.src.split("/")[len] == "red_seat.png")
          {
            //alert("not allowd 2");
          }
          else
          {
            //alert("allowd all");
            this.FemaleSeatBooking(seat_id,clicked_id);
          }
        }
        else if(seat_id==50)
        {
          var seat_image49=document.getElementById("seat_49")as HTMLImageElement;
          var seat_image51=document.getElementById("seat_51")as HTMLImageElement;
          var len=seat_image.src.split("/").length-1;

          //alert(colum);

          if(seat_image49.src.split("/")[len] == "red_seat.png" || seat_image51.src.split("/")[len] == "red_seat.png")
          {
            //alert("not allowd 2");
          }
          else
          {
            //alert("allowd all");
            this.FemaleSeatBooking(seat_id,clicked_id);
          }
        }
        else if(seat_id==51)
        {
          var seat_image=document.getElementById("seat_50")as HTMLImageElement;
          var len=seat_image.src.split("/").length-1;

          //alert(colum);

          if(seat_image.src.split("/")[len] == "red_seat.png")
          {
            //alert("not allowd 2");
          }
          else
          {
            //alert("allowd all");
            this.FemaleSeatBooking(seat_id,clicked_id);
          }
        }
      }
    }

  }
  Confirm()
  {
    this.navCtrl.push(ConfirmPage);
  }

  FemaleSeatBooking(seat_id,clicked_id)
  {
    var i = 0;
    for (i = 0; i < 51; i++) {
      if (this.my_seat[seat_id - 1] == "1") {
        this.my_seat[seat_id - 1] = "";
        this.gender_seat[seat_id - 1] = "";
        var image = document.getElementById(clicked_id) as HTMLImageElement;
        image.src = "assets/img/green_seat.png";
      }
      else {
        this.my_seat[seat_id - 1] = "1";
        this.gender_seat[seat_id - 1] = "F";
        var image = document.getElementById(clicked_id) as HTMLImageElement;
        image.src = "assets/img/purple_seat.png";
      }
    }

    this.seat_string="";
    var i=0;
    for(i=0; i<51; i++)
    {
      if(this.my_seat[i]!="")
      {
        this.seat_string=this.seat_string+"  "+(i+1)+" ("+this.gender_seat[i]+") "
      }
    }
    console.log("Seat Booked    : "+this.seat_booked);
    console.log("Seats          : "+this.my_seat);
    console.log("Seats Gender   : "+this.gender_seat);


  }

  MaleSeatBooking(seat_id,clicked_id)
  {
    var i = 0;
    for (i = 0; i < 51; i++) {
      if (this.my_seat[seat_id - 1] == "1") {
        this.my_seat[seat_id - 1] = "";
        this.gender_seat[seat_id - 1] = "";
        var image = document.getElementById(clicked_id) as HTMLImageElement;
        image.src = "assets/img/green_seat.png";
      }
      else {
        this.my_seat[seat_id - 1] = "1";
        this.gender_seat[seat_id - 1] = "M";
        var image = document.getElementById(clicked_id) as HTMLImageElement;
        image.src = "assets/img/red_seat.png";
      }
    }

    this.seat_string="";
    var i=0;
    for(i=0; i<51; i++)
    {
      if(this.my_seat[i]!="")
      {
        this.seat_string=this.seat_string+"  "+(i+1)+" ("+this.gender_seat[i]+") "
      }
    }
    console.log("Seat Booked    : "+this.seat_booked);
    console.log("Seats          : "+this.my_seat);
    console.log("Seats Gender   : "+this.gender_seat);
  }

}
