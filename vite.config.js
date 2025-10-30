// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => {
//   const isDev = mode !== "production";

//   base: '/composition_of_components/'
//   return {
//     plugins: [
//       react({
//         babel: {
//           plugins: isDev ? ["check-prop-types"] : [],
//         },
//       }),
//     ],
//   };
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isDev = mode !== 'production';

  const basePath = isDev ? '/' : '/composition_of_components/';

  return {
    base: basePath,
    plugins: [
      react({
        babel: {
          plugins: isDev ? ['check-prop-types'] : [],
        },
      }),
    ],
  };
});
