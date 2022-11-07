export const validateJson = function(json: any, requiredProps: string[], requiredTypes: string[]): void | never {
  requiredProps.forEach((prop, idx) => {
    if ( typeof(json[prop]) !== requiredTypes[idx] ) {
      throw TypeError(`JSON data is missing property "${prop}" of type ${requiredTypes[idx]}.`);
    }
  });
};
