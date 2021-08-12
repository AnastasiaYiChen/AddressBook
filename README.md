# AddressBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Process Image

![UI](https://github.com/AnastasiaYiChen/AddressBook/blob/main/src/assets/images/ui.PNG)

## Bug arise 

npm ERR! code ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC
npm ERR! 19256:error:1408F119:SSL routines:ssl3_get_record:decryption failed or bad record mac:c:\ws\deps\openssl\openssl\ssl\record\ssl3_record.c:677:
npm ERR!

---------------------------------------------------------------------------------
-  when run “ npm i angularfire2  ” 
---------------------------------------------------------------------------------

Used solution below but doesn't works for me, may works for you.



Clearing the cache
To clear a cache in npm, we need to run the npm cache clean --force command in our terminal.

clean: It deletes the all data from your cache folder.

npm cache clean --force

npm cache verify

delete all file under C:\Users\UserName\AppData\Roaming\npm-cache

delete node.js

reinstall the latest version 16.6.2  for x64

npm install -g @angular/cli

ng new project

num install

npm i angularfire2




Click to find out more about a new promotion
