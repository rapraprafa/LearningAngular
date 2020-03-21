import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  backgroundColor = "";
  serverCreated = false;
  servers = ["Test server", "Test server 2", "zzz"];
  serverCreatedString = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    // for (var i = 0; i < this.servers.length; i++){
    //   if (this.servers[i] == "Test server"){
    //     this.servers.splice(i,1);
    //   }
    // }
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    if(this.serverName == "" /*|| this.serverName=="Test server"*/){
      this.serverCreated = false;
    }
    else{
      this.serverCreated = true;
      this.servers.push(this.serverName);
    }
    this.serverName = "";
    this.serverCreatedString = "Server was created, server name is "  + this.servers[this.servers.length-1];
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
