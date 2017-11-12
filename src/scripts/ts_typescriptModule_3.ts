namespace app {

  class TypescriptModule3 extends app.TypescriptModule2 {

    public printBold(appId: string, msg: string) {
      this.print(appId, "<b>" + msg + "</b>");
    }
  }

  export let typescriptModule3 = new TypescriptModule3();

}

