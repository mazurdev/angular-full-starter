import {enableProdMode} from '@angular/core';
import {environment} from '@environments/environment';
// window is not defined
import {readFileSync} from 'fs';
import {join} from 'path';

const domino = require('domino');
const template = readFileSync(join('dist', 'client', 'index.html'), 'utf8');
const win = domino.createWindow(template);

if (environment.production) {
  // Remove console logs in production
  win.console.log = () => {};
  enableProdMode();
}

export {AppServerModule} from './app/app.server.module';
export {ngExpressEngine} from '@nguniversal/express-engine';
export {renderModule, renderModuleFactory} from '@angular/platform-server';
