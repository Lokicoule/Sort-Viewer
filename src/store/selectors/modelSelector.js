export const getModel = (name) => (state) => state.models[name];

export const getModelItems = (name) => (state) => state.models[name].items;
