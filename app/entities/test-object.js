import { tracked } from '@glimmer/tracking';
import { dependentKeyCompat } from '@ember/object/compat';
import EmberObject from '@ember/object';

export default class TestObject  {
  @tracked tests;

  @dependentKeyCompat
  get testProp() {
    return this.tests ? this.tests[0] : null;
  }
}
