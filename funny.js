exports.handler = function(context, event, callback) {
	let responseObject = {};
	funny = [ "Be thankful we're not getting all the government we're paying for.",
        "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
        "Most comedy is based on getting a laugh at somebody else's expense. And I find that that's just a form of bullying in a major way. So I want to be an example that you can be funny and be kind, and make people laugh without hurting somebody else's feelings.",
        "One advantage of talking to yourself is that you know at least somebody's listening.",
        "It's so funny how social media was just this fun thing, and now it's this monster that consumes so many millennial lives.",
        "I grew up in Europe, where the history comes from."
    ];
        
    var rand = funny[Math.floor(Math.random() * funny.length)];
	let message = "Ok, Your funny quote is " + rand;
	responseObject = {"actions": [
	    {"say": {"speech": message}}
	    ]};
	callback(null, responseObject);
};
