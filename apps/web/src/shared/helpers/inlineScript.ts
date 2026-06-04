export const inlineScript = (fn: () => void) => `(${fn.toString()})()`;
