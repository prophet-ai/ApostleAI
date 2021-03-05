//This object will be used to save the chat across all relevant files.

// Variables used to save a chat log
var saveButton = document.getElementById("saveChat");
var chatLog = "ApostleAI Chat Log\n";

var textFile = null;
export function saveChatLog(text) {
    chatLog += "\n" + text;
    var data = new Blob([chatLog], { type: 'text/plain' });

    // Revoke previous URL
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // Changes href to new URL
    saveButton.href = textFile;
}
