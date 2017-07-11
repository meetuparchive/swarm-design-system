/**
	* Sorter function stolen from Metalsmith team: https://gist.github.com/lambtron/c8945d3abd11c783eb67
	*
	* Generate a custom sort method for given starting `order`. After the given
	* order, it will ignore casing and put periods last. So for example a call of:
	*
	*   sorter('Web');
	*
	* That is passed:
	*
	*   - Android
	*   - iOS
	*   - Web
	*
	* Would guarantee that 'Web' ends up first, with the casing in 'iOS'
	* ignored so that it falls in the normal alphabetical order.
	*
	* @param {Array} order
	* @return {Function}
	*/

const sorter = (order) => {
  order = order || [];

  return (one, two) => {
    let a = one.sidebar || one.title;
    let b = two.sidebar || two.title;

    if (!a && !b) return 0;
    if (!a) return 1;
    if (!b) return -1;

    const i = order.indexOf(a);
    const j = order.indexOf(b);

    if (~i && ~j) {
      if (i < j) return -1;
      if (j < i) return 1;
      return 0;
    }

    if (~i) return -1;
    if (~j) return 1;

    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a[0] === '.') return 1;
    if (b[0] === '.') return -1;
    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  };
}

export default sorter;