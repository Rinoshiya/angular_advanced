import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficStatusComponent } from "./dashboard/traffic-status/traffic-status.component";
import { TicketComponent } from "./dashboard/ticket/ticket.component";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@NgModule({
    declarations:[AppComponent,HeaderComponent, ServerStatusComponent, TrafficStatusComponent, TicketComponent, DashboardItemComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent],
})

export class AppModule {

}