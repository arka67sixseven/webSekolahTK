/**
 * Flat config native. `eslint-config-next@16` sudah mengekspor array
 * flat config, jadi tidak perlu `FlatCompat` dari `@eslint/eslintrc`.
 *
 * Jalankan: npm run lint
 */
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "next-env.d.ts",
      "tsconfig.tsbuildinfo",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
