import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as path from 'path';
var compression = require('compression')



export function app() {
  const server = express();

  // server.get('*', function(req,res,next) {
  //   if(req.headers['x-forwarded-proto'] !== 'https'){
  //   return res.redirect(301,['https://', req.get('Host'), req.url].join(''));
  //   }
  //   else{
  //       next() /* Continue to other routes if we're not redirecting */
  //   }
  //   });
    
  server.use(compression({ filter: shouldCompress }))
  
  
  const distFolder = join(process.cwd(), 'dist/realtime/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

 
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.route('/sitemap.xml')
  .get((req, res) => {
    res.sendFile(path.resolve(path.join(distFolder+'/src','/sitemap.xml')));

  });


  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));



  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });


  return server;
}

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    return false
  }
 
  return compression.filter(req, res)
}

function run() {
  const port = process.env.PORT || 4200;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}


declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
