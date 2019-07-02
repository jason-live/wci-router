import Engine from './core/engine';
import EngineEgg from './core/engine_egg';
import EngineKoa from './core/engine_koa';

class WciRouter {
  constructor(engine: Engine) {
    engine.renderRouter();
  }
}

export default WciRouter;

export { EngineEgg, EngineKoa };
