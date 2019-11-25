import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeModule } from '@myorg/home';
import { AppComponent } from './app.component';

const installedModules = {};
let modules;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([
      {
        path: 'card',
        loadChildren: () => {
          return new Promise(res => {
            const interval = setInterval(() => {
              if (window['webpackJsonpcard']) {
                clearInterval(interval);
                modules = (window as any).webpackJsonpcard[0][1];
                const r = __webpack_require_override__(
                  './src/app/app.module.ngfactory.js'
                );
                res(r['AppModuleNgFactory']);
              }
            }, 10);
          });
        }
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

function __webpack_require_override__(moduleId) {
  /******/
  /******/ // Check if module is in cache
  /******/ if (installedModules[moduleId]) {
    /******/ return installedModules[moduleId].exports;
    /******/
  } // Create a new module (and put it into the cache)
  /******/ /******/ var module = (installedModules[moduleId] = {
    /******/ i: moduleId,
    /******/ l: false,
    /******/ exports: {}
    /******/
  }); // Execute the module function
  /******/
  /******/ /******/ modules[moduleId].call(
    module.exports,
    module,
    module.exports,
    __webpack_require_override__
  ); // Flag the module as loaded
  /******/
  /******/ /******/ module.l = true; // Return the exports of the module
  /******/
  /******/ /******/ return module.exports;
  /******/
} // expose the modules object (__webpack_modules__)
/******/
/******/
/******/ /******/ __webpack_require_override__.m = modules; // expose the module cache
/******/
/******/ /******/ __webpack_require_override__.c = installedModules; // define getter function for harmony exports
/******/
/******/ /******/ __webpack_require_override__.d = function(
  exports,
  name,
  getter
) {
  /******/ if (!__webpack_require_override__.o(exports, name)) {
    /******/ Object.defineProperty(exports, name, {
      enumerable: true,
      get: getter
    });
    /******/
  }
  /******/
}; // define __esModule on exports
/******/
/******/ /******/ __webpack_require_override__.r = function(exports) {
  /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ Object.defineProperty(exports, Symbol.toStringTag, {
      value: 'Module'
    });
    /******/
  }
  /******/ Object.defineProperty(exports, '__esModule', { value: true });
  /******/
}; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
/******/
/******/ /******/ /******/ /******/ /******/ /******/ __webpack_require_override__.t = function(
  value,
  mode
) {
  /******/ if (mode & 1) value = __webpack_require_override__(value);
  /******/ if (mode & 8) return value;
  /******/ if (
    mode & 4 &&
    typeof value === 'object' &&
    value &&
    value.__esModule
  )
    return value;
  /******/ var ns = Object.create(null);
  /******/ __webpack_require_override__.r(ns);
  /******/ Object.defineProperty(ns, 'default', {
    enumerable: true,
    value: value
  });
  /******/ if (mode & 2 && typeof value != 'string')
    for (var key in value)
      __webpack_require_override__.d(
        ns,
        key,
        function(key) {
          return value[key];
        }.bind(null, key)
      );
  /******/ return ns;
  /******/
}; // getDefaultExport function for compatibility with non-harmony modules
/******/
/******/ /******/ __webpack_require_override__.n = function(module) {
  /******/ var getter =
    module && module.__esModule
      ? /******/ function getDefault() {
          return module['default'];
        }
      : /******/ function getModuleExports() {
          return module;
        };
  /******/ __webpack_require_override__.d(getter, 'a', getter);
  /******/ return getter;
  /******/
}; // Object.prototype.hasOwnProperty.call
/******/
/******/ /******/ __webpack_require_override__.o = function(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}; // __webpack_public_path__
/******/
/******/ /******/ __webpack_require_override__.p = '';
