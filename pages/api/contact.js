import { MongoClient }  from 'mongodb';
 
async function handler(req, res) {
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

        let mongoClient;
        console.log(mongodbConnectString);
        try {
            mongoClient = await MongoClient.connect(mongodbConnectString);
        } catch(error){
            console.log(error);
            res.status(500).json({
                message: 'Can not connect to the database!'
            });
            return;
        }

        const db = mongoClient.db(process.env.mongodb_database);
        try {
            const result = db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Can insert data to the database!'
            });
            return;
        }

        res.status(201).json({
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