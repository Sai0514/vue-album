const addClass = (el, className) => {
  const arr = el.className.split(' ');
  if (arr.includes(className)) return;
  arr.push(className);
  // eslint-disable-next-line
  el.className = arr.join(' ');
};
const removeClass = (el, className) => {
  let arr = el.className.split(' ');
  if (!arr.includes(className)) return;
  arr = arr.filter(c => c !== className);
  // eslint-disable-next-line
  el.className = arr.join(' ');
};
const install = Vue => {
  Vue.directive('nodata', (el, { value }) => {
    if (value) {
      addClass(el, 'nodata');
    } else {
      removeClass(el, 'nodata');
    }
  });
};
export default { install };
