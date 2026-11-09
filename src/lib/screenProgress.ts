/**
 * The furthest screen a learner may jump to: everything up to and including
 * the first knowledge check they haven't passed yet, or every screen once
 * the module is complete.
 */
export function maxReachableScreen(hasCheck: boolean[], isPassed: (index: number) => boolean, moduleDone: boolean) {
  if (moduleDone) return hasCheck.length - 1
  const firstLocked = hasCheck.findIndex((check, i) => check && !isPassed(i))
  return firstLocked === -1 ? hasCheck.length - 1 : firstLocked
}
