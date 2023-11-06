<template>
  <div class="centered-container">
    <div class="card shadow main-welcome">
      <div>
        <h1 class="text-center color-blue outfit-bold login-text my-3">
          <span class="red-asterisk">Global</span> RBI
        </h1>
      </div>
      <div class="card-body px-lg-5 py-lg-5 text-center">
        <div class="text-center my-4">
          <h2 style="color: black" class="animated-text">
            Welcome To {{ domainName }} Portal!
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import constants from "../../constants";
export default {
  components: {
  },
  data() {
    return {
      domainName: constants.domain,
    };
  },
};
</script>

<style>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main-welcome {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  border: 5px solid black;
  box-shadow: 0 0 50px #ccc;
  min-height: 150px;
}

@media only screen and (min-width: 768px) {
  .animated-text {
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid transparent;
    animation: animateText 4s steps(20) infinite;
    animation-delay: 0.5s;
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .main-welcome {
    width: 300px;
  }
}
@media only screen and (min-width: 275px) and (max-width: 320px) {
  .main-welcome {
    width: 250px !important;
  }
}

@keyframes animateText {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
}
</style>
