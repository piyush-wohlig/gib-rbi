<template>
  <div class="card">
    <div class="mobile-menu" v-if="props.position == 'sidebar'">
      <PanelMenu
        :model="sidebarMenu"
        class="w-full"
        :disabled="changePassword"
      />
    </div>
    <div v-else>
      <div
        class="skeleton-wrap p-2 ml-6 mt-5 custom-menu p-tieredmenu"
        v-if="showSkeleton"
      >
        <Skeleton class="mb-2 h-2rem"></Skeleton>
        <Skeleton class="mb-2 h-2rem"></Skeleton>
        <Skeleton class="mb-2 h-2rem"></Skeleton>
        <Skeleton class="mb-2 h-2rem"></Skeleton>
        <Skeleton class="mb-2 h-2rem"></Skeleton>
        <Skeleton class="mb-2 h-2rem"></Skeleton>
      </div>
      <TieredMenu
        v-if="!showSkeleton"
        class="ml-6 mt-5 custom-menu"
        :model="sidebarMenu"
        :disabled="changePassword"
        orientation="vertical"
        :exact="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const sidebarMenu = ref([]);
const props = defineProps(["position"]);

sidebarMenu.value = updateDataMapping();

const updateDataMapping = () => {
  const items = ref([
    {
      label: "User Management",
      icon: "pi pi-home",
      to: "/user-mangement",
    },
    {
      label: "Organization",
      icon: "pi pi-home",
      to: "/organization",
    },
    {
      label: "location",
      icon: "pi pi-home",
      to: "/location",
    },
    {
      label: "Department",
      icon: "pi pi-home",
      to: "/department",
    },
    {
      label: "Class/Cadre",
      icon: "pi pi-home",
      to: "/class-cadre",
    },
    {
      label: "Policy",
      icon: "pi pi-home",
      to: "/policy",
    },
    {
      label: "Nodal Officer Mapping",
      icon: "pi pi-home",
      to: "/nodal-officer-mapping",
    },
  ]);

  if (props.position == "sidebar") {
    items.value;
  }
};
</script>

<style lang="scss" scoped>
:deep(.custom-menu) {
  border-radius: 20px;
}

:deep(.p-tieredmenu .p-menuitem > .p-menuitem-content) {
  border-radius: 20px !important;
}

:deep(.p-tieredmenu .p-menuitem-active > .p-submenu-list) {
  border-radius: 20px;
}

@media only screen and (max-width: 540px) {
  .p-megamenu {
    margin-top: 2rem !important;
    margin-left: 2rem !important;
    width: 10.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .p-megamenu {
    margin-top: 1rem !important;
    margin-left: 1.5rem !important;
    width: 10rem;
  }
}
</style>
