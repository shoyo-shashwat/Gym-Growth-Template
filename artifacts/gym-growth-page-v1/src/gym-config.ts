/**
 * Which gym's demo gets built. One file per gym in ./gyms (verified facts only, see leads.csv).
 * vite.config.ts aliases @gym-data to ./gyms/<VITE_GYM>.ts, so only that gym ends up in the bundle.
 * Local:  VITE_GYM=fitness-yard pnpm dev
 * Vercel: set the env var VITE_GYM on that gym's project. Default is house-of-fitness.
 */
export type { IconKey } from './gym-types';
export { gym } from '@gym-data';
