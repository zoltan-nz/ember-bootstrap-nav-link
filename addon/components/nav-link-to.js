import Ember from 'ember';
import layout from '../templates/components/nav-link-to';

const { LinkComponent, computed } = Ember;

export default LinkComponent.extend({
  tagName: 'li',
  layout: layout,
  attributeBindings: ['data-toggle', 'data-target'],
  
  hrefForA: computed('models', 'qualifiedRouteName', function computeLinkToComponentHref() {
    let qualifiedRouteName = this.get('qualifiedRouteName');
    let models = this.get('models');

    if (this.get('loading')) {
      return this.get('loadingHref');
    }

    let routing = this.get('_routing');
    let queryParams = this.get('queryParams.values');
    return routing.generateURL(qualifiedRouteName, models, queryParams);
  })
});
