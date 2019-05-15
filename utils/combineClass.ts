const combineClass = (...names: string[]): string => {
  const prefix = 'spider-';
  const resultName = names.slice(0);
  resultName[0] = prefix + names[0];

  return resultName
    .filter(Boolean)
    .join(' ')
    .trim();
};

export default combineClass;
