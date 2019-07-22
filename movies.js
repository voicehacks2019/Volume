exports.handler = function(context, event, callback) {
	let responseObject = {};
	var movies = ["Frankly, my dear, I don't give a damn. Quote from Gone With the Wind, 1939",
        "Here's looking at you, kid. Quote from Casablanca, 1942",
        "You're gonna need a bigger boat. Quote from Jaws, 1975",
        "May the Force be with you. Quote from Star Wars, 1977",
        "Toto, I've a feeling we're not in Kansas anymore. Quote from The Wizard of Oz, 1939",
        "I'm going to make him an offer he can't refuse. Quote from The Godfather, 1972",
        "Of all the gin joints in all the towns in all the world, she walks into mine. Quote from Casablanca, 1942",
        "You talkin' to me? Quote from Taxi Driver, 1976",
        "There's no place like home. Quote from The Wizard of Oz, 1939",
        "The first rule of Fight Club is: You do not talk about Fight Club. Quote from Fight Club, 1999",
        "Luke, I am your father. Quote from Star Wars Episode V: The Empire Strikes Back, 1980",
        "Hello. My name is Inigo Montoya. You killed my father. Prepare to die. Quote from The Princess Bride, 1987",
        "Why so serious? Quote from The Dark Knight, 2008"
    ];
    
    var rand = movies[Math.floor(Math.random() * movies.length)];
	let message = "Ok, Your movie quote is " + rand;
	responseObject = {"actions": [
	    {"say": {"speech": message}}
	    ]};
	console.log("Working");
	callback(null, responseObject);

};
