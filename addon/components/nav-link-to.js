import { computed } from '@ember/object';
import LinkComponent from '@ember/routing/link-component';
import { assert } from '@ember/debug';
import { DEBUG } from '@glimmer/env';

export default LinkComponent.extend({

  tagName: 'li',

  hrefForA: computed(
    '_currentRouterState',
    '_route',
    '_models',
    '_query',
    'tagName',
    'loading',
    'loadingHref',
    // eslint-disable-next-line ember/require-return-from-computed
    function computeLinkToComponentHref() {
      if (this.loading) {
        return this.loadingHref;
      }

      const { _route: route, _models: models, _query: query, _routing: routing } = this;

      if (DEBUG) {
        try {
          return routing.generateURL(route, models, query);
        } catch (e) {
          assert(
            `You attempted to generate a link for the "${this.route}" route, but did not ` +
            `pass the models required for generating its dynamic segments. ` +
            e.message
          );
        }
      } else {
        return routing.generateURL(route, models, query);
      }
    }
  )
});
