import { formatAmount } from "./utils";

/**
 * "This is HttpClientFunction1
 * @param {string} param - A string param.
 * @type {string | boolean}
 * 
 * @returns A result string
 */
export const HttpClientFunction1 = (param: number): string => {
  console.log("This is HttpClientFunction1");
  return "As an individual function";
};

export class HttpClientClass {
  private field1: string;
  field2: number;
  constructor() {
    console.log("Init HttpClientClass");
    this.field1 = "Field value";
    this.field2 = 12300;
  }

  getValue(): string {
    const formattedValue = formatAmount(this.field2);
    return `${this.field1} - ${formattedValue}`;
  }
}
