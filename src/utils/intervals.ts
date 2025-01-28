export type Intervals = 'W' | 'D' | '240' | '180' | '120' | '60' | '30' | '15' | '10' | '5' | '3' | '1';

export const VALID_INTERVALS: Intervals[] = ['W', 'D', '240', '180', '120', '60', '30', '15', '10', '5', '3', '1'];

export const validateInterval = (interval: string | null): Intervals => {
  if (!interval) return 'D';
  return VALID_INTERVALS.includes(interval as Intervals) ? interval as Intervals : 'D';
};