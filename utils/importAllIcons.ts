import { RequireContext, require } from '../types/customer';

const importAll = (requireContext: RequireContext) => requireContext.keys().forEach(requireContext);
const fileType = new RegExp(/\.svg$/);

try {
  importAll(require.context('../resources/icons', true, fileType));
} catch (error) {
  console.error(error);
}
