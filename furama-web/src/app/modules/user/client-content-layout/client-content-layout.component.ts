import { Component, OnInit } from '@angular/core';
import {ResourceService} from "../../../core/service/resource.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-client-content-layout',
  templateUrl: './client-content-layout.component.html',
  styleUrls: ['./client-content-layout.component.css']
})
export class ClientContentLayoutComponent implements OnInit {

  constructor(private resourceService: ResourceService) {

  }

  ngOnInit(): void {
    this.resourceService.loadExternalStyles([
      'assets/client/css/bootstrap.min.css',
      'assets/client/css/main.css',
      'assets/client/css/elegant-icons.css',
      'assets/client/css/flaticon.css',
      'assets/client/css/owl.carousel.min.css',
      'assets/client/css/nice-select.css',
      'assets/client/css/jquery-ui.min.css',
      'assets/client/css/magnific-popup.css',
      'assets/client/css/slicknav.min.css',
      'assets/client/css/style.css',
      'assets/client/vendor/animate/animate.css',
      'assets/client/vendor/select2/select2.min.css',
      'assets/client/vendor/perfect-scrollbar/perfect-scrollbar.css',
      'assets/client/css/util.css'
    ]);

    this.resourceService.loadExternalScripts([
      'assets/client/js/jquery-3.3.1.min.js',
      'assets/client/js/bootstrap.min.js',
      'assets/client/js/jquery.magnific-popup.min.js',
      'assets/client/js/jquery.nice-select.min.js',
      'assets/client/js/jquery-ui.min.js',
      'assets/client/js/jquery.slicknav.js',
      'assets/client/js/owl.carousel.min.js',
      'assets/client/js/main.js'
    ]);
  }

}
