import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() { }

  public loadExternalStyles(styleUrl: Array<any>) {
    styleUrl.forEach(e => {
      const styleElement = document.createElement('link');
      styleElement.rel = 'stylesheet';
      styleElement.href = e;
      document.head.appendChild(styleElement);
    });
  }

  public loadExternalScripts(scriptUrl: Array<any>) {
    scriptUrl.forEach(function (e) {
      const scriptElement = document.createElement('script');
      scriptElement.src = e;
      scriptElement.async = false;
      scriptElement.defer = true;
      document.body.appendChild(scriptElement);
    });
  }
}
