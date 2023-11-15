<template>
  <div class="login-form-container">
    <div class="login-form-wrapper">
      <form name="loginWithOtp">
        <div class="justify-content-center pl-3">
          <div
            class="form-group"
            :class="{ username: showOptField }"
            v-if="!isOtpSent"
          >
            <span class="p-float-label">
              <InputText
                id="username"
                v-model="username"
                type="text"
                autocomplete="off"
                :class="{ 'p-invalid': usernameError }"
                aria-describedby="text-error"
              />
              <label for="username" class="text-xs required">Email</label>
            </span>
            <span v-if="usernameError" class="errorMsg">{{
              usernameError
            }}</span>
          </div>

          <Button class="login-btn" label="Send OTP" @click.prevent="sendOtpFunc()" />

          <div class="form-group otp-class" :style="{ width: '100%' }">
            <span class="p-input-icon-right" :style="{ width: '100%' }">
              <span class="p-float-label" :style="{ width: '100%' }">
                <InputText
                  id="otp"
                  v-model="otp"
                  :type="showOtp ? 'text' : 'password'"
                  autocomplete="off"
                />
                <label for="otp" class="text-xs required">Enter OTP</label>
                <i
                  v-if="otp"
                  class="cursor-pointer z-1 pi show-pass-icon"
                  @click="toggleShow"
                  :class="{
                    'pi-eye-slash': showOtp && otp,
                    'pi-eye': !showOtp,
                  }"
                />
              </span>
              <span v-if="otpError" class="errorMsg">{{ otpError }}</span>
            </span>
          </div>
          <div class="otp-expire-count-down" v-if="isOtpSent">
            OTP will expire in {{ countdownDisplay }}
          </div>
          <div class="flex justify-content-between">
            <div class="" v-if="!buttonDisabled">
              <span
                :class="[
                  'forgot-pwd-link cursor-pointer',
                  { disabled: buttonDisabled },
                ]"
              >
                Resend OTP
              </span>
            </div>
          </div>

          <div class="flex justify-content-between mt-2">
            <div class="required-field-wrapper">
              <span class="required-field-txt">
                <span class="red-color">*</span>
                Indicates Required Field</span
              >
            </div>
          </div>

          <Button
            type="submit"
            class="login-btn"
            label="Submit"
            :disabled="!otp"
            :class="{ 'disabled-button': !otp }"
            @click="loginOnSubmit()"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useField } from "vee-validate";
import * as Yup from "yup";
import router from "@/router";
import globalConfig from "@/common/config/GlobalConstants";
import { useToast } from "primevue/usetoast";
const { TOAST } = globalConfig;
const toast = useToast();

const showOtp = ref(false);
const isOtpSent = ref(false);
let showOptField = ref(false);
let buttonDisabled = ref(true);

const { value: username, errorMessage: usernameError } = useField(
  "username",
  Yup.string().required("This field is required")
);
const { value: otp, errorMessage: otpError } = useField(
  "otp",
  showOptField.value
    ? Yup.string().required("This field is required")
    : undefined
);

const sendOtpFunc = () => {
  toast.add({
    severity: TOAST.SEVERITY.SUCCESS,
    detail: TOAST.MESSAGES.SUCCESS.otpSuccessful,
    life: TOAST.DURATION,
  });
};

const toggleShow = () => {
  if (otp.value) {
    showOtp.value = !showOtp.value;
  }
};

const loginOnSubmit = () => {
  toast.add({
    severity: TOAST.SEVERITY.SUCCESS,
    detail: TOAST.MESSAGES.SUCCESS.loginSuccess,
    life: TOAST.DURATION,
  });
  router.push("../../components/UserManagement.vue");
};
</script>

<style scoped lang="scss">
.otp-class {
  margin-top: 35px;
}
.disabled-button {
  background-color: #adadad !important;
}
:deep(.p-float-label label) {
  transform: translateY(-60%);
  margin-top: 0;
  line-height: 1.2;
}

.show-pass-icon {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}
.icon-button.p-button {
  background-color: transparent !important;
  border: none !important;
  color: inherit;
  font-size: 1.5em;
}

.icon-button.p-button:hover,
.icon-button.p-button:hover .pi {
  background-color: transparent !important;
  color: inherit !important;
}
.larger-icon .pi {
  font-size: 18px;
}
/* Responsive Design */
@media only screen and (max-width: 600px) {
  .captchaContainer {
    max-width: 100%;
  }
  .captchaQuestion {
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
}

@media only screen and (max-height: 768px) and (min-width: 768px) {
  :deep(.p-float-label label) {
    font-size: 10px !important;
  }

  .forgot-pwd-link {
    font-size: 12px !important;
  }
}
</style>
