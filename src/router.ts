type Route = {
  path: string | RegExp;
  render: () => string;
  onBeforeEnter?: (params?: string) => Promise<void> | void;
  onEnter?: (params?: string) => Promise<void> | void;
  onLeave?: (params?: string) => Promise<void> | void;
};

export class Router {
  private routes: Route[] = [];
  private currentRoute: Route | null = null;
  private useHistoryAPI: boolean;

  constructor(useHistoryAPI: boolean = true) {
    this.useHistoryAPI = useHistoryAPI;

    const eventHandler = this.handleRoute.bind(this);

    if (this.useHistoryAPI) {
      window.addEventListener('popstate', eventHandler);
    } else {
      window.addEventListener('hashchange', eventHandler);
    }

    this.handleRoute();
  }

  addRoute(route: Route) {
    this.routes.push(route);
  }

  async navigate(path: string) {
    if (this.currentRoute && this.currentRoute.onLeave) {
      await this.currentRoute.onLeave();
    }

    if (this.useHistoryAPI) {
      history.pushState({}, '', path);
    } else {
      window.location.hash = path;
    }

    await this.handleRoute();
  }

  private async handleRoute() {
    const path = this.useHistoryAPI
      ? window.location.pathname
      : window.location.hash.slice(1);
    const route = this.routes.find((rt) =>
      rt.path instanceof RegExp ? rt.path.test(path) : rt.path === path,
    );

    const divForContent = document.querySelector('.content');

    if (route && divForContent) {
      if (route.onBeforeEnter) {
        await route.onBeforeEnter();
      }
      this.currentRoute = route;
      divForContent.innerHTML = route.render();
      if (route.onEnter) {
        await route.onEnter();
      }
    }
  }
}
