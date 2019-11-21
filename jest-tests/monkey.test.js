describe('monkey-tests', () => {
  it("has a basic snapshot test", () => {
    expect('monkey 2342345').toMatchSnapshot();
  });
});
