import nodemailer from 'nodemailer'

const email = "rahul23.exam@gmail.com"
const pass = "xuyfcvfanpynqbhl"




const handler = async (req, res) => {
    console.log("requestd")
    if (req.method === "POST") {
        const data = req.body;
        // if (!data || !data.name || !data.email || !data.subject || !data.message) {
        //     return res.status(400).send({ message: "Bad request" });
        // }

        try {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: email, // generated ethereal user
                    pass // generated ethereal password
                },
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: `"Company Name" <${email}>`, // sender address
                to: "rahulc2303@gmail.com", // list of receivers
                subject: "OTP", // Subject line
                html: `
                <div>  
                   <div style="margin-top: 50px">
                    message:${data.message}
                  </div>
                </div>
    
                `,
            });

            return res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err.message });
        }
    }
    return res.status(400).json({ message: "Bad request" });
};
export default handler;