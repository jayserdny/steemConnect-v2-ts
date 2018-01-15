

import * as sc2 from 'sc2-sdk';

// Initialize a new instance of SteemConnect
let steemit = new sc2.Initialize({
    app: 'name of the app', // replace this with the name of your app
    callbackURL: 'http://localhost:8100', // Url just for testing
    accessToken: '',
    scope: ['login', 'vote', 'comment', 'comment_delete', 
            'comment_options', 'custom_json'],
});
    
/**
 * TEST AREA:
 * 
 * Try to access any of the method using sc2 instead of steemit.
 * It will autocomplete the methods and will check for types error.
 * 
 */