import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const { EMAIL_SERVICE, EMAIL_AUTH_TYPE, EMAIL_USER, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env

class Mail {
  #transporter = null

  constructor() {
    this.#transporter = this.#getTransporter()
  }

  #getTransporter() {
    return nodemailer.createTransport({
      service: EMAIL_SERVICE,
      auth: {
        type: EMAIL_AUTH_TYPE,
        user: EMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN
      }      
    })
  }

  async send(full_name, category, mark, email, message) {
    try {
      const info = await this.#transporter.sendMail({
        from: EMAIL_USER,
        to: EMAIL_USER,
        subject: `${category}`,
        text: message,
        html: `<p>${full_name}<p><i><b>feedback:</b><br/>${message}<br/></i><br/><b>e-mail: ${email}</b><br/><b>Mark:</b> ${mark}`
      });
      return info.messageId;
    } catch(e) {
      return e;
    }
  }

}

export default new Mail()