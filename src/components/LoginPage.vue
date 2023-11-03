<template>
  <div class="bgStyle d-flex justify-center align-center" style="height: 100vh">
    <div class="login-card mt-10" align="center">
      <v-card
        class="login-sub-card text-center py-5 dis-grid rounded-0"
        width="400"
        elevation="3"
      >
        <div>
          <h2 class="text-center color-blue outfit-bold h3 login-text my-3">
            Login
          </h2>
          <v-form
            v-model="valid"
            ref="form"
            class="px-4 px-md-12 px-lg-12"
            @submit.prevent="signUpUser"
          >
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    class="pt-0 custom-login"
                    type="email"
                    placeholder="Email ID"
                    v-model="form.email"
                    :rules="rules.email"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    class="pt-0 custom-login"
                    type="number"
                    placeholder="Mobile Number"
                    v-model="form.mobileNo"
                    :rules="rules.mobileNo"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    @click:append="showPassword = !showPassword"
                    :type="showPassword ? 'text' : 'Password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    class="pt-0 custom-login"
                    placeholder="Password"
                    v-model="form.password"
                    :rules="rules.password"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-btn
              :disabled="!valid"
              block
              color="#283959"
              class="mt-7 all-button poppins-medium"
              type="submit"
              :loading="loading"
            >
              Submit
            </v-btn>
          </v-form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
// import { required } from "vuelidate/lib/validators";

export default {
  components: {},
  data: () => {
    return {
      valid: false,
      showModal: true,
      showPassword: false,
      socialMediaFlag: true,
      signUpDialog: false,
      loading: false,
      form: {
        email: "",
        password: "",
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
        mobileNo: [
          (v) => !!v || "Mobile number is required",
          (v) =>
            !(v && !/^[0-9]{8,10}$/.test(v)) || "Mobile Number is not valid",
        ],
        password: [(v) => !!v || "password is required"],
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
      this.$router.push("/dashboard");
      localStorage.setItem("data", data);
    },
  },
};
</script>

<style lang="scss">
.bgStyle {
  background-image: url("../assets/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}
.login-sub-card {
  border-radius: 0px 0px 0px 0px !important;
  margin: auto !important;
  //   border: 1px solid #283959 !important;
}
.login-card {
  margin: 15px;
  //   .v-sheet.v-card:not(.v-sheet--outlined) {
  //     box-shadow: none !important;
  //   }
  .v-text-field > .v-input__control > .v-input__slot:after,
  .v-text-field > .v-input__control > .v-input__slot:before {
    border: 1px solid #283959 !important;
  }
}
.login-dialog {
  border-radius: 10px !important;
}

.login-text {
  color: #283959 !important;
}

.custom-login input::placeholder {
  color: #283959 !important;
  opacity: 1;
}
.custom-login input {
  color: #283959 !important;
}
@media only screen and (min-width: 960px) {
  .login-sub-card {
    border-radius: 4px !important;
    box-shadow: none !important;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    max-height: 540px !important;
    justify-content: center !important;
    border: 1px solid #283959;
  }
}
@media only screen and (max-width: 280px) {
  .login-sub-card {
    height: 300px;
    width: 180px !important;
  }
}
@media only screen and (max-width: 320px) {
  .login-sub-card {
    height: 350px;
    width: 300px !important;
  }
}
</style>
