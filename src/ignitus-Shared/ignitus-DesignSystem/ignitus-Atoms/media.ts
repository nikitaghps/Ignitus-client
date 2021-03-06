export const breakpoints: number[] = [576, 768, 992, 1200];

export const minimumWidthQuery: string[] = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`,
);

export const maximumWidthQuery: string[] = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`,
);
