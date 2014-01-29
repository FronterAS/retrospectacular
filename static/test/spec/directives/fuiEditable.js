'use strict';

describe('Directive: fuiEditable', function () {

  // load the directive's module
  beforeEach(module('retrospectApp','app/views/directives/fuiEditable.html'));

  var element,
      scope,
      $rootScope,
      $compile,
      $templateCache,
      template;

  beforeEach(inject(function (_$templateCache_,_$compile_,_$rootScope_) {
    $templateCache = _$templateCache_;
    template = $templateCache.get('app/views/directives/fuiEditable.html');
    $templateCache.put('views/directives/fuiEditable.html', template);

    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should print Edit button', inject(function ($compile) {
    element = angular.element('<fui-editable></fui-editable>');
    element = $compile(element)($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('Edit');
  }));

  it('should print Delete button', inject(function ($compile) {
    element = angular.element('<fui-editable></fui-editable>');
    element = $compile(element)($rootScope);
    $rootScope.$digest();

    expect(element.html()).toContain('hasDelete()');
    expect(element.html()).toContain('onDelete()');
    expect(element.html()).toContain('delete-ticket');
    expect(element.html()).toContain('btn-danger');
  }));
});
