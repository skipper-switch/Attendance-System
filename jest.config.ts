// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest.js';
const createJestConfig = nextJest({ dir: './' });
const config: Config = {
testEnvironment: 'jest-environment-jsdom',
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
// Coverage — scope defined by exclusions, not inclusions.
// Every file in lib/ is included automatically.
// New files added to lib/utils/ or lib/ are covered without config changes.
collectCoverageFrom: [
'src/lib/**/*.ts', // everything in lib/ — current and future files
'!src/lib/api/**', // excluded — axios calls, E2E covers these
'!src/lib/hooks/**', // excluded — TanStack Query hooks, needs React context
'!src/lib/**/*.d.ts', // excluded — TypeScript declaration files
],
coverageThreshold: {
global: {
lines: 70, // 70% of lines must be executed by tests
functions: 70, // 70% of functions must be called by tests
branches: 60, // 60% of if/else branches must be reached
},
},
};
export default createJestConfig(config);