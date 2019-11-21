describe('monkey-tests', () => {
  it("has a basic snapshot test", () => {
    expect('monkey 2342324').toMatchSnapshot();
  });
});
