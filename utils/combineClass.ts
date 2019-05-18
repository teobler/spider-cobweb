import { CLASS_PREFIX } from '../components/constants';

const combineClass = (...names: string[]): string => {
  const resultName = names.slice(0);
  resultName[0] = CLASS_PREFIX + names[0];

  return resultName
    .filter(Boolean)
    .join(' ')
    .trim();
};

export default combineClass;
