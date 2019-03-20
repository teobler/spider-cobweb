import { RequireContext } from '../types/customer';

const importAll = (requireContext: RequireContext) => requireContext.keys().forEach(requireContext);

try {
  importAll(require.context('../resources/icons', true, /\.svg$/));
} catch (error) {
  console.error(error);
}
