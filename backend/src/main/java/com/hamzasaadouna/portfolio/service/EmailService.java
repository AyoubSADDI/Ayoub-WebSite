package com.hamzasaadouna.portfolio.service;

import com.hamzasaadouna.portfolio.dto.ContactRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${portfolio.contact.recipient-email:saadouna.hamzaaa@gmail.com}")
    private String recipientEmail;

    @Value("${spring.mail.username}")
    private String senderEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(ContactRequest request) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(senderEmail);
        helper.setTo(recipientEmail);
        helper.setReplyTo(request.getEmail());
        helper.setSubject("🌐 New Portfolio Contact: " + request.getSubject());
        helper.setText(buildEmailBody(request), true);

        mailSender.send(message);
    }

    private String buildEmailBody(ContactRequest request) {
        return """
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #1a56db, #7c3aed); padding: 32px; text-align: center; }
                .header h1 { color: white; margin: 0; font-size: 22px; }
                .header p { color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px; }
                .body { padding: 32px; }
                .field { margin-bottom: 20px; }
                .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #6b7280; margin-bottom: 6px; }
                .field-value { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 15px; line-height: 1.6; }
                .message-value { white-space: pre-wrap; min-height: 80px; }
                .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 20px 32px; text-align: center; }
                .footer p { color: #9ca3af; font-size: 12px; margin: 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>📬 New Contact Message</h1>
                  <p>From your portfolio website</p>
                </div>
                <div class="body">
                  <div class="field">
                    <div class="field-label">👤 Full Name</div>
                    <div class="field-value">%s</div>
                  </div>
                  <div class="field">
                    <div class="field-label">📧 Email Address</div>
                    <div class="field-value">%s</div>
                  </div>
                  <div class="field">
                    <div class="field-label">📌 Subject</div>
                    <div class="field-value">%s</div>
                  </div>
                  <div class="field">
                    <div class="field-label">💬 Message</div>
                    <div class="field-value message-value">%s</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This message was sent from <strong>hamzasaadouna.dev</strong> portfolio contact form</p>
                </div>
              </div>
            </body>
            </html>
            """.formatted(
                escapeHtml(request.getName()),
                escapeHtml(request.getEmail()),
                escapeHtml(request.getSubject()),
                escapeHtml(request.getMessage())
            );
    }

    private String escapeHtml(String text) {
        if (text == null) return "";
        return text
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("\"", "&quot;")
            .replace("'", "&#39;");
    }
}
