
var default_resolver  = require('./src/resolver.js');
var _dtree  = require('./src/decision-tree.js');


exports.compute = function ( context  , tree , resolver ) {
  _dtree.resolver = default_resolver;
  if (resolver){
    for (resname in resolver )
    _dtree.resolver [resname] = resolver[resname]
  }
  return _dtree.compute(context , tree );
};
