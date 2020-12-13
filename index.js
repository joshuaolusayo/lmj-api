const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");
const transporter = require("./config");
const mongoose = require("mongoose");
const mailgun = require("mailgun-js")({ apiKey: `${process.env.mailgunApiKey}`, domain: `${process.env.mailgunDomain}` });

const express = require("express");
const app = express();

const buildPath = path.join(__dirname, "build");

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(buildPath)); // Serve any static files



// Send contact form to email
app.get("/send", (req, res) => {
	try {
		const mailOptions = {
			from: req.body.email,
			to: "contactolamiju@gmail.com",
			subject: req.body.subject,
			html: `
            <p>You have a new message</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Subject: ${req.body.subject}</li>
                <li>Message: ${req.body.message}</li>
            </ul>
            `,
		};

		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				res.status(500).send({
					success: false,
					message: "Something went wrong. Try again later",
				});
			} else {
				res.send({
					success: true,
					message: "Your message has been received. Thanks for contacting us.",
				});
			}
		});
	} catch (err) {
		res.status(500).send({
			success: false,
			message: "Could not send your message. Try again later",
		});
	}
});

// get susbscription list
app.get("/subscribe", (req, res) => {
	const { email } = req.body;
	let list = mailgun.lists(`${process.env.mailgunList}`);

	const newMember = {
		subscribed: true,
		address: email,
		upsert: "yes",
	};

	list.members().create(newMember, function (err, data) {
		if (err) {
			console.log("error");
			res.status(404).send({ subscribed: "Failed" });
		} else {
			res.sendStatus(200);
		}
	});
});

if (process.env.NODE_ENV === "production") {
	// Handle React routing, return all requests to React app
	app.get("*", function (req, res) {
		res.sendFile(path.join(buildPath, "index.html"));
	});
}

// mongodb set up
mongoose
	.connect(`${process.env.MONGODB_URI}`, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.log(err));

const blogPostSchema = new mongoose.Schema(
	{
		date: Date,
		tag: String,
		heading: String,
		image: String,
		quoteStart: String,
		quoteStartAuthor: String,
		quoteEnd: String,
		quoteEndAuthor: String,
		intro: String,
		section: Array,
	},
	{ collection: "articles" }
);

const article = mongoose.model("BlogPost", blogPostSchema);

app.get("/api", (req, res) => {
	article.find({}, (err, data) => {
		if (err) {
			console.log(err);
		}
		res.json(data);
	});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running"));
