import { TestBed, async,inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { DateAdapter, MAT_DATE_FORMATS, MatNavList, MatSnackBarModule } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MaterialModule } from '@angular/material';


// import { Component, OnInit } from '@angular/core';
// import { MatCheckboxModule,MatSidenav, MatInput} from '@angular/material';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import {HttpClientModule} from '@angular/common/http';
import { RestangularModule, Restangular } from 'ngx-restangular';

//services
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { SocketService } from './services/socket.service';
import { EventService } from './services/event.service';
import { CameraService } from './services/camera.service';
import { ZoneService } from "./services/zone.service";
import { EventHistoryService } from './services/event-history.service';
import { FeedbackService } from './services/feedback.service';
import { VisitorManagementService } from './services/visitor-management.service';
import { VisitService } from './services/visitor.service';
import { PassService } from './services/pass.service';


import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
//services

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { baseURL } from './shared/baseurl';
// import { APP_BASE_HREF, Location } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { RestangularConfigFactory } from './shared/restconfig';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatVideoModule } from 'mat-video';
// import { NouisliderModule } from 'ng2-nouislider';
// import {SliderModule} from 'primeng/slider';
// import { Ng5SliderModule } from 'ng5-slider';
import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// import {CustomMaterialModule} from "./core/material.module";
import {
  MatButtonModule, MatInputModule, MatNativeDateModule, MatIconModule, MatExpansionModule, MatDatepickerModule,
  MatStepperModule, MatCheckboxModule, MatTabsModule, MatSidenavModule, MatListModule, MatToolbarModule,
  MatMenuModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher,
  MatSliderModule, MatSlideToggleModule, MatChipsModule, MatTableModule, MatTooltipModule
} from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { ReportsComponent } from './reports/reports.component';
// import { VisitorManagementsComponent } from './visitor-managements/visitor-managements.component';
import { EventcountComponent } from './events/eventcount/eventcount.component';
import { EventComponent } from './events/event/event.component';
import { LivefeedComponent } from './livefeed/livefeed.component';
import { StreamerComponent, modalComponent } from './livefeed/streamer/streamer.component';
import { Zone } from './shared/zone';
import { DetailComponent } from './events/detail/detail.component';
import { detailmodalComponent } from './events/detail/detail.component';
import { feedbackmodalComponent } from './events/detail/detail.component';
import { updateredprioritymodalComponent } from './events/detail/detail.component';
import { updateyellowprioritymodal } from './events/detail/detail.component';
import { updategreenprioritymodal } from './events/detail/detail.component';
import { updategrayprioritymodal } from './events/detail/detail.component';
import { updateblueprioritymodal } from './events/detail/detail.component';
import { bookmarkmodal } from './events/detail/detail.component';
import { webcammodal } from './visitormanagement/visitormanagement.component';
import { webcampic } from './vms/vms.component';
import { subconfirmmodal } from './visitormanagement/visitormanagement.component';
import { submit } from './vms/vms.component';

import { exitUpdatemodal } from './visitormanagement/visitormanagement.component';
import { enteredUpdatemodal } from './enteredvisitor/enteredvisitor.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgStreamingModule } from "videogular2/streaming";
import { LoginComponent } from './login/login.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MatRadioModule } from '@angular/material/radio';
import { VisitormanagementComponent } from './visitormanagement/visitormanagement.component';
import { GraphsComponent } from './reports/graphs/graphs.component';
import { EventSummaryComponent } from './reports/eventsummary/eventsummary.component';
import { VisitorsummaryComponent } from './reports/visitorsummary/visitorsummary.component';
import { VisitorhistoryComponent } from './reports/visitorhistory/visitorhistory.component';
import { VisitordetailsComponent } from './reports/visitordetails/visitordetails.component';
import { UserComponent } from './reports/visitorhistory/user/user.component';
import { EventhistoryComponent, /*evtModalComponent*/ } from './reports/eventhistory/eventhistory.component';
import { ReportdetailComponent } from './reports/eventhistory/reportdetail/reportdetail.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { PrintpageComponent } from './visitormanagement/printpage/printpage.component';
import { PagerService } from './services/pager.service';
import { GpaginationService } from './services/gpagination.service';
import { EventHistoryDetailComponent } from './reports/eventhistory/event-history-detail/event-history-detail.component';
import { HistoryTodayComponent } from './history-today/history-today.component';
import { UserdetailComponent } from './reports/visitorhistory/userdetail/userdetail.component';
import { VisitordetailComponent } from './reports/visitorsummary/visitordetail/visitordetail.component';
import { VisitorinformationComponent } from './reports/visitorsummary/visitorinformation/visitorinformation.component';
import { RegistrationComponent } from './registration/registration.component';
import { MultipassvisitorComponent } from './multipassvisitor/multipassvisitor.component';
import { ExitedvisitorComponent } from './exitedvisitor/exitedvisitor.component';
import { EnteredvisitorComponent } from './enteredvisitor/enteredvisitor.component';
import { VmsComponent } from './vms/vms.component';
import { NagiosComponent } from './nagios/nagios.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        NoopAnimationsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatVideoModule,
        MatDialogModule,
        MatRadioModule,
        MatButtonToggleModule,
        CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatNativeDateModule, MatCardModule, MatIconModule, MatSidenavModule, MatListModule,
        //MatSidenav,
        RestangularModule.forRoot(RestangularConfigFactory),
        MatExpansionModule,
        MatCheckboxModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgStreamingModule,
        FormsModule,
        ReactiveFormsModule,
        WebcamModule,
        MatDatepickerModule,
        BsDatepickerModule.forRoot(),
        MatTabsModule,
        MatStepperModule,
        MatSliderModule,
        MatMenuModule,
        TagCloudModule,
        MatSlideToggleModule,
        MatChipsModule,
        // NouisliderModule,
        // SliderModule,
        // Ng5SliderModule,
        // MaterialModule,
        NgxMatDrpModule,
        NgxMaterialTimepickerModule.forRoot(),
        MatTableModule,
        MatTooltipModule,
        MatSortModule,
        MatSelectModule,
        MatFormFieldModule,
        CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatExpansionModule,
        MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatDialogModule
      ],
      declarations: [
        AppComponent,
        MenuComponent,
        EventsComponent,
        ReportsComponent,
        // VisitorManagementsComponent,
        EventcountComponent,
        EventComponent,
        LivefeedComponent,
        StreamerComponent,
        modalComponent,
        detailmodalComponent,
        VideoPlayerComponent,
        DetailComponent,
        feedbackmodalComponent,
        updateredprioritymodalComponent,
        updateyellowprioritymodal,
        updategreenprioritymodal,
        updategrayprioritymodal,
        updateblueprioritymodal,
        bookmarkmodal,
        exitUpdatemodal,
        enteredUpdatemodal,
        subconfirmmodal,
        submit,
        LoginComponent,
        VisitormanagementComponent,
        FilterPipe,
        GraphsComponent,
        EventSummaryComponent,
        VisitorsummaryComponent,
        VisitorhistoryComponent,
        VisitordetailsComponent,
        UserComponent,
        webcammodal,
        webcampic,
        EventhistoryComponent,
        ReportdetailComponent,
        MultiselectComponent,
        PrintpageComponent,
        // evtModalComponent,
        EventHistoryDetailComponent,
        HistoryTodayComponent,
        UserdetailComponent,
        VisitordetailComponent,
        VisitorinformationComponent,
        RegistrationComponent,
        MultipassvisitorComponent,
        ExitedvisitorComponent,
        EnteredvisitorComponent,
        VmsComponent,
        NagiosComponent,
        modalComponent,
        detailmodalComponent,
        feedbackmodalComponent,
        updateredprioritymodalComponent,
        updateyellowprioritymodal,
        updategreenprioritymodal,
        updategrayprioritymodal,
        updateblueprioritymodal,
        bookmarkmodal,
        webcammodal,
        webcampic,
        subconfirmmodal,
        submit,
        exitUpdatemodal,
        enteredUpdatemodal

      ],
      providers: [
        AuthGuard,
        ProcessHTTPMsgService,
        EventService,
        SocketService,
        CameraService,
        ZoneService,
        FeedbackService,
        EventHistoryService,
        AuthService,
        VisitorManagementService,
        VisitService,
        PassService,
        PagerService,
        GpaginationService,
        {
          provide: DateAdapter, useClass: AppDateAdapter
      },
      {
          provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
      },
        { provide: 'BaseURL', useValue: baseURL },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
        { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
      ],
    


    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'temp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('temp');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to temp!');
  // });
});
