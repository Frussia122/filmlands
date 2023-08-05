const nodemailer = require('nodemailer')

const SMTP_HOST = "smtp.gmail.com";
const SMPT_PORT = 587;
const SMPT_USER = "reelofilm@gmail.com";
const SMPT_PASSWORD = "wfmehdukpzvbemmm";
const API_URL = "https://perfect-earrings-fish.cyclic.app"
const CLIENT_URL = "http://localhost:3000"

class MailService {

    constructor(){
        this.transporter =  nodemailer.createTransport({
            host:SMTP_HOST,
            port:SMPT_PORT,
            secure:false,
            auth:{
                user:SMPT_USER,
                pass:SMPT_PASSWORD
            }
        })
    }

    async sendActivationMail(to , link){
        await this.transporter.sendMail({
            from: SMPT_USER,
            to,
            subject:"Активация аккаунта" + API_URL,
            text:'',
            html:
            `
            <div>
            <h1>Для активации аккаунта перейдите по ссылке</h1>
            <a href="${link}">${link}</a>
            </div>
            `
        })
    }

}

module.exports = new MailService();
