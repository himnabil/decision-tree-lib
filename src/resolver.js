exports.compare = function( attr , arg ){
    
    var result = true;
    if ( 'eq' in arg )
        return attr == arg.eq;
    
    if ( 'gt_eq' in arg)
        result = result && attr >= arg.gt_eq;
    else if ( 'gt' in arg)
        result = result && attr > arg.gt;
    
    if ( 'lt_eq' in arg)
        result = result && attr <= arg.lt_eq;
    else if ( 'lt' in arg)
        result = result && attr < arg.lt;
    
    return result ;
}