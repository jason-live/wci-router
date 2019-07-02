import Options from '../types/options';

abstract class Engine implements Options {
  /**
   * 路由
   * @type {*}
   * @memberof Options
   */
  router: any;
  /**
   * 全局路径
   * @type {string}
   * @memberof Options
   */
  prefix: string;

  /**
   * 参数 Map
   * @type {*}
   * @memberof Options
   */
  initData: any;

  /**
   * Creates an instance of Engine.
   * @param {Options} options
   * @memberof Engine
   */
  constructor(options: Options) {
    const { router, prefix, initData } = options;
    this.router = router;
    this.prefix = prefix || '/';
    this.initData = initData || [];
  }

  abstract renderRouter(): void;
}

export default Engine;
