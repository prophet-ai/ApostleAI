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
			"scei" : "scei",
			"icei" : "icie",
			"cie" : "cei",
			"qau" : "qua",
			"qeu" : "que"
		},

		c = "[^aeiou]",          // consonant
		v = "[aeiouy]",          // vowel
		C = c + "[^aeiouy]*",    // consonant sequence
		V = v + "[aeiou]*",      // vowel sequence

		mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
		meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
		mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
		s_v = "^(" + C + ")?" + v;                   // vowel in stem

		var stem,
			suffix,
			firstch,
			re,
			re2;

		// Text being the word 'meant' is a special case, as the rest of the code will assume it's a suffix
		if (text.length < 3 || text == "meant") { return text; }

		firstch = text.substr(0,1);
		if (firstch == "y") {
			text = firstch.toUpperCase() + text.substr(1);
		}

		// Fix some common spelling errors
		re = /^(.+?)(tion|ae|izor|meant|uor|or|scei|icei)$/;
		if (re.test(text)) {
			var fp = re.exec(text);
			stem = fp[1];
			suffix = fp[2];
			re = new RegExp(mgr0);
			if (re.test(stem)) {
				text = stem + commonErrorList[suffix];
			}
		}

		// and turn initial Y back to y

		if (firstch == "y") {
			text = firstch.toLowerCase() + text.substr(1);
		}

		return text;
	
};