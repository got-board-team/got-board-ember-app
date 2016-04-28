import Ember from 'ember';

export function dasherize(string) {
  return string[0].dasherize();
}

export default Ember.Helper.helper(dasherize);
