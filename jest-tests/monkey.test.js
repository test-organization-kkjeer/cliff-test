describe('monkey-tests', () => {
  it("has a basic snapshot test", () => {
    expect('monkey 123').toMatchSnapshot();
  });
});
