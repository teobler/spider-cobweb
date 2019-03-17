const combineClass = (...names: (string | undefined)[]) => {
  const prefix: string = 'spider-';
  names[0] = prefix + names[0];

  return names.filter(Boolean).join(' ').trim();
};

export default combineClass;
