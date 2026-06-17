import { configDotenv } from "dotenv";
configDotenv({ quiet: true });

import nodemailer from "nodemailer";

export const SMTPConfig = () => {
    return nodemailer.createTransport({
        pool: true,
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        html: true,
        family: 4
    });
};

export const sendEmail = async (
    to,
    subject,
    text,
    html
) => {
    const transporter =
        SMTPConfig();

    try {
        const response = await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to,
            subject,
            text,
            html
        });

        return response;

    } catch (error) {
        console.error(
            `Email failed for ${to}`,
            error
        );
        throw error;
    }
};