let memoizedVal = null;
let prevDeps = null;

export const useCustomMemo = (cb, deps) => {
  if (!prevDeps) {
    prevDeps = deps;
    memoizedVal = cb();
  } else {
    const hasDepsChanged = deps
      ? !prevDeps.every((dep, idx) => Object.is(dep, prevDeps[idx]))
      : true;

    if (hasDepsChanged) {
      prevDeps = deps;
      memoizedVal = cb();
    }
  }

  return memoizedVal;
};
