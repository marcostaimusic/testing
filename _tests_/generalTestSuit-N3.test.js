const { getEmpleado, getSalario } = require("../app/AS-AW_N1_ex1_intent2");

const myMock = jest.fn();

myMock.mockReturnValueOnce(1).mockReturnValueOnce({
  id: 1,
  salary: 4000,
});

//getEmpleado tests, Async / Await Nivell 1 - Exercici 1 && Promises & Callbacks Nivell 2 - Exercici

describe("getEmpleado", () => {
  test("passing an object id equals object", () => {
    return getEmpleado(myMock()).then((data) => {
      expect(typeof data).toBe("object");
    });
  });

  test("passing an object to getSalario equals a number", () => {
    return getSalario(myMock()).then((data) => {
      expect(typeof data).toBe("number");
    });
  });
});
