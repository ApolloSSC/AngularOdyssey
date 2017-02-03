import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { containsTree } from '@angular/router/src/url_tree';

@Component({
    moduleId: module.id,
    selector: 'odyssey-sidebar',
    templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    routeIsActive(routePath: string) {
        return this.router.url == routePath;
    }
}