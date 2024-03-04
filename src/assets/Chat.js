
const API_KEY = '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';

async function getChat(prompt) {
    const res = await fetch('https://api.openai.com/v1/chat/completions' , {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body : JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ]
        })
    })
    return await res.json();
}

const chat = new Promise ((resolve, reject) => {
    resolve(getChat('What is the meaning of life?'));
}
)

chat
.then((data) => {
    console.log(data);
}
)
