import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverId:number = 1;
  serverStatus:string = 'online';

  getServerStatus() {
    return this.serverStatus;
  }
}
