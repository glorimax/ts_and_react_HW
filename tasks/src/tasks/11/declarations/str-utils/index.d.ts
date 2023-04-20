declare module 'str-utils' {
  type stringType = (input: string) => string;

  export const stringReverse: stringType;
  export const stringToLower: stringType;
  export const stringToUpper: stringType;
  export const stringRandomize: stringType;
  export const stringInvertCase: stringType;
}
