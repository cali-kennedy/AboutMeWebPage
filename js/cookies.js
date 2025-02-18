document.addEventListener("DOMContentLoaded", function () {
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function greetUser() {
        var user = getCookie("username");
        if (user) {
            alert("Welcome back, " + user + "!");
        } else {
            var name = prompt("Welcome! What's your name?");
            if (name) {
                alert("Hi " + name + ", thanks for checking out my résumé!");
                setCookie("username", name, 7);
            }
        }
    }

    greetUser();
});
