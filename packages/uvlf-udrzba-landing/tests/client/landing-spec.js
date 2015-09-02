describe('sanjo:jasmine on client', function () {
  it('works', function () {
    expect(it).toBeDefined();
  })
})

describe('Home route', function () {
  it('should render home', function () {
    Meteor.setTimeout(function() {
      Router.go('/')
    }, 1500);
    expect(Router.current().url).toEqual("/")
  })
})