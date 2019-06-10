import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

const APP_PREFIX = 'nv_';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

  isBrowser;
  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  set(key: string, data: any): void {
    // isBrowser
    if (this.isBrowser) {
      try {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(data));
      } catch (e) {
        console.error('Error saving to localStorage', e);
      }
    }

  }

  get(key: string) {
    // isBrowser
    if (this.isBrowser) {
      try {
        return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
      } catch (e) {
        console.error('Error getting data from localStorage', e);
        return null;
      }
    }
  }

  remove(key: string) {
    // isBrowser
    if (this.isBrowser) {
      try {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
      } catch (e) {
        console.error('Error remove to localStorage', e);
      }
    }
  }

  clear() {
    // isBrowser
    if (this.isBrowser) {
      try {
        localStorage.clear();
      } catch (e) {
        console.error('Error clear to localStorage', e);
      }
    }
  }

}
