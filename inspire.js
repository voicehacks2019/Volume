exports.handler = function(context, event, callback) {
    let responseObject = {};
	var inspire = ["Nothing is impossible, the word itself says \“I’m possible\”! Quote by Audrey Hepburn", 
    	"Have the courage to follow your heart and intuition. They somehow know what you truly want to become. Quote by Steve Jobs", 
    	"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. Quote by Maya Angelou", 
    	"Act as if what you do makes a difference. It does. Quote by William James", 
    	"Whether you think you can or you think you can’t, you’re right. Quote by Henry Ford", 
    	"Creativity is contagious, pass it on. Quote by Albert Einstein", 
    	"If you do what you’ve always done, you’ll get what you’ve always gotten. Quote by Tony Robbins",
    	"The best revenge is massive success. Quote by Frank Sinatra", 
    	"I have not failed, I’ve just found 10,000 ways that won't work. Quote by Thomas Alva Edison",
    	"If my mind can CONCEIVE it, and my heart can BELIEVE it -- then I can ACHIEVE it. Quote by Muhammad Ali",
    	"Only those who will risk going too far can possibly find out how far one can go. Quote by T. S. Eliot ",
    	"Failure is success if we learn from it. Quote by Malcolm Forbes",
    	"Turn your wounds into wisdom. Quote by Oprah Winfrey",
    	"Success is only meaningful and enjoyable if it feels like your own. Quote by Michelle Obama",
    	"There are still many causes worth sacrificing for, so much history yet to be made. Quote by Michelle Obama",
    	"We can’t help everyone, but everyone can help someone. Quote by Ronald Reagan",
    	"You\'re on your own. And you know what you know. And you are the one who\'ll decide where to Go. Quote by Dr.Seuss",
    	"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. Quote by Helen Keller",
    	"Life is a daring adventure or it is nothing at all! Quote by Helen Keller",
    	"Great spirits have always encountered violent opposition from mediocre minds. Quote by Albert Einstein"
	];

	var rand = inspire[Math.floor(Math.random() * inspire.length)];
	let message = "Ok, Your inspirational quote is " + rand;
	responseObject = {"actions": [
	    {"say": {"speech": message}}
	    ]};
	callback(null, responseObject);
};
