// import "../transition/transition";
import "selection";

d3_selectionPrototype.transition = function() {
  var id = d3_transitionInheritId || ++d3_transitionId,
      m = this.length,
      subgroups = new Array(m),
      subgroup,
      group,
      node,
      transition = d3_transitionInherit || {time: Date.now(), ease: d3_ease_cubicInOut, delay: 0, duration: 250},
      j,
      i,
      n;

  for (var j = -1; ++j < m;) {
    subgroups[j] = subgroup = new Array(n = (group = this[j]).length);
    for (i = -1; ++i < n;) {
      if (node = group[i]) d3_transitionNode(node, i, id, transition);
      subgroup[i] = group[i];
    }
  }

  return d3_transition(subgroups, id);
};
