let state;

export const useCustomState = (initialState = null) => {
  state = state || initialState;
  function setState(updatedState) {
    state = updatedState;
  }
  return [state, setState];
};
