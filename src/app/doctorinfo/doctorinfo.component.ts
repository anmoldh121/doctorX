import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore'
import { ToastrService } from 'ngx-toastr' 

@Component({
  selector: 'app-doctorinfo',
  templateUrl: './doctorinfo.component.html',
  styleUrls: ['./doctorinfo.component.css']
})
export class DoctorinfoComponent implements OnInit {
uid = null
data
successFlag = false
appointment = [];

@ViewChild('button',{static: false})
private el: ElementRef

  constructor(private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get('id')
    
    this.firestore.collection('doctors').doc(this.uid).ref.get().then((res)=>{
      console.log(res.data())
      this.data = res.data()
    },err => {
      console.log("error ,",err)
    })

    this.firestore.collection('appointments').ref.where('doctorUid','==',this.uid).get().then((res)=>{
      res.forEach(snap => {
        this.appointment.push(snap.data())
        console.log(this.appointment)
      })
      if(this.appointment.length != 0) {
        this.renderer.addClass(this.el.nativeElement, 'disabled')
      }
    }, err=> {
      console.log(err)
    })
    console.log(this.appointment)
  }
  ngAfterViewInit() {
    console.log(this.appointment.length)
    if (this.appointment.length != 0 ) {
      console.log("it works")
      this.renderer.addClass(this.el.nativeElement, 'disabled')
    }
  }

  onAppointmentClick() {
    const json = {
      doctorUid: this.uid,
      userId: localStorage.uid
    }
    
    this.firestore.collection('appointments').add(json).then((res)=>{
      console.log(res)
      this.successFlag = true
      this.renderer.addClass(this.el.nativeElement, 'disabled')
    },err=>{
      console.log(err)
    })
  }

}
