export default {
  variables: {
    //Golbal variables
    globalEmail: "info@globalinsurance.co.in",
    globalEmail2: "eb.helpdesk@globalinsurance.co.in",
    supportNumber: "1800-123-4567",
    globalLogo: "images/global-logo.png",
    globalFooterLogo: "images/img_globe_small.png",
    showNortonImg: false,
    enableGoogleAnalytics: false,
    show_footer_global_logo: false,
    show_footer_border: false,
    footer_global_logo_align: "right",
    show_footer_link_seperator: true,
    insurance_disclaimer_text: "Insurance is a subject matter of solicitation.",
    aboutUsLink: "/about-us",
    privacyLink: "/privacy-policy",
    disclaimerLink: "/disclaimer",
    tncLink: "/terms-and-conditions",
    gdpr: "/general_data_protection_regulation_GDPR",
  },

  companyDetails: {
    companyName: "Global Insurance Brokers Pvt. Ltd. ",
    oldCompanyName: "Aon Global Insurance Brokers Pvt. Ltd.",
    companyAddress1: "A wing, 5th Floor, One Forbes, Dr. V B Gandhi Marg,",
    companyAddress2: "Kala Ghoda, Fort,",
    companyCity: "Mumbai, Maharashtra,",
    companyPin: "400 001",
    licenseNumber: "119",
    licenseValidityFrom: "03-Mar-2021",
    licenseValidityTo: "02-Mar-2024",
    cin: "U67200MH2002PTC137954",
    copywrite: "2017-2018, Insurance Assist. All rights reserved",
    rapidSslSeal: "",
    globalLogo: require("@/assets/images/global-logo.png"),
    regulated_by_text:
      "Regulated by Insurance Regulatory and Development Authority of India, (IRDAI).",
    license_no_label: "License Number",
    license_val_label: "License Validity",
    email_label: "e-mail",
    cin_label: "CIN",
  },
  TOAST: {
    MESSAGES: {
      ERROR: {
        
      },
      SUCCESS: {
        otpSuccessful : "OTP Sent Successfully !",
        loginSuccess: "Successfully Loggged In !"
      },
      INFO: {
        noRelationsAdded: "No Relations Added In Family Definition!",
        addAlternateRelation: "Please Add An Alternate Relation!",
        pleaseaAddRelation: "Please Add A Relation!!",
        allRelationsAlreadySelected: "All Relations Already Selected !",
        minMaxReqd:
          "Minimum And Maximum Age Necessary For Age Limit Or Exception!",
      },
    },
    DURATION: 8000,
    SEVERITY: {
      SUCCESS: "success",
      INFO: "info",
      ERROR: "error",
    },
  },
};
