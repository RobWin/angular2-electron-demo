import {Component, OnInit} from '@angular/core';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.css';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
