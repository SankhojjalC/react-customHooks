let isFirstRender = true;
let prevDeps = null;

export const useCustomEffect = (cb, deps) => {
  if (isFirstRender) {
    isFirstRender = false;
    prevDeps = deps;
    const cleanup = cb();

    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }

  const hasDepsChanged = deps
    ? !prevDeps.every((dep, idx) => Object.is(dep, prevDeps[idx]))
    : true;

  if (hasDepsChanged) {
    prevDeps = deps;
    const cleanup = cb();

    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup();
    }
  }
};
