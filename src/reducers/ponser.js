const ponsers = (state = [], action) => {
  switch (action.type) {
    case "LOAD_PONSERS":
      return action.ponsers;
    default:
      return state;
  }
};
export default ponsers;
