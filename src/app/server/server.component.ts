import { Component, Input } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent{
    serverId = 10;
    serverStatus = "offline";

    @Input() serverName;

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getServerStatus(){
        return this.serverStatus;
    }


    getColor = () => {return this.serverStatus === 'online' ? 'green' : 'red';}

}