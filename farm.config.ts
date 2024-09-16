import { defineConfig } from '@farmfe/core';
import { readFileSync } from 'fs'

export default defineConfig({
  plugins: [
    '@farmfe/plugin-react',
    // {
    //   name: 'my-script-async',
    //   transformHtml: {
    //     order: 2,
    //     executor({ htmlResource }) {
    //       const htmlCode = Buffer.from(htmlResource).toString();

    //       const newHtmlCode = htmlCode.replace('<script src=./farm', '<script async src=./farm');
    //       const newBuf = Buffer.from(newHtmlCode);
    //       htmlResource.bytes = Array.from(newBuf);
    //       return htmlResource;
    //     }
    //   }
    // },
  ],
  compilation: {
    output: {
      targetEnv: 'browser-esnext',
      publicPath: './',
      assetsFilename: "assets/[resourceName].[ext]",
    },
    partialBundling: {
      targetConcurrentRequests: 1,
      enforceResources: [
        {
          name: "index",
          test: [".+"],
        },
      ],
    },
    runtime: {
      isolate: true,
    },
    sourcemap: false,
    comments: false,
    progress: false,
  },
});
