export type FunctionVoidWithThis<T extends (...args: any[]) => any> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => void;

export type FunctionVoid = (...args: any[]) => void;
