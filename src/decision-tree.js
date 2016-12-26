exports.resolver; 

exports.compute = function ( context  , branche ) {
    
    
    for (var node of branche){
        var attr = context ;
        if ( 'attr' in node ) attr = context[ node.attr ];
        var res = this.resolver[node.resolver];
        if ( res ( attr , node.args ) ){
            if  ( node.category ) return node.category;
            return this.compute(context , node.branche)
        }
    }
};
