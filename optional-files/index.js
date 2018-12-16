'use strict';

/**
 * This function will be called after we
 * parsed all user input, we can basically
 * add dependencies needed by this optional
 * file.
 * 
 * @param {Object} context 
 */
module.exports.injectContext = function(context) {
    
    context.config.dependencies['caporal'] = '*';
    context.config.dependencies['update-notifier'] = '*';

    return context;
};
