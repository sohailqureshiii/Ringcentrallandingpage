import nodemailer from 'nodemailer'

const email = "rahul23.exam@gmail.com"
const pass = "xuyfcvfanpynqbhl"




const handler = async (req, res) => {
    console.log("requestd")
    if (req.method === "POST") {
        const data = req.body;
        const { fullName, bussinessEmail, phoneNumber, companyName } = data;
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
                to: "rahul23.exam@gmail.com", // list of receivers
                subject: "OTP", // Subject line
                html: `
                <div>
                <div style="margin-top: 50px">
                  Full Name:- ${fullName}
                </div>
                <div style="margin-top: 50px">
                  Bussiness Email:- ${bussinessEmail}
                </div>
                <div style="margin-top: 50px">
                  Phone Number:- ${phoneNumber}
                </div>
                <div style="margin-top: 50px">
                  Company Name:- ${companyName}
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