import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Servertest";
  backgroundColor = "";
  serverCreated = false;
  servers = ["Test server", "Test server 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  test = () => console.log("ez");

  changeButtonColor() {
    if (this.backgroundColor != "background-color:black;") {
      this.backgroundColor = "background-color:black;";
    }
    else{
      this.backgroundColor = "";
    }
  }
}
