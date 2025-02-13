// js/script.js

function showIntroduction() {
    const name = "Cali Kennedy";
    const profession = "Aspiring Systems Engineer / Analyst";
    const current_position = "Senior Computer Science major and Delivery Analyst Intern at Acxiom";
    const graduation = "May 2025";
    const hobbies = ["coding", "learning about system infrastructure", "creating fun projects with JavaScript"];
    const bio = `Hi, my name is ${name}. I am an ${profession}. I am currently a ${current_position}. I graduate in ${graduation}! My hobbies include ${hobbies.join(", ")}.`;
    document.getElementById("introduction").innerText = bio;
}

  async function subscribeNewsletter() {
            const email = document.getElementById('emailInput').value;
            const message = document.getElementById('subscribeMessage');

            if (email && email.includes('@')) {
                message.textContent = `Thank you for subscribing with ${email}!`;

                // Send subscription email (requires server-side implementation)

                await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // enter your brevo api key here
                        'api-key': ''
                    },
                    body: JSON.stringify({
                        // enter your email here
                        sender: { name: "Cali Kennedy", email: "" },
                        to: [{ email: email }],
                        subject: 'Cali Kennedys NewsLetter Subscription Confirmation',
                        htmlContent: `<p>Thank you for subscribing to Cali Kennedy's Newsletter!</p>`
                    })
                });
            } else {
                message.textContent = 'Please enter a valid email address.';
                message.style.color = 'red';
            }
        }

        async function unsubscribeNewsletter(event) {
            event.preventDefault();
            const email = document.getElementById('emailInput').value;
            const message = document.getElementById('unsubscribeMessage');

            if (email && email.includes('@')) {
                message.textContent = `You have successfully unsubscribed from the newsletter.`;

                await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // enter your brevo api key here
                        'api-key': ''
                    },
                    body: JSON.stringify({
                        // enter your email here
                        sender: { name: "Cali Kennedy", email: "" },
                        to: [{ email: email }],
                        subject: 'Cali Kennedys NewsLetter Unsubscription Confirmation',
                        htmlContent: `<p>We're sorry to see you go! Rejoin any time! </p>`
                    })
                });

            } else {
                message.textContent = 'Please enter a valid email address to unsubscribe.';
                message.style.color = 'red';
            }
        }


