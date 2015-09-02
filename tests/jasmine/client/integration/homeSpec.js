"use strict";

describe('Home route', function () {
  beforeEach(function (done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

  beforeEach(waitForRouter);

  it('should render home', function () {
    expect(Router.current().url).toEqual("/")
  })
})
