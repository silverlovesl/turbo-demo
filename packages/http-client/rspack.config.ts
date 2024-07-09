import type { Configuration } from "@rspack/cli";
import { rspack } from "@rspack/core";

const config: Configuration = {
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js?|ts?)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};

export default config;
