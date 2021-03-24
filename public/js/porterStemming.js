//  Adapted from the Porter Stemmer Javascript code available at tartarus.org/martin/PorterStemmer/ by "andargor"
//  which is based on the algorithm by Porter, 1980, An algorithm for suffix stripping, Program, Vol. 14,
//  no. 3, pp 130-137

// Use import * as PorterStemmer from "/js/porterStemming.js";

export function textInput(sentenceIn) {
    var words = sentenceIn.match(/\b(\w+)\b/g);
    var sentenceOut = "";
    var question = sentenceIn.endsWith("?");
    var exclamation = sentenceIn.endsWith("!");
	console.log(sentenceIn);
    for (var i = 0; i < words.length; i++){
        sentenceOut += stemmer(words[i]);
        if (i+1 != words.length)
            sentenceOut += " ";
        else if (i+1 == words.length && question)
            sentenceOut += "?";
        else if (i+1 == words.length && exclamation)
            sentenceOut += "!";
        else
            sentenceOut += ".";
    }
	console.log(sentenceOut);
    return sentenceOut;
}

function stemmer(text) {
	var commonErrorList = {
			"toin" : "tion",
			"ae" : "ea",
			"izor" : "izer",
			"meant" : "ment",
			"uor" : "our",
			"or" : "our",
			"scei" : "scie",
			"icei" : "icie",
			"cie" : "cei",
			"qau" : "qua",
			"qeu" : "que",
			"ign" : "ing"
		},

		c = "[^aeiou]",          // consonant
		v = "[aeiouy]",          // vowel
		C = c + "[^aeiouy]*",    // consonant sequence
		V = v + "[aeiou]*",      // vowel sequence

		mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
		meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
		mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
		s_v = "^(" + C + ")?" + v;                   // vowel in stem

		var firstch,
			re,
			re2,
			re3;

		// Text being the word 'meant' is a special case, as the rest of the code will assume it's a suffix
		if (text.length < 3 || text == "meant") { return text; }

		//Check each word a couple times in case of multiple errors
		for (i=0; i<3; i++){

		firstch = text.substr(0,1);
		if (firstch == "y") {
			text = firstch.toUpperCase() + text.substr(1);
		}

		// Fix some common spelling errors
		re = /tion|ae|izor|meant|uor|or|scei|icei|qau|qeu|ign|toin/;
		//re = /scei/;
		re2 = /scie|icie/;
		re3 = /cie/;
		if (re.test(text)) {
			console.log("This is a test");
			var fp = re.exec(text);
			text = text.replace(fp[0], commonErrorList[fp[0]]);
			// Ensure a 'cie' case is actually an error
		} else if (re2.test(text)) {
			// Nothing needs to be replaced in this case, just ensures we don't replace something fine
		}
		else if (re3.test(text)){
			var fp = re3.exec(text);
			text = text.replace(fp[0], commonErrorList[fp[0]]);
		}

		// and turn initial Y back to y

		if (firstch == "y") {
			text = firstch.toLowerCase() + text.substr(1);
		}
	}

		return text;
	
};