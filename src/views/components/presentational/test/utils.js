export const findByAttr = (component, tag) => {
  const wrapper = component.find(tag);
  return wrapper;
}