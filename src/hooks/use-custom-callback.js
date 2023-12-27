let dummyDeps = null;

export const useCustomCallback = (cb, deps) => {
  if (!dummyDeps) {
    dummyDeps = deps;
    return cb;
  } else {
    const hasDepsChanged = deps
      ? !dummyDeps.every((dep, idx) => Object.is(dep, dummyDeps[idx]))
      : true;

    if (hasDepsChanged) {
      dummyDeps = deps;
    }
    return cb;
  }
};
