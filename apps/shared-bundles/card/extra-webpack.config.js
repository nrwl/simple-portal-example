module.exports = {
  output: {
    library: 'card',
    libraryTarget: 'umd',
    filename: 'card.js'
  },
  externals: {
    '@angular/core': {
      commonjs: 'ng.core',
      commonjs2: 'ng.core',
      root: ['ng', 'core']
    },
    '@angular/common': {
      commonjs: 'ng.common',
      commonjs2: 'ng.common',
      root: ['ng', 'common']
    },
    '@angular/platform-browser': {
      commonjs: 'ng.platformBrowser',
      commonjs2: 'ng.platformBrowser',
      root: ['ng', 'platformBrowser']
    },
    '@angular/platform-browser-dynamic': {
      commonjs: 'ng.platformBrowserDynamic',
      commonjs2: 'ng.platformBrowserDynamic',
      root: ['ng', 'platformBrowserDynamic']
    },
    '@angular/compiler': {
      commonjs: 'ng.compiler',
      commonjs2: 'ng.compiler',
      root: ['ng', 'compiler']
    },
    '@angular/router': {
      commonjs: 'ng.router',
      commonjs2: 'ng.router',
      root: ['ng', 'router']
    },
    rxjs: {
      commonjs: 'rxjs',
      commonjs2: 'rxjs',
      root: ['rxjs']
    },
    'rxjs/operators': {
      commonjs: 'rxjs/operators',
      commonjs2: 'rxjs/operators',
      root: ['rxjs', 'operators']
    }
  }
};
