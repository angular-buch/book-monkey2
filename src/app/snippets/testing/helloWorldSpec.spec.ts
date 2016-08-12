// SUT - 'system under test'
class DeepThought {
  getAlmightyAnswer() {
    return 42;
  }
}

describe("Deep Thought", () => {

  let deepThought;

  beforeEach(() => {
    deepThought = new DeepThought();
  });

  it("should know the answer to life, the universe and everything", () => {
    var answer = deepThought.getAlmightyAnswer();
    expect(answer).toBeGreaterThan(0);
  });
}); 