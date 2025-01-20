import { createResolver } from 'nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  imports: {
    autoImport: true,
    dirs: [resolve('../../../composables/**'), resolve('../../../utils/**')],
  },
  components: [
    {
      path: resolve('../../../components'),
      pathPrefix: false,
    },
  ],
  alias: {
    '@': resolve('../../../'),
  },
});
