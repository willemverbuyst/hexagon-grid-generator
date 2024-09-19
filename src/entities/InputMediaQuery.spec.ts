import { beforeEach, describe, expect, it } from "vitest";
import { InputBase } from "./InputBase";
import { InputMediaQuery } from "./InputMediaQuery";

describe("InputMediaQuery", () => {
  let inputElement: HTMLInputElement;
  let inputMediaQuery: InputMediaQuery;

  beforeEach(() => {
    inputElement = document.createElement("input");
    inputMediaQuery = new InputMediaQuery(inputElement);
  });

  it("should create an instance of InputMediaQuery", () => {
    expect(inputMediaQuery).toBeInstanceOf(InputMediaQuery);
  });

  it("should initialize input with an instance of InputBase", () => {
    expect(inputMediaQuery.input).toBeInstanceOf(InputBase);
  });
});
