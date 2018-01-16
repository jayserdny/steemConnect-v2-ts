/**
 * Types definition for sc2-sdk
 * 
 * @author Jayser Mendez
 * https://github.com/jayserdny
 * 
 */

declare module "sc2-sdk" {
    var steemconnect: SC2;
    export = steemconnect;
}

declare class SC2 {

    /**
     * Initialize a new instance of the SteemConnect V2 SDK.
     * @param {String} app: Name of the app in SteemConnect dashboard
     * @param {String} callbackURL: URL to be redirected to after login
     * @param {String} accessToken: If you already have an auth token, login with it
     * @param {Array<string>} scope: This is a list of operations the app will be able to access on the user's account.
     */
    Initialize(options: IntializeOptions): void;

    /**
     * Returns a URL that you can redirect the user to so that they may log in to your app through SC2
     * @param {String} state: Data that will be passed to the callbackURL for your app after the user has logged in.
     * @returns {String}
     */
    getLoginURL(state?: string): string;

    /**
     * Get details of the logged in user
     * @param callback: A function that is called once the vote is submitted and included in a block.
     */
    me(callback?:(err: any, res: any) => void): void;

    /**
     * Cast a vote on the specified post or comment from the current user:
     * @param {String} voter: The Steem username of the current user.
     * @param {String} author: The Steem username of the author of the post or comment.
     * @param {String} permlink: The link to the post or comment on which to vote.
     * @param {Number} weight: The weight of the vote. 10000 equale a 100% vote.
     * @param callback: A function that is called once the vote is submitted and included in a block.
     */
    vote(voter: string, author: string, permlink: string, weight: number, 
        callback?:(err: any, res: any) => void): void;

    /**
     * Post a comment on an existing post or comment from the current user:
     * @param {String} parentAuthor: The user you are replying to.
     * @param {String} parentPermlink: Permlink of the parent
     * @param {String} author: The Steem username of the author of the post or comment.
     * @param {String} permlink: The link to the post or comment on which to vote.
     * @param {String} title: Title of the comment
     * @param {String} body: Body of the comment
     * @param {Object} jsonMetadata 
     * @param callback: A function that is called once the vote is submitted and included in a block.
     */
    comment(parentAuthor: string, parentPermlink: string, author: string,
            permlink: string, title: string, body: string, jsonMetadata: Object,
            callback?:(err: any, res: any) => void): void;
    
    /**
     * Creates a URL to which your app can redirect the user to perform a signed transaction on the blockchain such as a transfer or delegation.
     * @param {String} action: Action to perform in the blockchain.
     * @param {hotSignOptions} options: Options of the amount, receiver, and memo.
     * @param {String} callbackUrl: Url to be redirected to after success.
     */
    sign(action: string, options: hotSignOptions, callbackUrl: string): string;
    
    /**
     * Log the current user out of your application by revoking the access token provided to your app for that user.
     * @param callback: A function that is called once the vote is submitted and included in a block.
     */
    revokeToken(callback?:(err: any, res: any) => void): void;

    /**
     * Set oauth2 access token if the user already have it.
     * @param {String} accessToken: Access token of the url attempting to log in
     */
    setAccessToken(accessToken: string): void;

    /**
     * Reblog (share) a post by any user.
     * @param {String} account: Account of the logged user
     * @param {String} author: Author of the post to reblog
     * @param {String} permlink: URL of the post
     * @param callback: A function that is called once the vote is submitted and included in a block.
     */
    reblog(account: string, author: string, permlink: string,
           callback?:(err: any, res: any) => void): void;

    /**
     * Due to the lack of information in the documentation
     * I cannot determine the datatype for some of the methods
     * below. Feel free to submit a pull request if you figure
     * it out.
     */

    /**
     * Cast a follow to an user
     * @param follower 
     * @param following 
     * @param callback: A function that is called once the vote is submitted and included in a block.
     */
    follow(follower: any, following: any, callback?:(err: any, res: any) => void): void;

    /**
     * Cast an unfollow to an user
     * @param unfollower 
     * @param unfollowing 
     * @param callback: A function that is called once the vote is submitted and included in a block.
     */
    unfollow(unfollower: any, unfollowing: any, callback?:(err: any, res: any) => void): void;

    /**
     * Method to ignore
     * @param follower 
     * @param following 
     * @param callback: A function that is called once the vote is submitted and included in a block.
     */
    ignore(follower: any, following: any, callback?:(err: any, res: any) => void): void;

    /**
     * Method to claim rewards in balance
     * @param account 
     * @param rewardSteem 
     * @param rewardSbd 
     * @param rewardVests 
     * @param callback: A function that is called once the vote is submitted and included in a block. 
     */
    claimRewardBalance(account: any, rewardSteem: any, rewardSbd: any, rewardVests: any,
                       callback?:(err: any, res: any) => void): void;

    /**
     * Method to update user metadata
     * @param metadata 
     * @param callback: A function that is called once the vote is submitted and included in a block. 
     */
    updateUserMetadata(metadata: any, callback?:(err: any, res: any) => void): void;
}

// INTERFACES

/** @hidden */
interface IntializeOptions {
    app: string;
    callbackURL: string;
    accessToken?: string;
    scope: Array<string>;
}

/** @hidden */
interface hotSignOptions {
    to: string;
    amount: string;
    memo?: string;
}