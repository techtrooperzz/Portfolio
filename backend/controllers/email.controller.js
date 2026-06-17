import { configDotenv } from "dotenv";
configDotenv();

import { sendEmail } from "../services/email.service.js";
import { htmlBodyTemplate, plainBodyTemplate } from "../templates/email.template.js";

export const sendWelcomeEmail = async (req, res) => {
  try {
    const { email, name, date, time } = req.body;
    console.log(email, name, date, time);

    // Validate required fields
    if (!email || !name || !date || !time) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields: email, name, date, time'
        });
    }

    const subject = `Appointment Request Received – Techtrooperzz`;

    // Plain-text fallback (used by clients that can't render HTML)
    const text = plainBodyTemplate(name, date, time);

    // Professional HTML version
    const html = htmlBodyTemplate(name, date, time);
    const mySubject = `New Appointment Request – Techtrooperzz`;

    const myText = `Hello Team,

A new appointment request has come in.

Name: ${name}
Email: ${email}
Date: ${date}
Time: ${time}

Please review and follow up to confirm with the client.

— Techtrooperzz System`;

    // Send email to client (text + styled html)
    await sendEmail(email, subject, text, html);

    // Send notification email to admin (plain text is fine internally)
    const adminEmail = process.env.SMTP_USER;
    if (!adminEmail) {
        console.warn('SMTP_USER environment variable not set');
    } else {
        await sendEmail(adminEmail, mySubject, myText);
    }

    res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({
        success: false,
        message: 'Failed to send email',
        error: error.message
        });
    }
};