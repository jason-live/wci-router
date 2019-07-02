import Engine from './engine';

class EngineEgg extends Engine {
  renderRouter(): void {
    if (this.prefix) this.router.prefix(this.prefix);
    this.initData.map((i: any) => {
      const p = i.ctrPath + i.path;
      console.log(p);
      this.router[i.methodType](p, i.method);
    });
  }
}

export default EngineEgg;
