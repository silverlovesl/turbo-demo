export * from "./string.utils";
interface Animal {
  legs: number;
}
const cat: Animal = { legs: 4 };
export type feline = typeof cat;
