let sendButton = document.getElementById("js_send");
let alertMessage = document.getElementById("alert-msg");

// js_onSuccess(); //For testing.
// js_onError(); //For testing.

//update this with your js_form selector
let form_id_js = "javascript_form";
let js_form = document.getElementById("javascript_form");

let data_js = {
    "access_token": "aw4g9rbsymkk9fikpgx9vtoi"
};

function js_onSuccess() {  // Email message has sent. Change styles on page to reflect outcome.
    sendButton.innerText='Sent!';
    alertMessage.classList = '';
    alertMessage.classList.add("success-msg");
    alertMessage.innerHTML = "Your message has been sent.";
}

function js_onError(error) {  // Email message has failed to send. Change styles on page to reflect outcome.
    sendButton.innerText='Error!';
    alertMessage.classList = '';
    alertMessage.classList.add("error-msg");
    alertMessage.innerHTML = "Error with service; please email directly.";
}

function js_send() {  // User has clicked send email button.
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
    };

    let fname = document.querySelector("#" + form_id_js + " [name='fname']").value;
    let reply_to = document.querySelector("#" + form_id_js + " [name='reply_to']").value;
    let subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    let text = document.querySelector("#" + form_id_js + " [name='text']").value;

    if (fname && reply_to && subject && text) {  // Only try to send a message if user has entered all 4 values.
        sendButton.innerText='Sending…';
        sendButton.classList.remove("primary");
        sendButton.classList.add("disable");
        sendButton.disabled=true;

        // data_js['fname'] = fname;
        // data_js['reply_to'] = reply_to;
        data_js['subject'] = `You have a new message from your Portfolio: ${subject}`;
        data_js['text'] = `You have a new message from your Portfolio! \n\n Subject: ${subject} \n Email: ${reply_to} \n Text: ${text} \n Sender: ${fname}`;
        let params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);
    } else {  // User has not entered all 4 values.
        alertMessage.classList.add("error-msg");
        alertMessage.innerHTML = "Please fill out form completely.";
    }

    return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
    let form_data = [];
    for ( let key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});