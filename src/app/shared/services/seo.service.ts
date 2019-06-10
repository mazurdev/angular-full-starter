import {Inject, Injectable} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import seoConfig from '../../../assets/config/seo-config.json';
import {DOCUMENT} from '@angular/common';

@Injectable({providedIn: 'root'})
export class SeoService {
  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private dom
  ) {
  }

  setMeta(page: string) {
    this.setTitle(seoConfig[page].title);
    // main
    this.setNameAttribute('title', seoConfig[page].title);
    this.setNameAttribute('description', seoConfig[page].description);
    this.setNameAttribute('keywords', seoConfig[page].keywords);
    this.setNameAttribute('subject', seoConfig[page].subject);
    this.setNameAttribute('url', seoConfig[page].url);
    // ie
    this.setNameAttribute('msapplication-starturl', seoConfig[page].url);
    this.setNameAttribute('application-name', seoConfig[page].title);
    // twitter
    this.setNameAttribute('twitter:image', seoConfig[page].image);
    this.setNameAttribute('twitter:title', seoConfig[page].title);
    this.setNameAttribute('twitter:description', seoConfig[page].description);
    // open graph
    this.setPropertyAttribute('og:title', seoConfig[page].title);
    this.setPropertyAttribute('og:description', seoConfig[page].description);
    this.setPropertyAttribute('og:url', seoConfig[page].url);
    this.setPropertyAttribute('og:image', seoConfig[page].image);
  }

  private setTitle(title: string) {
    return this.titleService.setTitle(title);
  }

  private setNameAttribute(attribute: string, value: string) {
    if (this.checkAttributeExist(attribute, 'name')) {
      this.meta.updateTag({name: attribute, content: value});
    } else {
      this.meta.addTag({name: attribute, content: value});
    }
  }

  private setPropertyAttribute(attribute: string, value: string) {
    if (this.checkAttributeExist(attribute, 'property')) {
      this.meta.updateTag({property: attribute, content: value});
    } else {
      this.meta.addTag({property: attribute, content: value});
    }
  }

  private checkAttributeExist(attribute: string, type: string) {
    return this.meta.getTag(`${type}="${attribute}"`);
  }

  createCanonicalURL() {
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
  }

}
