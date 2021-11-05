import Component from '@ember/component';
import classic from 'ember-classic-decorator';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import TestObject from 'test-horrible-get/entities/test-object';

/**
 * A brief description
 *
 * @module Components
 * @class TestContainer
 * @example
 * ```hbs
 *   <TestContainer />
 * ```
 */
@classic
export default class TestContainer extends Component {
  @tracked testObject;

  init() {
    super.init();
    this.testObject = new TestObject();
  }

  @computed('testObject.testProp')
  get showTheTest() {
    return this.testObject.testProp;
  }

  @action
  updateObject() {
    this.testObject.tests = ['First test'];

    // Comment me out, and you'll see "First test" in the template!
    this.testObject.testProp;
  }
}
