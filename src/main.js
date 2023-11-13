/* eslint-disable vue/multi-word-component-names */
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import InputText from "primevue/inputtext";
import BadgeDirective from "primevue/badgedirective";
import ToastService from "primevue/toastservice";
import ProgressBar from "primevue/progressbar";
import Avatar from "primevue/avatar";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import Card from "primevue/card";
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import RadioButton from "primevue/radiobutton";
import Divider from "primevue/divider";
import Panel from "primevue/panel";
import Paginator from "primevue/paginator";
import Checkbox from "primevue/checkbox";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Sidebar from "primevue/sidebar";
import Carousel from "primevue/carousel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
import TieredMenu from "primevue/tieredmenu";
import Chips from "primevue/chips";
import Chip from "primevue/chip";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmationService from "primevue/confirmationservice";
import InputNumber from "primevue/inputnumber";
import Textarea from "primevue/textarea";
import Rating from "primevue/rating";
import InputSwitch from "primevue/inputswitch";
import PanelMenu from "primevue/panelmenu";
import Toolbar from "primevue/toolbar";
import FileUpload from "primevue/fileupload";
import SelectButton from "primevue/selectbutton";
import ProgressSpinner from "primevue/progressspinner";
import Tooltip from "primevue/tooltip";
import TreeTable from "primevue/treetable";
import Badge from "primevue/badge";
import Skeleton from "primevue/skeleton";


const app = createApp(App);
app.use(router);
app.use(ToastService);
app.use(ConfirmationService);
app.use(PrimeVue, { ripple: true });
app.component("TreeTable", TreeTable);
app.component("Toolbar", Toolbar);
app.component("InputNumber", InputNumber);
app.component("Calendar", Calendar);
app.component("DataTable", DataTable);
app.component("FileUpload", FileUpload);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("InputSwitch", InputSwitch);
app.component("Row", Row);
app.component("Divider", Divider);
app.component("AccordionTab", AccordionTab);
app.component("Sidebar", Sidebar);
app.component("Carousel", Carousel);
app.component("Accordion", Accordion);
app.component("TabView", TabView);
app.component("Panel", Panel);
app.component("SelectButton", SelectButton);
app.component("TabPanel", TabPanel);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("ProgressBar", ProgressBar);
app.component("Avatar", Avatar);
app.component("RadioButton", RadioButton);
app.component("TieredMenu", TieredMenu);
app.component("ConfirmDialog", ConfirmDialog);
app.component("Dropdown", Dropdown);
app.component("MultiSelect", MultiSelect);
app.component("Card", Card);
app.component("Dialog", Dialog);
app.component("Paginator", Paginator);
app.component("Checkbox", Checkbox);
app.component("Chips", Chips);
app.component("Textarea", Textarea);
app.component("Rating", Rating);
app.component("Chip", Chip);
app.component("ProgressSpinner", ProgressSpinner);
app.component("PanelMenu", PanelMenu);
app.component("Badge", Badge);
app.component("Skeleton", Skeleton);
app.directive("badge", BadgeDirective);
app.directive("tooltip", Tooltip);


app.mount("#app");

