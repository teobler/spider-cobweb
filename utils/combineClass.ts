const combineClass = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
};

export default combineClass;
