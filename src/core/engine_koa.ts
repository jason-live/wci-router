import Engine from './engine';

class EngineKoa extends Engine {
  renderRouter(): void {
    console.log('koa');
    console.log(this.initData);
  }
}

export default EngineKoa;
