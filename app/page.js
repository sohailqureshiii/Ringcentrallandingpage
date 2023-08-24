"use client";
import { Navigationbar } from "@/Components/Navbar/navigationbar";
import Image from "next/image";
import styles from "./page.module.css";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import FirstImg from "../public/imageonedrop.png";
import SecoundImg from "../public/imagetwodrop.png";
import ThirdImg from "../public/imagethreedrop.png";
import FourthImg from "../public/imagefourdrop.png";
import TeamsImg from "../public/group.svg";
import { useState } from "react";
import DownArrow from "../public/arrow-down-sign-to-navigate.svg";
import UpArrow from "../public/up-arrow.svg";
import Link from "next/link";
import Head from "next/head";
const myFont = localFont({ src: "../Fonts/NimbusSanL-Reg.otf" });

export default function Home() {
  const [show, setShow] = useState(false);
  const [sec1, setSec1] = useState(false);
  const [sec2, setSec2] = useState(false);
  const [sec3, setSec3] = useState(false);
  const [sec4, setSec4] = useState(false);
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Join the future of business communication today."
        />
      </Head>
      <div
        className="flex-center-section-of-main-layout backgrond-for-home-layout"
        style={myFont.style}
      >
        <div className="fix-width-for-center-section-at-ringcentral">
          <Navigationbar />
          <div>
            <div className="firts-contain-ringcentral">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "2em",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="svg-78604338-263886854-title"
                  class="logo__img"
                  fill="none"
                  // height="150"
                  id="svg-78604338-263886854"
                  role="img"
                  viewBox="0 0 961 208"
                  width="250"
                >
                  <title id="svg-78604338-263886854-title">
                    RingCentral Logo
                  </title>

                  <path
                    d="M960.999 24.4572H938.465V168.267H960.999V24.4572Z"
                    fill="#FF7A00"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M881.913 72.6667C861.113 72.6667 844.98 82.7619 842.256 103.371H864.408C865.97 95.6 871.704 90.9334 881.913 90.9334C893.761 90.9334 899.208 97.7334 899.208 108.419V113.276H876.465C855.513 113.276 840.027 122.61 840.027 141.657C840.027 160.705 852.656 170.61 870.923 170.61C885.113 170.61 894.446 164.571 899.494 154.857H900.465V168.19H921.837V109.143C921.742 86.3619 910.084 72.6667 881.913 72.6667ZM877.342 153.314C868.599 153.314 863.151 149.029 863.151 141.886C863.151 133.714 868.98 129.448 879.475 129.448H899.094L899.208 130.8C899.208 144.933 891.037 153.314 877.342 153.314Z"
                    fill="#FF7A00"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M800.085 168.267V119.886C800.085 105.505 809.037 96.3619 823.208 96.3619H832.085V74.9905H822.942C812.256 74.9905 804.485 79.0667 799.627 88.2095H798.846V74.9905H777.666V168.324L800.085 168.267Z"
                    fill="#FF7A00"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M763.361 147.676V168.267H748.008C726.428 168.267 714.58 158.267 714.58 136.686V93.5048H699.228V74.9905H714.58V50.2286H737.132V74.9905H763.361V93.5048H737.132V134.076C737.132 142.629 742.18 147.676 750.732 147.676H763.361Z"
                    fill="#FF7A00"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M625.379 168.267V114.248C625.379 101.029 633.551 92.381 646.751 92.381C659.379 92.381 666.96 99.6762 666.96 113.962V168.267H689.532V110.362C689.532 86.8381 678.103 72.6667 654.751 72.6667C640.541 72.6667 629.684 79.0667 624.827 87.8095H624.027V74.9905H602.903V168.324L625.379 168.267Z"
                    fill="#FF7A00"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M542.523 152.152C528.332 152.152 518.808 142.629 518.427 127.657H587.418L587.323 120.362C587.323 89.0857 567.113 72.7429 542.427 72.7429C515.761 72.7429 496.275 91.7905 496.275 121.714C496.275 151.638 514.351 170.686 542.427 170.686C565.932 170.686 581.284 158.248 585.761 139.981H563.894C561.475 146.99 555.532 152.152 542.523 152.152ZM542.427 91.4095C557.189 91.4095 565.932 99.7714 566.523 111.429H518.332C520.465 99.581 527.646 91.4095 542.427 91.4095Z"
                    fill="#FF7A00"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M428.827 170.8C462.446 170.8 481.494 152.152 485.97 124.457H463.113C459.722 137.086 450.522 148.743 428.827 148.743C406.484 148.743 388.599 133.505 388.599 100.152C388.599 66.8 406.484 51.6 428.827 51.6C451.17 51.6 460.122 63.2572 463.113 75.6952H485.97C482.275 48 463.513 29.981 428.827 29.981C391.513 29.981 364.503 56.0191 364.503 100.457C364.503 144.895 391.513 170.933 428.827 170.933V170.8Z"
                    fill="#FF7A00"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M327.875 74.9904V87.7904H326.808C321.761 78.8571 311.265 72.6476 296.332 72.6476C274.465 72.6476 254.751 89.9428 254.751 120.457C254.751 150.971 274.18 168.457 296.332 168.457C310.713 168.457 319.189 162.609 325.684 152.705H326.713V172.362C326.713 182.857 320.884 187.714 311.361 187.714H265.646V207.79H310.922C335.989 207.79 349.399 193.79 349.399 170.857V74.9904H327.875ZM302.522 148.057C287.551 148.057 278.027 138.743 278.027 120.476C278.027 102.209 287.456 92.8762 302.522 92.8762C317.094 92.8762 326.808 102.19 326.808 120.476C326.808 138.762 317.189 148.057 302.522 148.057Z"
                    fill="#0684BC"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M176.865 168.267V114.248C176.865 101.029 185.037 92.381 198.256 92.381C210.884 92.381 218.465 99.6762 218.465 113.962V168.267H240.998V110.362C240.998 86.8381 229.57 72.6667 206.218 72.6667C192.027 72.6667 181.056 79.0667 176.198 87.8095H175.418V74.9905H154.332V168.324L176.865 168.267Z"
                    fill="#0684BC"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    d="M135.284 74.9905H112.751V168.267H135.284V74.9905Z"
                    fill="#0684BC"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M73.4938 103.943V103.029C87.2842 99.2191 96.6176 89.962 96.6176 69.162C96.6176 47.7905 80.6747 32.2286 51.1319 32.2286H0.998535V168.267H24.3128V114.248H52.6938C65.9128 114.248 72.5223 120.857 72.5223 134.076V168.362H95.8366V134.076C95.8366 114.838 87.6652 107.067 73.4938 103.943ZM49.8747 93.2572H24.3128V53.2572H49.8747C62.5033 53.2572 72.2176 58.5144 72.2176 73.2763C72.2176 88.0382 62.4081 93.2572 49.8747 93.2572Z"
                    fill="#0684BC"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M124.008 60.0191C126.971 60.0229 129.868 59.1475 132.333 57.5039C134.798 55.8603 136.72 53.5222 137.855 50.7858C138.991 48.0493 139.289 45.0375 138.712 42.1316C138.135 39.2256 136.708 36.5562 134.614 34.4613C132.519 32.3663 129.849 30.9401 126.943 30.363C124.037 29.7859 121.025 30.084 118.289 31.2195C115.553 32.355 113.215 34.2769 111.571 36.7419C109.927 39.2068 109.052 42.104 109.056 45.0667C109.03 48.0324 109.895 50.9375 111.539 53.4062C113.182 55.8749 115.529 57.7937 118.275 58.9143C120.091 59.6692 122.042 60.0451 124.008 60.0191Z"
                    fill="#FF7A00"
                    fill-rule="evenodd"
                  ></path>

                  <path
                    clip-rule="evenodd"
                    d="M106.827 3.58098C101.369 5.86562 96.4121 9.19834 92.2366 13.3905L102.808 23.9619C105.579 21.175 108.872 18.9612 112.499 17.4471C116.126 15.9331 120.016 15.1483 123.946 15.1377C127.876 15.1271 131.77 15.8908 135.405 17.3853C139.04 18.8798 142.346 21.0757 145.132 23.8476L155.703 13.2762C149.426 7.01155 141.433 2.74724 132.734 1.02169C124.035 -0.703868 115.02 0.186712 106.827 3.58098Z"
                    fill="#FF7A00"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h1 className="main-header-of-ring-central-header-one-tag">
                Experience Seamless Communication with RingCentral's Unified
                Communications and Contact Center Solution
              </h1>
              <p className="para-for-main-title-in-ringcentral-main-layout">
                Join the future of business communication today.
              </p>
              <div className="flx-in-btns-of-cta-at-main-layout ">
                <p className="flx-options-of-thre-sjc-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="image__img"
                    fill="none"
                    height="28"
                    id="svg-1929549355"
                    role="img"
                    viewBox="0 0 28 28"
                    width="28"
                  >
                    <circle cx="14" cy="14" fill="#EEECE5" r="14"></circle>

                    <path
                      clip-rule="evenodd"
                      d="M12 19.5L7 14.54L8.59 13L12 16.35L19.41 9L21 10.58L12 19.5Z"
                      fill="#222222"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  No download necessary
                </p>
                <p className="flx-options-of-thre-sjc-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="image__img"
                    fill="none"
                    height="28"
                    id="svg-1929549355"
                    role="img"
                    viewBox="0 0 28 28"
                    width="28"
                  >
                    <circle cx="14" cy="14" fill="#EEECE5" r="14"></circle>

                    <path
                      clip-rule="evenodd"
                      d="M12 19.5L7 14.54L8.59 13L12 16.35L19.41 9L21 10.58L12 19.5Z"
                      fill="#222222"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  Try for Free
                </p>
                <p className="flx-options-of-thre-sjc-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="image__img"
                    fill="none"
                    height="28"
                    id="svg-1929549355"
                    role="img"
                    viewBox="0 0 28 28"
                    width="28"
                  >
                    <circle cx="14" cy="14" fill="#EEECE5" r="14"></circle>

                    <path
                      clip-rule="evenodd"
                      d="M12 19.5L7 14.54L8.59 13L12 16.35L19.41 9L21 10.58L12 19.5Z"
                      fill="#222222"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  Up to 10,000 Attendees
                </p>
              </div>
              <div className="flx-in-btns-of-cta-at-main-layout low-hd-pad-sj">
                <Link href="/contactus">
                  <button
                    className="Cta-another-btn-for-contct-ius-cd"
                    style={myFont.style}
                  >
                    Try Free
                  </button>
                </Link>
                <Link href="/contactus">
                  <button
                    className="ctc-for-download-white-appaer-at-main-layout"
                    style={myFont.style}
                  >
                    Dowload Whitepaper
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center-section-of-main-layout" style={myFont.style}>
        <div className="fix-width-for-center-section-at-ringcentral">
          <div className="division-for-say-ggobye-section-skm">
            <h2 className="main-layouts-header-two-tag-in-sect">
              Say hello to lifelong customers with RingCentral’s unified
              communications and contact center solutions, together.
            </h2>
            <p className="para-for-main-title-in-ringcentral-main-layout">
              It’s not easy creating lifelong customer relationships, but with
              RingCentral by your side, you can build a collaborative customer
              service culture and win the hearts of your customers.
            </p>
            <div className="flex-center-section-of-main-layout pad-for-iframe-view-sj">
              {/* <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/ZQMn5wIoAno?list=RDZQMn5wIoAno"
                title="Coke Studio Season 9| Tu Kuja Man Kuja| Shiraz Uppal &amp; Rafaqat Ali Khan"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe> */}
              <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/6Glhk2oXd50"
                title="Welcome to RingCentral: Simpler Communications"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <h2 className="main-layouts-header-two-tag-in-sect">
                Say goodbye to complicated webinars
              </h2>
              <p className="para-for-main-title-in-ringcentral-main-layout">
                It’s not easy creating lifelong customer relationships, but with
                RingCentral by your side, you can build a collaborative customer
                service culture and win the hearts of your customers.
              </p>
              <div className="efioefkls-esolk-dsk">
                {" "}
                <div className="flx-section-wihtjd">
                  <div className="flx-with-img-and-hdr-and-para">
                    <div className="flx-fr-im-of-hwye-dis">
                      <div className="border-for-backgrnd-img-left">
                        <Image
                          src={TeamsImg}
                          width={50}
                          height={50}
                          alt="Demandscoop"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className="hdr-at-three-section-of-why">
                        Professional Team
                      </h5>
                      <p className="para-at-three-section-of-why-choose-us">
                        HUMBLE, YET HONORED. Thats how our team defines
                        themselves. We’ve also earned a few accolades. Sure,
                        rewards and recognition are nice, but we don’t do it for
                        the bragging rights.
                      </p>
                    </div>
                  </div>
                  <div className="flx-with-img-and-hdr-and-para">
                    <div className="flx-fr-im-of-hwye-dis">
                      <div className="border-for-backgrnd-img-left">
                        <Image
                          src={TeamsImg}
                          width={50}
                          height={50}
                          alt="Demandscoop"
                        />
                      </div>{" "}
                    </div>
                    <div>
                      <h5 className="hdr-at-three-section-of-why">
                        Years Experience
                      </h5>
                      <p className="para-at-three-section-of-why-choose-us">
                        We've learned in past 17 years that it's not about the
                        tactics but the strategy. And that's made all
                        difference. We've helped 57+ businesses who need an
                        outsourced team of experts to carry out their marketing
                        vision
                      </p>
                    </div>
                  </div>
                  <div className="flx-with-img-and-hdr-and-para">
                    <div className="flx-fr-im-of-hwye-dis">
                      {" "}
                      <div className="border-for-backgrnd-img-left">
                        <Image
                          src={TeamsImg}
                          width={50}
                          height={50}
                          alt="Demandscoop"
                        />
                      </div>{" "}
                    </div>
                    <div>
                      <h5 className="hdr-at-three-section-of-why">
                        Success Guaranteed
                      </h5>
                      <p className="para-at-three-section-of-why-choose-us">
                        We at DemandScoop help you undertake your marketing and
                        sales initiatives by recognising your buyers’ persona
                        and their intentions to purchase. That's why we have a
                        recurring business ratio of 96.8%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "4em",
                }}
              >
                <Link href="/contactus">
                  <button className="Cta-another-btn-for-contct-ius-cd">
                    Get For Free Now !
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="main-layouts-header-two-tag-in-sect">
                Top benefits of RingCentral’s unified communications and contact
                center solution
              </h3>
              <p className="para-for-main-title-in-ringcentral-main-layout padding-bottom-large-insec-lay">
                When it comes to finding an integrated UCaaS and CCaaS solution,
                RingCentral is your best choice, and we’ll tell you why with our
                top benefits and features list below.
              </p>
              <div
                className="flx-in-of-custer-drop-den-sena-ringcentral"
                onClick={() => setSec1(!sec1)}
              >
                <p className="hdr-abottom-sec-of-drop-dwon">
                  Resolve customer issues the first time
                </p>{" "}
                {sec1 ? (
                  <Image
                    src={UpArrow}
                    className="uparrow-for-dropdown-in-line"
                  />
                ) : (
                  <Image
                    src={DownArrow}
                    className="uparrow-for-dropdown-in-line"
                  />
                )}
              </div>
              {sec1 ? (
                <div className="flx-directioin-of-img-and-content">
                  <div className="width-and-lenthg-for-layout-of-content">
                    <p className="para-at-layout-section-of-left-right-combinat">
                      The easier your team can collaborate, the faster they can
                      resolve customer issues. Empower your employees to resolve
                      customer problems the first time by connecting your
                      unified communications app with your contact center
                    </p>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Unified directory
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Call transfer controls.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Intelligent routing
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Live call analytics and reporting.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Dashboard alerts.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                  </div>
                  <div className="background-for-img-at-left-right-layout">
                    <Image
                      src={FirstImg}
                      className="image-at-deop-section-sji"
                    />
                  </div>
                </div>
              ) : null}
              <div
                className="flx-in-of-custer-drop-den-sena-ringcentral"
                onClick={() => setSec2(!sec2)}
              >
                <p className="hdr-abottom-sec-of-drop-dwon">
                  Communicate with customers in the right place, at the right
                  time
                </p>{" "}
                {sec2 ? (
                  <Image
                    src={UpArrow}
                    className="uparrow-for-dropdown-in-line"
                  />
                ) : (
                  <Image
                    src={DownArrow}
                    className="uparrow-for-dropdown-in-line"
                  />
                )}
              </div>
              {sec2 ? (
                <div className="flx-directioin-of-img-and-content">
                  <div className="width-and-lenthg-for-layout-of-content">
                    <p className="para-at-layout-section-of-left-right-combinat">
                      The way customers communicate has changed drastically.
                      There are numerous channels customers can now tap
                      into—phone, messaging, video, email, social media, live
                      chat, and the list goes on. Start communicating with your
                      customers on their preferred channel.
                    </p>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Omnichannel routing.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Self-service.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Chatbots.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Superior voice quality
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                  </div>
                  <div className="background-for-img-at-left-right-layout">
                    <Image
                      src={SecoundImg}
                      className="image-at-deop-section-sji"
                    />
                  </div>
                </div>
              ) : null}
              <div
                className="flx-in-of-custer-drop-den-sena-ringcentral"
                onClick={() => setSec3(!sec3)}
              >
                <p className="hdr-abottom-sec-of-drop-dwon">
                  Accelerate agent productivity
                </p>{" "}
                {sec3 ? (
                  <Image
                    src={UpArrow}
                    className="uparrow-for-dropdown-in-line"
                  />
                ) : (
                  <Image
                    src={DownArrow}
                    className="uparrow-for-dropdown-in-line"
                  />
                )}
              </div>
              {sec3 ? (
                <div className="flx-directioin-of-img-and-content">
                  <div className="width-and-lenthg-for-layout-of-content">
                    <p className="para-at-layout-section-of-left-right-combinat">
                      Ensure your agents hit (and exceed) their customer service
                      goals every time. Equip your agents with coaching and
                      support tools that will supercharge their performance,
                      level up their skills, and make them love their job.
                    </p>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Silent monitoring.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Analytics.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Call recording.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Workforce management.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        CRM integrations.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Streamlined workflows.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                  </div>
                  <div className="background-for-img-at-left-right-layout">
                    <Image
                      src={ThirdImg}
                      className="image-at-deop-section-sji"
                    />
                  </div>
                </div>
              ) : null}
              <div
                className="flx-in-of-custer-drop-den-sena-ringcentral"
                onClick={() => setSec4(!sec4)}
              >
                <p className="hdr-abottom-sec-of-drop-dwon">
                  Drive operational agility and ROI
                </p>{" "}
                {sec4 ? (
                  <Image
                    src={UpArrow}
                    className="uparrow-for-dropdown-in-line"
                  />
                ) : (
                  <Image
                    src={DownArrow}
                    className="uparrow-for-dropdown-in-line"
                  />
                )}
              </div>
              {sec4 ? (
                <div className="flx-directioin-of-img-and-content">
                  <div className="width-and-lenthg-for-layout-of-content">
                    <p className="para-at-layout-section-of-left-right-combinat">
                      Whenever you’re investing in anything new, you want to
                      make sure you're getting the best bang for your buck. With
                      RingCentral, you’ll be getting exceptional value and ROI
                      across all your business and customer communications
                    </p>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Real-time actions.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        One vendor.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Scalability.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Simplified IT work.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                    <div className="flx-in-opt-like-faq-series">
                      <p className="title-of-left-right-layout-in-faq">
                        Ease of use.
                      </p>
                      <p className="right-side-down-arrow">+</p>
                    </div>
                  </div>
                  <div className="background-for-img-at-left-right-layout">
                    <Image
                      src={FourthImg}
                      className="image-at-deop-section-sji"
                    />
                  </div>
                </div>
              ) : null}
            </div>
            {/* <div>
              <div>
                <h3 className="nextheader-of-bottom-setion-nslas">
                  Whatever your communications needs are, RingCentral has your
                  back
                </h3>
                <div>
                  <p className="parra-at-bottom-sect-in-line-view-kajd">
                    When it comes to your business and customer communications
                    needs, RingCentral has your back.
                  </p>
                </div>
                <div>
                  <p className="parra-at-bottom-sect-in-line-view-kajd">
                    If you're a small or mid-sized business looking for the
                    basics, the RingCentral MVP™ Premium edition plus Live
                    Reports gives you all the benefits of our award-winning
                    unified communications platform with additional contact
                    center features (like call recording, supervisor modes, and
                    integrations with key business apps).
                  </p>
                </div>
                <div>
                  <p className="parra-at-bottom-sect-in-line-view-kajd">
                    If you're a mid-sized business and you’re looking for
                    something more robust, there’s RingCentral Contact Center™
                    and RingCentral Engage Digital™, which has everything you
                    need to manage and grow a full- stack contact center.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div>
                <h3>Get started today.</h3>
              </div>
              <div>
                <input placeholder="Enter Your Bussiness Email" />
                <button>Submit</button>
              </div>
            </div> */}
            <div className="flx-of-blue-and-white-layout-sect">
              <div className="box-of-content-in-section-white">
                <h3 className="hedr-at-white-box-sect">
                  {" "}
                  Whatever your communications needs are, RingCentral has your
                  back
                </h3>
                <p className="parra-at-white-box-layout">
                  {" "}
                  When it comes to your business and customer communications
                  needs, RingCentral has your back.
                </p>
              </div>
              <div className="bliue-box-layout-of-ringcentral-fjke">
                <div>
                  <div>
                    <input
                      className="input-for-email-grab-ujks"
                      placeholder="Enter Your Bussiness Email"
                    />
                  </div>
                  <button className="try-free-submit-btn-ifd">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-and-end-of-landing-apge" style={myFont.style}>
        <div className="fix-width-for-center-section-at-ringcentral">
          <div>
            <h3 className="headr-at-footer-upper-section">
              Ready to Try Free?
            </h3>
            <div className="flx-three-ease-fre-ise-opti">
              <p className="opsnf-skj-dfjsdvm">Easy to use</p>
              <p className="opsnf-skj-dfjsdvm">Easy to buy</p>
              <p className="opsnf-skj-dfjsdvm">Easy to manage</p>
            </div>
            <div className="flx-in-btns-of-cta-at-main-layout low-hd-pad-sj bottm-paddig">
              <Link href="/contactus">
                <button
                  className="Cta-another-btn-for-contct-ius-cd"
                  style={myFont.style}
                >
                  Try for Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
