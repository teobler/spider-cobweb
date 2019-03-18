declare module '*.svg' {
  const content: any;
  export default content;
}

export interface RequireContext {
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
}

// from @types/webpack-env, declare it since it doesn't have export
declare namespace __WebpackModuleApi {
  interface RequireFunction {
    context(path: string, deep?: boolean, filter?: RegExp, mode?: "sync" | "eager" | "weak" | "lazy" | "lazy-once"): RequireContext;
    resolve(path: string): number | string;
  }
}

export interface NodeRequire extends __WebpackModuleApi.RequireFunction {
}

export declare var require: NodeRequire;
