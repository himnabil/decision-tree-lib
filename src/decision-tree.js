exports.resolver;

exports.compute = function ( context  , branche ) {


    for (var node of branche){
        var attr = context ;
        if (  node.attr !== undefined ){

          if ([String , Number].indexOf(node.attr.constructor) >= 0)
            attr = context[ node.attr ];

            // if node.attr = [ "personne" , 2 , "name" ]
            //attr = context["personne"][2]["name"] or
            //attr = context.personne[2].name
          
          else if (node.attr.constructor === Array){
            for (var a of node.attr ){
              if ([String , Number].indexOf(a.constructor) >= 0)
                attr = attr[ a ];
            }
          }

        }

        var res = this.resolver.compute;
        if (node.resolver !== undefined ) res = this.resolver[node.resolver];
        if ( res ( attr , node.args ) ){
            if  ( node.category !== undefined ) return node.category;
            return this.compute(context , node.branche)
        }
    }
};
