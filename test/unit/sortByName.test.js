const sorting = require("../../app"); //импортируем путь до функции, на уровень выше

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Empty parameters should not be sorted", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  it("Sort the same names", () => {
    const input = [
      "Гарри Поттер",
      "ведьмак",
      "Ведьмак"
  ];
  const expected = [
    "ведьмак",
    "Ведьмак",
    "Гарри Поттер"
  ];
  const output = sorting.sortByName(input);
  expect(output).toEqual(expected);
  });
});
