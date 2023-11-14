<template>
  <div class="below-header-part flex">
    <div class="left-container hidden lg:block">
      <div class="user-components">
        <CommonHeader />
      </div>
    </div>
    <div class="content-wrapper">
      <div class="main-container profile-page">
        <div class="card flex justify-content-start mt-4 mb-5">
          <Button
            v-bind:class="{ 'active-button': activeButton === 1 }"
            class="buttonStyle mx-2 text-xs"
            label="Add"
            icon="pi pi-plus"
            iconPos="right"
          />
          <Button
            v-bind:class="{ 'active-button': activeButton === 2 }"
            class="buttonStyle mx-2 text-xs"
            label="View"
            icon="pi pi-eye"
            iconPos="right"
          />
          <Button
            v-bind:class="{ 'active-button': activeButton === 3 }"
            class="buttonStyle mx-2 text-xs"
            label="Import"
            icon="pi pi-download"
            iconPos="right"
          />
        </div>
        <div class="heading mt-2 ml-2">Create User</div>
        <form @submit="updateUserData">
          <div class="mb-4">
            <div class="card flex flex-wrap p-fluid">
              <div class="col-12 md:col-4 mt-5">
                <span class="p-input-icon-right">
                  <span class="p-float-label">
                    <InputText
                      id="Uname"
                      v-model="firstName"
                      type="text"
                      autocomplete="off"
                      class="inputtext"
                      aria-describedby="text-error"
                    />
                    <label for="Uname" class="text-xs required">Name</label>
                  </span>
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-input-icon-right">
                  <span class="p-float-label">
                    <InputText
                      id="primaryEmailId"
                      v-model="primaryEmailId"
                      type="text"
                      autocomplete="off"
                      class="inputtext"
                      aria-describedby="text-error"
                    />
                    <label for="firstName" class="text-xs required"
                      >Email ID</label
                    >
                  </span>
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-input-icon-right">
                  <span class="p-float-label">
                    <InputText
                      id="optionalEmailId"
                      v-model="emailId"
                      type="text"
                      autocomplete="off"
                      class="inputtext"
                      aria-describedby="text-error"
                    />
                    <label for="optionalEmailId" class="text-xs"
                      >Email ID 2</label
                    >
                  </span>
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-input-icon-right">
                  <span class="p-float-label">
                    <InputText
                      id="employeeId"
                      class="inputtext"
                      v-model="lastName"
                      type="text"
                      autocomplete="off"
                      aria-describedby="text-error"
                    />
                    <label for="lastName" class="text-xs">Employee ID</label>
                  </span>
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-float-label">
                  <Dropdown
                    v-model="organizationData"
                    :options="organizationVal"
                    optionLabel="title"
                    placeholder="Select Status"
                    aria-describedby="text-error"
                    class="dropdown"
                  />
                  <label for="maritalStatusView" class="text-xs required"
                    >Organization</label
                  >
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-float-label p-datepicker-trigger">
                  <Calendar
                    class="inputtext dob-span"
                    id="birth_date"
                    v-model="userDOB"
                    dateFormat="dd-M-yy"
                    aria-describedby="text-error"
                  />
                  <label for="birth_date" class="text-xs">Date of Birth</label>
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-float-label">
                  <InputText
                    id="mobile_number"
                    v-model="mobile_number"
                    class="inputtext"
                    type="text"
                    autocomplete="off"
                    aria-describedby="text-error"
                    v-mobile-number
                  />
                  <label for="mobile_number" class="text-xs"
                    >Mobile number</label
                  >
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-input-icon-right">
                  <span class="p-float-label">
                    <InputText
                      id=" panCardNo"
                      v-model="panCardNo"
                      type="text"
                      autocomplete="off"
                      class="inputtext"
                      aria-describedby="text-error"
                    />
                    <label for="panCardNo" class="text-xs">PAN Number</label>
                  </span>
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-input-icon-right">
                  <span class="p-float-label">
                    <InputText
                      id="address"
                      class="inputtext"
                      v-model="lastName"
                      type="text"
                      autocomplete="off"
                      :class="{ 'p-invalid': lastNameError }"
                      aria-describedby="text-error"
                    />
                    <label for="address" class="text-xs">Address</label>
                  </span>
                </span>
              </div>
              <div class="col-12 md:col-4 mt-5">
                <span class="p-input-icon-right">
                  <span class="p-float-label">
                    <InputText
                      id="aadharNo"
                      v-model="aadharNo"
                      type="text"
                      autocomplete="off"
                      class="inputtext"
                      aria-describedby="text-error"
                      v-numbers-only
                    />
                    <label for="aadharNo" class="text-xs">Aadhaar Number</label>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="heading mt-3 mb-1 ml-2">Other Details</div>
          <div class="mb-4">
            <div class="card flex flex-wrap p-fluid">
              <div class="col-12 md:col-6 mt-5">
                <span class="p-float-label">
                  <Dropdown
                    id="departmentData"
                    v-model="departmentData"
                    :options="departmentVal"
                    optionLabel="title"
                    placeholder="Select Status"
                    aria-describedby="text-error"
                    class="dropdown"
                  />
                  <label for="departmentData" class="text-xs">Department</label>
                </span>
              </div>
              <div class="col-12 md:col-6 mt-5">
                <span class="p-float-label">
                  <Dropdown
                    id="locationData"
                    v-model="locationData"
                    :options="locationVal"
                    optionLabel="title"
                    placeholder="Select Status"
                    aria-describedby="text-error"
                    class="dropdown"
                  />
                  <label for="locationData" class="text-xs">Location</label>
                </span>
              </div>
              <div class="col-12 md:col-6 mt-5">
                <span class="p-float-label">
                  <Dropdown
                    id="roleData"
                    v-model="roleData"
                    :options="roleVal"
                    optionLabel="title"
                    placeholder="Select Status"
                    aria-describedby="text-error"
                    class="dropdown"
                  />
                  <label for="roleData" class="text-xs">Role</label>
                </span>
              </div>
              <div class="col-12 md:col-6 mt-5">
                <span class="p-float-label">
                  <Dropdown
                    id="classData"
                    v-model="classData"
                    :options="classVal"
                    optionLabel="title"
                    placeholder="Select Status"
                    aria-describedby="text-error"
                    class="dropdown"
                  />
                  <label for="classData" class="text-xs">Class</label>
                </span>
              </div>
            </div>
          </div>
        </form>
        <div class="mt-5">
          <div class="disclaimer"><span>*</span> Indicates Required Field</div>
          <div class="btn-wrapper">
            <Button class="save-btn ml-5" type="submit" label="Save" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <commonFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CommonFooter from "@/common/footer/CommonFooter.vue";
import CommonHeader from "@/common/header/CommonHeader.vue";

const activeButton = ref(1);
// eslint-disable-next-line no-unused-vars
const setActiveButton = (buttonNumber) => {
  activeButton.value = buttonNumber;
};

const organizationVal = ref([
  { title: "Wohlig", value: "WOHLIG" },
  { title: "Endovia", value: "ENDOVIA" },
  { title: "Kiln-Era", value: "Kiln-Era" },
]);

const departmentVal = ref([
  { title: "RTO DEPT", value: "RTO_DEPT" },
  { title: "INSPECTION DEPT", value: "INSPECTION_DEPT" },
  { title: "CARD ISSUING DEPT", value: "CARD_ISSUING_DEPT" },
]);

const roleVal = ref([
  { title: "EMPLOYEE", value: "EMPLOYEE" },
  { title: "SUPER ADMIN", value: "SUPERADMIN" },
  { title: "ACCOUNT MANAGER", value: "ACCOUNTMANAGER" },
  { title: "NODAL OFFICER", value: "NODALOFFICER" },
]);

const locationVal = ref([
  { title: "Mumbai", value: "Mumbai" },
  { title: "Pune", value: "Pune" },
  { title: "Hyderabad", value: "Hyderabad" },
  { title: "Bangalore", value: "Bangalore" },
]);

const classVal = ref([
  { title: "CLASS I", value: 1 },
  { title: "CLASS II", value: 2 },
  { title: "CLASS III", value: 3 },
  { title: "CLASS IV", value: 4 },
]);
</script>

<style lang="scss" scoped>
.buttonStyle {
  background-color: #e0f6f7;
  color: #263238;
  border-radius: 5px;
  border: 0px solid;
  padding: 12px 24px;
}
.active-button {
  background-color: #009da4;
  color: white;
}
.content-wrapper {
  max-width: 1600px;
  padding: 0 20px;
  padding-top: 13%;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
}
.dob-span {
  padding: 4px !important;
}
.card-wrapper {
  background: $bg-color-input;
  padding: 25px;
  border-radius: 20px;
}

.main-container {
  margin: auto;
  font-family: $poppins;
  font-style: normal;
  color: $font-blue;
  .heading {
    font-weight: 700;
    font-size: $font-24;
    color: $font-dark-blue;
  }
  .username {
    margin-bottom: 17px;
  }

  .btn-wrapper {
    margin-top: 10px;
    justify-content: flex-end;
    align-items: flex-end;
    background: none;
    display: flex;
    font-size: $font-18;
    color: black;

    .p-button {
      color: $dark-blue;
      background: none;
      padding: 0.5rem 6rem;
      border: 1px solid $dark-blue;
      border-radius: 5px;
    }
    .save-btn {
      color: $font-white;
      background: $dark-blue;
    }
  }
}

:deep(.p-accordion-content) {
  padding: 0;
}

:deep(.p-accordion .p-accordion-content) {
  border: none;
  background: transparent;
}

:deep(
    .p-accordion
      .p-accordion-header:not(.p-disabled).p-highlight:hover
      .p-accordion-header-link
  ),
:deep(
    .p-accordion
      .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
      .p-accordion-header-link
  ),
:deep(
    .p-accordion
      .p-accordion-header:not(.p-disabled)
      .p-accordion-header-link:focus
  ) {
  background: transparent;
  color: $font-blue;
  box-shadow: none;
}

:deep(.p-accordion-header) {
  position: relative;
}

:deep(
    .p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link
  ) {
  border: none;
  background: transparent;
  padding: 16px 0 24px 0;
  color: $font-blue;
  font-weight: 500;
  font-size: 18px;
  border-bottom: 1px solid #d1d1d1;

  .p-accordion-header-text {
    font-weight: normal;
  }
}

.modal-content-wrap {
  background: $bg-color-input;
  padding: 32px;
  .inputtext,
  .p-dropdown {
    background: white;
  }
  .p-dropdown {
    padding-left: 10px;

    :deep(.p-dropdown-label) {
      font-size: 12px;
      padding: 0;
    }
  }

  .btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-width: 210px;
      height: 45px;
      background: $dark-blue;
      width: 100%;
      border-radius: 5px;
      border: none;
    }
  }
}

.number-wrapper {
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background: $bg-color-primary-5;
}

.add-details-btn {
  border: 1px solid $font-blue;
  border-radius: 20px;
  padding: 6px 7px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: $font-blue;
  background: $bg-color-light;
  margin-top: 10px;

  i {
    margin-right: 5px;
  }
}

.inputtext,
.p-dropdown,
.p-calendar {
  // width: 450px;
  padding: 15px 20px;
  display: inline-block;
  background-color: $bg-color-input;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: $font-14;
  border: none;
}

.required:after {
  content: " *";
  color: $error-red;
}

.dropdown {
  padding: 6px 20px;
  display: inline-block;
  background-color: $bg-color-input;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: $font-14;
  border: none;
}

.left-container {
  margin-right: 32px;
  max-width: 275px;
}

@media only screen and (max-height: 768px) and (min-width: 768px) {
  .content-wrapper {
    padding-right: 35px;
  }
}

@media only screen and (max-width: 599px) {
  .content-wrapper {
    margin: 20px auto;
  }
  .main-container {
    .btn-wrapper {
      .p-button {
        padding: 8px 17%;
      }
    }
  }
}
</style>
