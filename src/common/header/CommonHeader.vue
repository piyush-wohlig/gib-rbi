<template>
  <header class="login-header flex justify-content-between">
    <div class="company-logo-wrapper flex align-items-center">
      <div
        class="client-name-wrapper flex align-items-center bg-img"
        :style="{ backgroundImage: `url(${logoBg})` }"
      ></div>
      <div class="company-logo">
        <img :src="`${companyLogo}`" alt="Company Logo" />
      </div>
    </div>
    <div class="flex">
      <div class="card flex justify-content-center lg:hidden">
        <Sidebar
          v-model:visible="visible"
          :pt="{
            root: { style: 'backgroundColor:#F6FEFF' },
            content: {
              class: 'flex flex-column justify-content-between',
            },
          }"
        >
          <div class="wrapper-top">
            <HeaderbarLayout :position="header" />
            <SidebarLayout :position="'sidebar'" />
          </div>
        </Sidebar>
        <!-- <Button @click="visible = true" :pt="{ root: { class: 'lg:hidden' } }">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 8.45312H24.5"
              stroke="#292D32"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M3.5 14.5H24.5"
              stroke="#292D32"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M3.5 20.5469H24.5"
              stroke="#292D32"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </Button> -->
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import SidebarLayout from "@/layout/SidebarLayout.vue";
import HeaderbarLayout from "@/layout/HeaderbarLayout.vue";

// const clientLogo = ref(require("@/assets/images/client-logo.png"));
const visible = ref(false);
const companyLogo = ref(require("@/assets/images/Layer_1.png"));
const logoBg = ref(require("@/assets/images/maze2.png"));

</script>

<style lang="scss" scoped>
.custom-message-icon {
  width: 32px;
  height: 32px;
}

.login-header {
  padding: 15px 40px;
  background-position: right -10px;
  background-repeat: no-repeat;
  background-size: contain;

  .client-logo {
    max-width: 141px;
    height: 56px;
    overflow: hidden;
    mix-blend-mode: darken;

    img {
      width: auto;
      height: 100%;
    }
  }

  .client-name-wrapper {
    width: 200px;
    height: 60px;
    line-height: 24px;
    .client-name {
      letter-spacing: 0.04em;
      color: $font-dark-blue;
      font-size: $font-16;
      font-family: $poppins-700;
    }
  }
  .company-logo {
    height: 36px;
    max-width: 226px;
    margin-right: 25px;
    img {
      width: 100%;
      height: auto;
    }
  }
}

.client-name {
  font-size: 16px;
  letter-spacing: 0.64px;
  color: $dark-blue;
  border-left: 2px solid $dark-blue;
  display: block;
  padding-left: 10px;
}

.p-sidebar {
  .mobile-menu-links {
    padding: 40px 25px;

    .nav-link {
      margin-bottom: 32px;
      list-style: none;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        color: $dark-blue;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;

        i {
          margin-right: 10px;
        }
      }
    }
  }

  .logout-wrapper {
    color: #ec2127;
    font-size: 14px;
    font-weight: 600;
    padding: 16px;
    margin: 0 -16px;
    border-bottom: 1px solid $input-active-border;

    i {
      margin-right: 10px;
    }
  }
}

:deep(.p-button) {
  background-color: transparent;
  border: none;
  padding-left: 0;

  &:hover {
    background-color: transparent;
  }
  .pi-align-justify:before {
    background: #292d32;
  }
}

@media only screen and (max-width: 599px) {
  .login-header {
    padding: 15px;
    background: $bg-color-input !important;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    .company-logo {
      display: none;
    }

    .client-logo {
      height: 37px;
      width: 69px;
      display: flex;
      align-items: center;

      img {
        width: auto;
        height: 100%;
      }
    }
    .company-logo-wrapper {
      justify-content: flex-end;
      margin: 0;
    }
  }

  .only-client-name {
    &.client-logo {
      height: 100%;
      max-width: 160px;
      width: auto;
    }
  }
}

@media screen and (max-width: 375px) {
  .login-header {
    .company-logo {
      img {
        width: 100%;
        height: auto;
      }
    }
    .client-name-wrapper {
      width: 100%;
      height: 60px;
      line-height: 24px;
      margin: 0px 8px 0 0;
    }
  }
}

@media screen and (max-width: 479px) {
  .login-header {
    align-items: center;
    .company-logo {
      margin-right: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
    .client-name-wrapper {
      width: 100%;
      height: auto;
      line-height: 24px;
      margin: 0px 8px 0 0;
    }
  }
  .login-form-container {
    margin-top: 48px;
  }
}

@media screen and (min-width: 1367px) and (max-width: 2560px) {
  .login-header {
    .client-logo {
      img {
        max-width: auto;
        height: 100%;
      }
    }
    .company-logo {
      margin-right: 0 !important;
      img {
        max-width: 100%;
        height: auto;
        float: right;
      }
    }
  }
}

@media only screen and (max-height: 768px) and (min-width: 768px) {
  .client-name-wrapper {
    margin-top: 0 !important;
  }
}
@media only screen and (max-height: 835px) and (min-width: 768px) {
  .login-header {
    padding: 25px 40px;
  }
}
</style>
