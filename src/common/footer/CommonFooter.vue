<template>
  <div class="footer p-4">
    <ul
      class="flex justify-content-center custom-list font-medium font-pop mt-5 mb-0 flex-wrap"
    >
      <li>
        <a
          :href="footer.aboutUsLink"
          class="footer-link font-black"
          target="_blank"
          >{{ footerConfig.ABOUT_US }}</a
        >
      </li>

      <li>
        <a
          :href="footer.privacyLink"
          class="footer-link font-black"
          target="_blank"
          >{{ footerConfig.PRIVACY_POLICY }}</a
        >
      </li>
      <li>
        <a
          :href="footer.disclaimerLink"
          class="footer-link font-black"
          target="_blank"
          >{{ footerConfig.DISCLAIMER }}</a
        >
      </li>
      <li>
        <a
          :href="footer.tncLink"
          class="footer-link font-black"
          target="_blank"
          >{{ footerConfig.TERMS_AND_CONDITIONS }}</a
        >
      </li>
    </ul>
    <div class="digi-img">
      <img
        :src="require('@/assets/images/digicert-logo.png')"
        alt="Client Logo"
        class="img-size"
      />
    </div>
    <div class="flex justify-content-between flex-wrap md:flex-nowrap">
      <div class="md:text-xs font-pop col-12 md:col-6">
        <p class="my-0">{{ footer.companyName }}</p>
        <p class="my-0">
          {{ footer.companyAddress1 }} {{ footer.companyAddress2
          }}{{ footer.companyCity }}
          {{ footer.companyPin }}
        </p>
        <p class="my-0">
          e-mail:
          <a class="footer-a-link my-0" href="mailto:{{footer.globalEmail2}}">{{
            footer.globalEmail2
          }}</a>
        </p>
        <p class="my-0 font-semibold">
          {{ footer.insurance_disclaimer_text }}
        </p>
      </div>

      <div
        class="md:text-xs font-pop col-12 md:col-6 md:flex md:align-items-end md:flex-column"
      >
        <p class="my-0">
          {{ footer.regulated_by_text }}
        </p>
        <p class="my-0">
          &#169; {{ footer.copywrite }} | {{ footer.cin_label }}: CIN:
          {{ footer.cin }}
        </p>
        <p class="my-0">
          {{ footer.license_no_label }}: {{ footer.licenseNumber }} |
          {{ footer.license_val_label }}: {{ footer.licenseValidityFrom }} to
          {{ footer.licenseValidityTo }}
        </p>
      </div>
    </div>
  </div>
  <div class="circle hidden lg:block"></div>
</template>

<script setup>
import footerConfig from "../config/footerConfig.js";
import config from "../config/GlobalConstants.js";
const footer = { ...config.companyDetails, ...config.variables };
</script>

<style lang="scss" scoped>
.img-size {
  width: 150px;
}
.footer {
  flex-shrink: 0;
  width: 100%;
  margin-top: auto;
}
.custom-list {
  list-style: none;
}

.custom-list li {
  padding-right: 10px;
}

.custom-list li:not(:last-child)::after {
  content: "|";
  padding-left: 10px;
}
.font-pop {
  font-family: $poppins;
}

.footer-link {
  text-decoration: none;
  font-size: 14px;
}

@media only screen and (max-width: 599px) {
  .custom-list {
    list-style: none;
    margin-right: 25px;
    font-size: $font-10;
    white-space: nowrap;
  }

  .img-size {
    width: 80px;
  }

  .font-pop {
    font-size: $font-12;
  }
}

@media only screen and (max-height: 768px) and (min-width: 768px) {
  .footer {
    margin-top: auto;
    padding: 16px !important;
    .custom-list {
      font-size: 12px;
    }

    .digi-img {
      img {
        width: 90px;
      }
    }

    .font-pop {
      p {
        font-size: 10px;
      }
    }
  }
}
</style>
