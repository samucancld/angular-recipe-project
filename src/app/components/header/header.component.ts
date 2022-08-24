import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Output('tabClicked')
    tabSelected: EventEmitter<string> = new EventEmitter();

    onTabClicked(tab: string) {
        this.tabSelected.emit(tab);
    };



}