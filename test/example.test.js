
import Example from "../src/example";

describe('Example Class Definition', function () {

  let example = new Example();

  it('Should have defined a exampleVariable member', function () {
    expect(example.exampleVariable).toBeDefined();
  });
  it('Should have a exampleVariable getter', function () {
    expect(example.getExampleVariable()).toEqual(example.exampleVariable);
  });
});
