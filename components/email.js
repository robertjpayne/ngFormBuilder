var app = angular.module('formio.components');
app.config(function(formioComponentsProvider) {
  formioComponentsProvider.register('email', {
    views: formioComponentsProvider.$get().components.textfield.views
  });
});