import { Component, OnInit } from '@angular/core';
import {ResourceService} from "../../../core/service/resource.service";

@Component({
  selector: 'app-admin-content-layout',
  templateUrl: './admin-content-layout.component.html',
  styleUrls: ['./admin-content-layout.component.css']
})
export class AdminContentLayoutComponent implements OnInit {
  loading = true

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.resourceService.loadExternalStyles([
      'https://fonts.googleapis.com/css?family=Poppins:400,500,700,800&display=swap',
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      'assets/manager/plugin/bootstrap/css/bootstrap.min.css',
      'assets/manager/plugin/font-awesome/css/all.min.css',
      'assets/manager/plugin/perfectscroll/perfect-scrollbar.css',
      'assets/manager/plugin/pace/pace.css',
      'assets/manager/css/main.min.css',
      'assets/manager/css/custom.css',
      'https://code.jquery.com/ui/1.12.1/themes/ui-lightness/jquery-ui.css'
    ]);

    this.resourceService.loadExternalScripts([
      'assets/manager/plugin/jquery/jquery-3.4.1.min.js',
      'assets/manager/plugin/bootstrap/js/bootstrap.min.js',
      'https://unpkg.com/feather-icons',
      'assets/manager/plugin/perfectscroll/perfect-scrollbar.min.js',
      'assets/manager/plugin/pace/pace.min.js',
      'assets/manager/js/main.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js'
    ]);

    setTimeout(()=>{
      this.loading = false
    }, 1000)
  }

}
