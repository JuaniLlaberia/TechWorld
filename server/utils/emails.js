const nodemailer = require('nodemailer');
const createWelcomeTemplate = require('../utils/emailTemplates/welcome');
const createResetTemplate = require('../utils/emailTemplates/resetPassword');
const createEmailConfirmTemplate = require('../utils/emailTemplates/confirmEmail');
const createJobApplicationTemplate = require('../utils/emailTemplates/jobApplication');

module.exports = class Email {
  constructor(user, url, file) {
    this.to = user.email;
    this.firstName = user.fullName?.split(' ')[0];
    this.url = url;
    this.file = file;
    this.from = 'Jobs-App <jobsapp@noreply.com>';
  }

  //Create transporter
  newTransporter() {
    if (process.env.NODE_ENV === 'development') {
      return nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth: {
          user: process.env.MAILTRAP_USERNAME,
          pass: process.env.MAILTRAP_PASSWORD,
        },
      });
    } else {
      return nodemailer.createTransport({
        host: process.env.BREVO_HOST,
        port: process.env.BREVO_PORT,
        auth: {
          user: process.env.BREVO_USERNAME,
          pass: process.env.BREVO_PASSWORD,
        },
      });
    }
  }

  //send email
  async sendEmail(subject, html) {
    //Define options
    const emailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      text: html,
      html: html,
      attachments: [
        {
          filename: `application.pdf`,
          content: this.file,
        },
      ],
    };

    //Send email
    await this.newTransporter().sendMail(emailOptions);
  }

  verifyAccount() {
    this.sendEmail('Confirm your email.', createEmailConfirmTemplate(this.url));
  }

  welcomeEmail() {
    this.sendEmail(
      'Welcome to the X Family!',
      createWelcomeTemplate(this.firstName, this.url)
    );
  }

  resetPasswordEmail() {
    this.sendEmail(
      'Reset your password (Valid for 10min.)',
      createResetTemplate(this.url)
    );
  }

  applyJobEmail(jobName, data) {
    this.sendEmail(
      `New job application for '${jobName}'`,
      createJobApplicationTemplate(jobName, data, this.url)
    );
  }
};
