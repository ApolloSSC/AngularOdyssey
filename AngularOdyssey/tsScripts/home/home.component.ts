import { Component, OnInit } from '@angular/core';

@Component({
    template: require('./home.component.html')
})

export class HomeComponent implements OnInit {
    title: string;

    ngOnInit() {
        this.title = 'Odyssey';
    }
}