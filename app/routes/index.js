import Route from '@ember/routing/route';

//const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

import { service } from '@ember/service';

export default class IndexRoute extends Route {
  /*
  async model() {
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    return data.map((model) => {
      let { id, attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { id, type, ...attributes };
    });
  }
 */

  @service store;
  async model() {
    return this.store.findAll('rental');
  }
}
