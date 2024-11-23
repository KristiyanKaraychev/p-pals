import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Preview } from '../types/preview';

@Component({
    selector: 'app-previews-list',
    standalone: true,
    imports: [],
    templateUrl: './previews-list.component.html',
    styleUrl: './previews-list.component.css',
})
export class PreviewsListComponent implements OnInit {
    previews: Preview[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getAllPreviews().subscribe((previews) => {
            console.log(previews);
            this.previews = previews;
        });
    }
}
