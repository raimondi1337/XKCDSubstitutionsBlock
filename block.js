export default (request) => {
    var words;
    var leadingCapitals = [];
    var trailingPeriods = [];

    deconstructString();
    translateString();
    reconstructString();

    request.message.text = words;
    return request.ok(); // Return a promise when you're done 

    //function
    function deconstructString() {
        //split
        words = request.message.text.split(' ');

        for (var i = 0, len = words.length; i < len; i++) {
            //mark capitals
            if (words[i].charAt(0) == words[i].charAt(0).toUpperCase()) {
                leadingCapitals.push(1);
                //strip capitals
                words[i] = words[i].toLowerCase();
            } else {
                leadingCapitals.push(0);
            }

            //mark periods
            if (words[i].charAt(words[i].length - 1) == '.') {
                trailingPeriods.push(1);
                //strip periods
                words[i] = words[i].slice(0, -1);
            } else {
                trailingPeriods.push(0);
            }
        }
    }

    function translateString() {
        //replace words
        for (var i = 0, len = words.length; i < len; i++) {
            switch (words[i]) {
                case 'witness':
                    words[i] = "this dude I know";
                    break;
                case 'witnesses':
                    words[i] = "these dudes I know";
                    break;
                case 'allegedly':
                    words[i] = "kinda probably";
                    break;
                case 'new study':
                    words[i] = "Tumblr post";
                    break;
                case 'rebuild':
                    words[i] = "avenge";
                    break;
                case 'rebuilt':
                    words[i] = "avenged";
                    break;
                case 'space':
                    words[i] = "spaaace";
                    break;
                case 'google':
                    if (words[i + 1] = 'glass') {
                        words[i] = 'virtual';
                        words[i + 1] = 'boy';
                    }
                    break;
                case 'smartphone':
                    words[i] = "Pokédex";
                    break;
                case 'smartphones':
                    words[i] = "Pokédexes";
                    break;
                case 'electric':
                    words[i] = "atomic";
                    break;
                case 'electronic':
                    words[i] = "atomic";
                    break;
                case 'electronics':
                    words[i] = "atomics";
                    break;
                case 'senator':
                    words[i] = "Elf-Lord";
                    break;
                case 'senators':
                    words[i] = "Elf-Lords";
                    break;
                case 'car':
                    words[i] = "cat";
                    break;
                case 'cars':
                    words[i] = "cats";
                    break;
                case 'election':
                    words[i] = "eating contest";
                    break;
                    break;
                case 'congressional':
                    if (words[i + 1] == "leaders") {
                        words[i] = "river";
                        words[i + 1] = "spirits";
                    }
                    break;
                case 'homeland':
                    if (words[i + 1] = 'security') {
                        words[i] = 'Homestar';
                        words[i + 1] = 'Runner';
                    }
                    break;
                case 'could':
                    if (words[i + 1] == 'not' && words[i + 2] == 'be' && words[i + 3] == 'reached' && words[i + 4] == 'for' && words[i + 5] == 'comment') {
                        words[i] = 'is';
                        words[i + 1] = 'guilty';
                        words[i + 2] = 'and';
                        words[i + 3] = 'everyone';
                        words[i + 4] = 'knows';
                        words[i + 5] = 'it';
                    }
                    break;
                default:
                    break;
            }
        }
    }

    function reconstructString(str) {
        for (var i = 0, len = words.length; i < len; i++) {
            //replace capitals
            if (leadingCapitals[i]) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
            }
            //replace periods

            if (trailingPeriods[i]) {
                words[i] = words[i] + '.';
            }
        }

        //join
        words = request.message.text = words.join(' ');

    }
}
