describe("my first sample in cypress", () => {
  it("true shoud be true", () => {
    cy.visit("https://google.co.in");
    expect(true).to.equal(true);
  });

  it("5 shoud 5", () => {
    expect(5).to.equal(5);
  });
})


describe("my first sample1 in cypress", () => {
  it("true shoud be true", () => {
    cy.visit("https://google.co.in");
    expect(true).to.equal(true);
  });

  it("5 shoud 5", () => {
    expect(5).to.equal(5);
  });
})
