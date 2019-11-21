describe('monkey-tests', () => {
  it("has a basic snapshot test", () => {
    expect('monkey321').toMatchSnapshot();
  });
});
