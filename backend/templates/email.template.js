export const plainBodyTemplate = (name, date, time) => {
    return `Dear ${name},

Thank you for reaching out to Techtrooperzz and requesting an appointment.

We have received your request for the following:

Date: ${date}
Time: ${time}

Our team will check this against our schedule and get back to you shortly to confirm the date and time.

Note: This is an automated message confirming that your request has been received — it is not yet a confirmed appointment.

If you have any questions in the meantime, feel free to reply to this email.

Warm regards,
Techtrooperzz Team`;
}

export const htmlBodyTemplate = (name, date, time) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <body style="margin:0; padding:0; background-color:#f4f5f7; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7; padding:32px 0;">
            <tr>
                <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        
                    <!-- Header -->
                    <tr>
                    <td style="background-color:#111827; padding:24px 32px;">
                        <span style="color:#ffffff; font-size:20px; font-weight:600; letter-spacing:0.3px;">
                        Techtrooperzz
                        </span>
                    </td>
                    </tr>
        
                    <!-- Body -->
                    <tr>
                    <td style="padding:32px;">
                        <p style="margin:0 0 16px; font-size:16px; color:#111827;">
                        Hi ${name},
                        </p>
        
                        <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:#374151;">
                        Thanks for requesting an appointment with Techtrooperzz. We've received your request and our team is reviewing it now.
                        </p>
        
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; margin:8px 0 20px;">
                        <tr>
                            <td style="padding:16px 20px;">
                            <p style="margin:0 0 8px; font-size:14px; color:#6b7280;">Requested Date</p>
                            <p style="margin:0 0 16px; font-size:16px; font-weight:600; color:#111827;">${date}</p>
                            <p style="margin:0 0 8px; font-size:14px; color:#6b7280;">Requested Time</p>
                            <p style="margin:0; font-size:16px; font-weight:600; color:#111827;">${time}</p>
                            </td>
                        </tr>
                        </table>
        
                        <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:#374151;">
                        We'll check this against our team's availability and follow up shortly to confirm — or suggest an alternative slot if needed.
                        </p>
        
                        <p style="margin:0 0 16px; font-size:13px; line-height:1.5; color:#9ca3af; font-style:italic;">
                        Note: This is an automated message confirming we've received your request. It does not yet confirm the appointment time.
                        </p>
        
                        <p style="margin:24px 0 0; font-size:15px; color:#374151;">
                        Warm regards,<br/>
                        <strong>Techtrooperzz Team</strong>
                        </p>
                    </td>
                    </tr>
        
                    <!-- Footer -->
                    <tr>
                    <td style="background-color:#f9fafb; padding:16px 32px; border-top:1px solid #e5e7eb;">
                        <p style="margin:0; font-size:12px; color:#9ca3af;">
                        This is an automated email. If you have questions, just reply — a real person will see it.
                        </p>
                    </td>
                    </tr>
        
                </table>
                </td>
            </tr>
            </table>
        </body>
        </html>`;
    
}