<template>
  <div class="bgStyle d-flex justify-center align-center" style="height: 100vh">
    <div class="login-card mt-10" align="center">
      <v-card
        class="login-sub-card text-center py-5 dis-grid"
        width="500"
        elevation="3"
      >
        <div>
          <h1 class="text-center color-blue outfit-bold login-text my-3">
            <span class="red-asterisk">Global</span> RBI
          </h1>
          <v-form
            v-if="!showOtpForm"
            v-model="valid"
            ref="form"
            class="px-2 px-md-12 px-lg-12"
            @submit.prevent="signUpUser"
          >
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    variant="solo"
                    append-inner-icon="mdi-email"
                    hide-details="auto"
                    placeholder="Enter your Email"
                    class="pb-0 custom-login"
                    type="email"
                    v-model="form.email"
                    :rules="rules.email"
                  >
                    <template v-slot:label>
                      <label
                        >Email Id <span class="red-asterisk">*</span></label
                      >
                    </template>
                  </v-text-field>
                </v-col>
                <!-- <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    class="pt-0 custom-login"
                    type="number"
                    placeholder="Mobile Number"
                    v-model="form.mobileNo"
                    :rules="rules.mobileNo"
                  >
                  </v-text-field>
                </v-col> -->
                <!-- <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    variant="solo"
                    label="Password*"
                    hide-details="auto"
                    placeholder="Enter your Password"
                    @click:append="showPassword = !showPassword"
                    :type="showPassword ? 'text' : 'Password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    class="pt-0 custom-login"
                    v-model="form.password"
                    :rules="rules.password"
                  >
                  </v-text-field>
                </v-col> -->
                <p class="text-left requireText pl-3">
                  <span class="red-asterisk">*</span> Indicates Required Field
                </p>
                <v-col cols="12" sm="12" md="12">
                  <v-btn
                    :disabled="!valid"
                    block
                    color="#283959"
                    height="50"
                    class="mt-1 mb-3 all-button poppins-medium"
                    type="submit"
                    :loading="loading"
                  >
                    Get OTP
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-form
            v-if="showOtpForm"
            v-model="otpvalid"
            ref="newform"
            class="px-2 px-md-12 px-lg-12"
            @submit.prevent="handleOtp()"
          >
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    variant="solo"
                    label="Enter OTP"
                    hide-details="auto"
                    placeholder="Enter your OTP"
                    maxLength="6"
                    class="pb-0 custom-login"
                    @click:append-inner="showOtp = !showOtp"
                    :type="showOtp ? 'text' : 'Password'"
                    :append-inner-icon="showOtp ? 'mdi-eye' : 'mdi-eye-off'"
                    onkeypress="return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 13"
                    v-model="form.otp"
                    :rules="rules.otp"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-btn
                    :disabled="form.otp.length == 6 ? false : true"
                    block
                    color="#283959"
                    height="50"
                    class="mt-1 mb-3 all-button poppins-medium"
                    type="submit"
                    :loading="loading"
                  >
                    Submit OTP
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { numeric, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  components: {},
  data: () => {
    return {
      showOtpForm: false,
      valid: false,
      otpValid: false,
      showModal: true,
      showPassword: false,
      showOtp: false,
      socialMediaFlag: true,
      signUpDialog: false,
      loading: false,
      form: {
        email: "",
        password: "",
        otp: "",
      },
      validations: {
        model: {
          otp: {
            numeric,
            minLength: minLength(6),
            maxLength: maxLength(6),
          },
        },
      },
      rules: {
        name: [
          (v) => !!v || "Name is required",
          (v) =>
            /^[A-Za-z\s]{0,1}[A-Za-z\s]{0,}$/.test(v) ||
            "Name cannot contain special characters",
        ],
        email: [
          (v) => !!v || "Email is required",
          (v) =>
            /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/.test(v) ||
            "Invalid Email Address",
        ],
        // mobileNo: [
        //   (v) => !!v || "Mobile number is required",
        //   (v) =>
        //     !(v && !/^[0-9]{8,10}$/.test(v)) || "Mobile Number is not valid",
        // ],
        otp: [
          //   (v) => !!v || "otp is required",
          (v) => !(v && v.length > 6) || "Otp must be of 6 characters only",
          (v) =>
            !(v && v.split(" ").join("").length < v.length) ||
            "OTP cannot contain spaces!",
        ],
      },
    };
  },

  methods: {
    async signUpUser() {
      this.$refs.form.validate();
      if (!this.$refs.form.validate()) {
        return;
      }
      let data = {};
      data.email = this.form.email;
      data.password = this.form.password;
      this.showOtpForm = true;
      localStorage.setItem("data", data);
    },
    async handleOtp() {
      if (!this.$refs.newform.validate()) {
        return;
      }
      this.$router.push("/welcome");
    },
  },
};
</script>

<style lang="scss" scoped>
.bgStyle {
  background-image: url("../assets/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}
.login-card {
  margin: 15px;
  .v-text-field > .v-input__control > .v-input__slot:after,
  .v-text-field > .v-input__control > .v-input__slot:before {
    border: 1px solid #283959 !important;
  }
}

.v-field__append-inner {
  color: #283959 !important;
}
</style>
