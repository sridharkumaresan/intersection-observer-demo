import { Component } from '@angular/core';
import { DummyService } from './dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];
  page: number = 0;

  constructor(private dataService: DummyService) {

  }

  ngOnInit() {
    // this.fetchData();
  }

  fetchData(page?: number) {
    this.dataService.getLatestStories(page).subscribe(
      (data: any[]) => this.data.push(...data)
    );
  }

  onScroll() {
    console.log('On Scroll Triggered');
    this.fetchData(this.page++);
  }

  getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
