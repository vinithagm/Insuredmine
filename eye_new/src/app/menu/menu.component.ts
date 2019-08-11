import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service'
import * as c3 from 'c3';
import * as d3 from 'd3';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public gh;
  constructor(
    private menuservice: MenuService
  ) { }

  ngOnInit() {
    this.BarGraph();
    this.LineGraph()
  }

  BarGraph() {
    var hr = document.getElementById('barc');
    var sent = [];
    var complaint = [];
    var opened = [];
    var All = [];
    var Bounced = [];
    var Clicked = [];
    var Unsubscribe = [];
    this.menuservice.getData().subscribe(data => {
      console.log("data", data)
      for (let d of data) {
        sent.push(d['report']['Sent'])
        complaint.push(d['report']['Complaint'])
        opened.push(d['report']['Opened'])
        All.push(d['report']['All']);
        Bounced.push(d['report']['Bounced'])
        Clicked.push(d['report']['Clicked'])
        Unsubscribe.push(d['report']['Unsubscribe'])
      }
      if (hr && sent) {
        this.gh = c3.generate({
          size: {
            width: hr.clientWidth,
            height: hr.clientHeight
          },
          bindto: "#barChart",
          data: {
            json: {
              sent: sent,
              complaint: complaint,
              opened: opened,
              all: All,
              bounced: Bounced,
              clicked: Clicked,
              Unsubscribe: Unsubscribe
            },

            type: 'bar',
            groups: [
              ['all', 'sent', 'complaint', 'opened', 'bounced', 'clicked', 'Unsubscribe']
            ]
          },
          grid: {
            y: {
              lines: [{ value: 0 }]
            }
          }
        })
      }
    })
  }
  LineGraph() {
    var hr = document.getElementById('lincc');
    var sent = [];
    var complaint = [];
    var opened = [];
    var All = [];
    var Bounced = [];
    var Clicked = [];
    var Unsubscribe = [];
    this.menuservice.getData().subscribe(data => {
      for (let d of data) {
        sent.push(d['report']['Sent'])
        complaint.push(d['report']['Complaint'])
        opened.push(d['report']['Opened'])
        All.push(d['report']['All']);
        Bounced.push(d['report']['Bounced'])
        Clicked.push(d['report']['Clicked'])
        Unsubscribe.push(d['report']['Unsubscribe'])
      }
      if (hr && sent) {
        this.gh = c3.generate({
          size: {
            width: hr.clientWidth,
            height: hr.clientHeight
          },
          bindto: "#lineChart",
          data: {
            json: {
              sent: sent,
              complaint: complaint,
              opened: opened,
              all: All,
              bounced: Bounced,
              clicked: Clicked,
              Unsubscribe: Unsubscribe
            },
            type: 'spline'
          },
        })
      }
    })
  }
}
