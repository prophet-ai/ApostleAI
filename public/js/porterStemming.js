//  Adapted from the Porter Stemmer Javascript code available at tartarus.org/martin/PorterStemmer/ by "andargor"
//  which is based on the algorithm by Porter, 1980, An algorithm for suffix stripping, Program, Vol. 14,
//  no. 3, pp 130-137

export function textInput(sentenceIn) {
    var words = sentenceIn.match(/\b(\w+)\b/g);
    var sentenceOut = "";
    var question = sentenceIn.endsWith("?");
    for (i = 0; i < words.length; i++){
        sentenceOut += stemmer(words[i]);
        if (i+1 != words.length)
            sentenceOut += " ";
        if (i+1 == words.length && question)
            sentenceOut += "?";
        else
            sentenceOut += ".";
    }
    return sentenceOut;
}

function stemmer(text) {
	var step2list = {
			"ational" : "ate",
			"tional" : "tion",
			"enci" : "ence",
			"anci" : "ance",
			"izer" : "ize",
			"bli" : "ble",
			"alli" : "al",
			"entli" : "ent",
			"eli" : "e",
			"ousli" : "ous",
			"ization" : "ize",
			"ation" : "ate",
			"ator" : "ate",
			"alism" : "al",
			"iveness" : "ive",
			"fulness" : "ful",
			"ousness" : "ous",
			"aliti" : "al",
			"iviti" : "ive",
			"biliti" : "ble",
			"logi" : "log"
		},

		step3list = {
			"icate" : "ic",
			"ative" : "",
			"alize" : "al",
			"iciti" : "ic",
			"ical" : "ic",
			"ful" : "",
			"ness" : ""
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
			re2,
			re3,
			re4;

		if (text.length < 3) { return text; }

		firstch = text.substr(0,1);
		if (firstch == "y") {
			text = firstch.toUpperCase() + w.substr(1);
		}

		// Step 1a
		re = /^(.+?)(ss|i)es$/;
		re2 = /^(.+?)([^s])s$/;

		if (re.test(text)) { text = text.replace(re,"$1$2"); }
		else if (re2.test(text)) {	text = text.replace(re2,"$1$2"); }

		// Step 1b
		re = /^(.+?)eed$/;
		re2 = /^(.+?)(ed|ing)$/;
		if (re.test(text)) {
			var fp = re.exec(text);
			re = new RegExp(mgr0);
			if (re.test(fp[1])) {
				re = /.$/;
				text = text.replace(re,"");
			}
		} else if (re2.test(text)) {
			var fp = re2.exec(text);
			stem = fp[1];
			re2 = new RegExp(s_v);
			if (re2.test(stem)) {
				text = stem;
				re2 = /(at|bl|iz)$/;
				re3 = new RegExp("([^aeiouylsz])\\1$");
				re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
				if (re2.test(text)) {	text = text + "e"; }
				else if (re3.test(text)) { re = /.$/; text = text.replace(re,""); }
				else if (re4.test(text)) { text = text + "e"; }
			}
		}

		// Step 1c
		re = /^(.+?)y$/;
		if (re.test(text)) {
			var fp = re.exec(text);
			stem = fp[1];
			re = new RegExp(s_v);
			if (re.test(stem)) { text = stem + "i"; }
		}

		// Step 2
		re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
		if (re.test(text)) {
			var fp = re.exec(text);
			stem = fp[1];
			suffix = fp[2];
			re = new RegExp(mgr0);
			if (re.test(stem)) {
				text = stem + step2list[suffix];
			}
		}

		// Step 3
		re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
		if (re.test(text)) {
			var fp = re.exec(text);
			stem = fp[1];
			suffix = fp[2];
			re = new RegExp(mgr0);
			if (re.test(stem)) {
				text = stem + step3list[suffix];
			}
		}

		// Step 4
		re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
		re2 = /^(.+?)(s|t)(ion)$/;
		if (re.test(text)) {
			var fp = re.exec(text);
			stem = fp[1];
			re = new RegExp(mgr1);
			if (re.test(stem)) {
				text = stem;
			}
		} else if (re2.test(text)) {
			var fp = re2.exec(text);
			stem = fp[1] + fp[2];
			re2 = new RegExp(mgr1);
			if (re2.test(stem)) {
				text = stem;
			}
		}

		// Step 5
		re = /^(.+?)e$/;
		if (re.test(text)) {
			var fp = re.exec(text);
			stem = fp[1];
			re = new RegExp(mgr1);
			re2 = new RegExp(meq1);
			re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
			if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
				text = stem;
			}
		}

		re = /ll$/;
		re2 = new RegExp(mgr1);
		if (re.test(text) && re2.test(text)) {
			re = /.$/;
			text = text.replace(re,"");
		}

		// and turn initial Y back to y

		if (firstch == "y") {
			text = firstch.toLowerCase() + w.substr(1);
		}

		return text;
	
};