import { Navigationbar } from "@/Components/Navbar/navigationbar";
import React, { useState } from "react";
import localFont from "next/font/local";
import styles from "../app/globals.css";
import LeftImg from "../public/ringcentral-webinar-banner-png-rendition.webp";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { sendContactForm } from "@/lib/api";

const myFont = localFont({ src: "../Fonts/NimbusSanL-Reg.otf" });

export default function contactus() {
  const [fullName, setFullName] = useState("");
  const [bussinessEmail, setBussinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!fullName || fullName.trim().length < 5) {
      toast.error("Please provide a full name with at least 5 words.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(bussinessEmail)) {
      toast.error("Please provide a valid business email.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error("Please provide a valid 10-digit phone number.");
      return;
    }

    if (!companyName) {
      toast.error("Please provide a company name.");
      return;
    }

    setIsLoading(true);

    const values = {
      fullName,
      bussinessEmail,
      phoneNumber,
      companyName,
    };

    try {
      await sendContactForm(values);
      setIsLoading(false);
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="flex-center-section-of-main-layout" style={myFont.style}>
        <div className="fix-width-for-center-section-at-ringcentral">
          <Navigationbar />
          <div className="flx-in-contact-form-insihf-ringcengtral">
            <div className="pad-content-ofin-left-section">
              <h1 className="header-at-contact-us-layout-jkds">
                Elevate the
                <br />
                conversation on
                <br /> RingCentral
              </h1>
              <Image height={300} src={LeftImg} />
              <p className="para-at-contact-us-screen-next-bottom">
                RingCentral.com offers a comprehensive cloud communications
                platform where you'll find everything you need for seamless and
                efficient communication. From messaging to video conferencing
                and more, it's your all-in-one hub for modern business
                interactions. Discover the power of RingCentral today!
              </p>
            </div>
            <div className="backgrnd-clr-and-form-section">
              <p className="read-se-header-at-form-section">Lets Connect </p>
              <div>
                <input
                  className="input-of-ringcentral-landing-page-area"
                  placeholder="Full name*"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="input-of-ringcentral-landing-page-area"
                  placeholder="Business Email*"
                  value={bussinessEmail}
                  onChange={(e) => {
                    setBussinessEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="input-of-ringcentral-landing-page-area"
                  placeholder="Business phone number"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="input-of-ringcentral-landing-page-area"
                  placeholder="Company name"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
              </div>
              <div className="flx-gap-off-btn-andfielda">
                <button
                  download={
                    "unified-communications-and-contact-center-solution.pdf"
                  }
                  className="cta-btn-at-form-section-of-contact"
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="loading-spinner-container">
                      <div className="loading-spinner"></div>
                    </div>
                  ) : (
                    "Submit and Download"
                  )}
                </button>
                <p className="required-fields-texts-at-contact">
                  *Required fields
                </p>
              </div>
              <p className="last-end-para-of-contatc-us-screen-sayt">
                By clicking the button above, you consent to receiving calls and
                emails from RingCentral. Calls may be connected using automated
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
