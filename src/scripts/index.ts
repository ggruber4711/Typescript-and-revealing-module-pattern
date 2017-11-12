declare var $:any;

/**
 * Specifying the "official method declarations" of the legacy java script module.
 * by listing all the existing functions
 */
interface JavaScriptModule {
   print( appId : string, message : string): void;
}

/** 
 * Namespace for the main App
 * creating the global "app" variable
 */
namespace app {
  export let javascriptModule : JavaScriptModule;
}

function msg(moduleName: string): string {
  return `Hi, I came from ${moduleName} module`;
}

$(document).ready(function() {

    const appId = 'app';

    // our rugular javascript
    app.javascriptModule.print(appId, msg('JavaScript'));

    // revealing module pattern with typescript
    app.typescriptModule1.print(appId, msg('TypeScript'));

    // refactored typescriptModule1 using classes and interfaces
    app.typescriptModule2.print(appId, msg('Refactored TypeScript'));

    // extension of typeScriptModule2 with new method printBold
    app.typescriptModule3.printBold(appId, msg('Extension of an existing class in same namespace app'));    
});
