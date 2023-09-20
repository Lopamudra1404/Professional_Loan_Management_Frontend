import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-editing-one',
  templateUrl: './inline-editing-one.component.html',
  styleUrls: ['./inline-editing-one.component.css']
})
export class InlineEditingOneComponent implements OnInit {

  userArray = [
    {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "isEdit": true
    }
  ]
  constructor() { }
  ngOnInit(): void {
  }

  onEdit(item: any){
    debugger;
    this.userArray.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }
}

