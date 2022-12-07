function handler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message } = req.body;

        if(!email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            console.log( "Invalid input from the request!");
            res
            .status(422)
            .json({
                message: "Invalid input from the request!"
            });
        }

        const newMessage = {
            email,
            name,
            message
        };
        console.log(newMessage);

        res
        .status(201)
        .json({
            sentmessage: newMessage
        })

    } else {
        console.log( "Invalid request for contact");
        res
        .status(422)
        .json({
            message: "A POST request is required for contact",
        });
    }
}

export default handler;