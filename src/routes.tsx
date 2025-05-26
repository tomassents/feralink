import React from "react";
import { Navigate } from "react-router-dom";

import async from "@/components/Async";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "@/layouts/Auth";
import AuthCoverLayout from "@/layouts/AuthCover";
import ErrorLayout from "@/layouts/Error";
import DashboardLayout from "@/layouts/Dashboard";
import DocLayout from "@/layouts/Doc";
import PresentationLayout from "@/layouts/Presentation";

// Guards
import AuthGuard from "@/components/guards/AuthGuard";
import RoleGuard from "@/components/guards/RoleGuard";

// Auth components
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import ResetPassword from "@/pages/auth/ResetPassword";
import Page404 from "@/pages/auth/Page404";
import Page500 from "@/pages/auth/Page500";

// Components
import Accordion from "@/pages/components/Accordion";
import Alerts from "@/pages/components/Alerts";
import Avatars from "@/pages/components/Avatars";
import Badges from "@/pages/components/Badges";
import Buttons from "@/pages/components/Buttons";
import Cards from "@/pages/components/Cards";
import Chips from "@/pages/components/Chips";
import Dialogs from "@/pages/components/Dialogs";
import Lists from "@/pages/components/Lists";
import Menus from "@/pages/components/Menus";
import Pagination from "@/pages/components/Pagination";
import Progress from "@/pages/components/Progress";
import Snackbars from "@/pages/components/Snackbars";
import Tooltips from "@/pages/components/Tooltips";

// Form components
import SelectionCtrls from "@/pages/forms/SelectionControls";
import Selects from "@/pages/forms/Selects";
import TextFields from "@/pages/forms/TextFields";

// Icon components
import MaterialIcons from "@/pages/icons/MaterialIcons";

// Page components
import Blank from "@/pages/pages/Blank";
import InvoiceDetails from "@/pages/pages/InvoiceDetails";
import InvoiceList from "@/pages/pages/InvoiceList";
import Orders from "@/pages/pages/Orders";
import Products from "@/pages/pages/Products";
import Pricing from "@/pages/pages/Pricing";
import Settings from "@/pages/pages/Settings";
import Projects from "@/pages/pages/Projects";
import Chat from "@/pages/pages/Chat";

// Table components
import SimpleTable from "@/pages/tables/SimpleTable";
import AdvancedTable from "@/pages/tables/AdvancedTable";

// Documentation
import Welcome from "@/pages/docs/Welcome";
import GettingStarted from "@/pages/docs/GettingStarted";
import Routing from "@/pages/docs/Routing";
import Auth0 from "@/pages/docs/auth/Auth0";
import Cognito from "@/pages/docs/auth/Cognito";
import Firebase from "@/pages/docs/auth/Firebase";
import JWT from "@/pages/docs/auth/JWT";
import Guards from "@/pages/docs/Guards";
import EnvironmentVariables from "@/pages/docs/EnvironmentVariables";
import Deployment from "@/pages/docs/Deployment";
import Theming from "@/pages/docs/Theming";
import APICalls from "@/pages/docs/APICalls";
import Redux from "@/pages/docs/Redux";
import Internationalization from "@/pages/docs/Internationalization";
import ESLintAndPrettier from "@/pages/docs/ESLintAndPrettier";
import Support from "@/pages/docs/Support";
import Changelog from "@/pages/docs/Changelog";

// Landing
import Landing from "@/pages/presentation/Landing";

// Protected routes
import ProtectedPage from "@/pages/protected/ProtectedPage";

// Dashboard components
import Default from "@/pages/dashboards/Default";
const Analytics = async(() => import("@/pages/dashboards/Analytics"));
const SaaS = async(() => import("@/pages/dashboards/SaaS"));

// Form components
const Pickers = async(() => import("@/pages/forms/Pickers"));
const Editors = async(() => import("@/pages/forms/Editors"));
const Formik = async(() => import("@/pages/forms/Formik"));

// Icon components
const LucideIcons = async(() => import("@/pages/icons/LucideIcons"));
const Profile = async(() => import("@/pages/pages/Profile"));
const Tasks = async(() => import("@/pages/pages/Tasks"));
const Calendar = async(() => import("@/pages/pages/Calendar"));

// Table components
const DataGrid = async(() => import("@/pages/tables/DataGrid"));

// Chart components
const Chartjs = async(() => import("@/pages/charts/Chartjs"));
const ApexCharts = async(() => import("@/pages/charts/ApexCharts"));

// Maps components
const VectorMaps = async(() => import("@/pages/maps/VectorMaps"));

// Admin pages
const AdminDashboard = async(() => import("@/pages/admin/Dashboard"));
const AdminUsers = async(() => import("@/pages/admin/Users"));
const AdminClinics = async(() => import("@/pages/admin/Clinics"));
const AdminSettings = async(() => import("@/pages/admin/Settings"));

// Clinic pages
const ClinicDashboard = async(() => import("@/pages/clinic/Dashboard"));
const ClinicDoctors = async(() => import("@/pages/clinic/Doctors"));
const ClinicAppointments = async(() => import("@/pages/clinic/Appointments"));
const ClinicSettings = async(() => import("@/pages/clinic/Settings"));

// Doctor pages
const DoctorDashboard = async(() => import("@/pages/doctor/Dashboard"));
const DoctorPatients = async(() => import("@/pages/doctor/Patients"));
const DoctorAppointments = async(() => import("@/pages/doctor/Appointments"));
const DoctorMedicalRecords = async(() => import("@/pages/doctor/MedicalRecords"));

// Client pages
const ClientDashboard = async(() => import("@/pages/client/Dashboard"));
const ClientPets = async(() => import("@/pages/client/Pets"));
const ClientAppointments = async(() => import("@/pages/client/Appointments"));
const ClientMedicalRecords = async(() => import("@/pages/client/MedicalRecords"));

const routes = [
  {
    path: "/",
    element: <AuthCoverLayout />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <AuthGuard>
        <RoleGuard roles={["admin"]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
      {
        path: "clinics",
        element: <AdminClinics />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
    ],
  },
  {
    path: "clinic",
    element: (
      <AuthGuard>
        <RoleGuard roles={["clinic"]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ClinicDashboard />,
      },
      {
        path: "doctors",
        element: <ClinicDoctors />,
      },
      {
        path: "appointments",
        element: <ClinicAppointments />,
      },
      {
        path: "settings",
        element: <ClinicSettings />,
      },
    ],
  },
  {
    path: "doctor",
    element: (
      <AuthGuard>
        <RoleGuard roles={["doctor"]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <DoctorDashboard />,
      },
      {
        path: "patients",
        element: <DoctorPatients />,
      },
      {
        path: "appointments",
        element: <DoctorAppointments />,
      },
      {
        path: "medical-records",
        element: <DoctorMedicalRecords />,
      },
    ],
  },
  {
    path: "client",
    element: (
      <AuthGuard>
        <RoleGuard roles={["client"]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ClientDashboard />,
      },
      {
        path: "pets",
        element: <ClientPets />,
      },
      {
        path: "appointments",
        element: <ClientAppointments />,
      },
      {
        path: "medical-records",
        element: <ClientMedicalRecords />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="/dashboard/default" replace />,
      },
      {
        path: "default",
        element: <Default />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "saas",
        element: <SaaS />,
      },
    ],
  },
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "blank",
        element: <Blank />,
      },
    ],
  },
  {
    path: "projects",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Projects />,
      },
    ],
  },
  {
    path: "orders",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Orders />,
      },
    ],
  },
  {
    path: "products",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Products />,
      },
    ],
  },
  {
    path: "invoices",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <InvoiceList />,
      },
      {
        path: "detail",
        element: <InvoiceDetails />,
      },
    ],
  },
  {
    path: "tasks",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "calendar",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "auth-cover",
    element: <AuthCoverLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "error",
    element: <ErrorLayout />,
    children: [
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "components",
    element: <DashboardLayout />,
    children: [
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "alerts",
        element: <Alerts />,
      },
      {
        path: "avatars",
        element: <Avatars />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "chips",
        element: <Chips />,
      },
      {
        path: "dialogs",
        element: <Dialogs />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "menus",
        element: <Menus />,
      },
      {
        path: "pagination",
        element: <Pagination />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "snackbars",
        element: <Snackbars />,
      },
      {
        path: "tooltips",
        element: <Tooltips />,
      },
    ],
  },
  {
    path: "forms",
    element: <DashboardLayout />,
    children: [
      {
        path: "pickers",
        element: <Pickers />,
      },
      {
        path: "selection-controls",
        element: <SelectionCtrls />,
      },
      {
        path: "selects",
        element: <Selects />,
      },
      {
        path: "text-fields",
        element: <TextFields />,
      },
      {
        path: "editors",
        element: <Editors />,
      },
      {
        path: "formik",
        element: <Formik />,
      },
    ],
  },
  {
    path: "tables",
    element: <DashboardLayout />,
    children: [
      {
        path: "simple-table",
        element: <SimpleTable />,
      },
      {
        path: "advanced-table",
        element: <AdvancedTable />,
      },
      {
        path: "data-grid",
        element: <DataGrid />,
      },
    ],
  },
  {
    path: "icons",
    element: <DashboardLayout />,
    children: [
      {
        path: "material-icons",
        element: <MaterialIcons />,
      },
      {
        path: "lucide-icons",
        element: <LucideIcons />,
      },
    ],
  },
  {
    path: "charts",
    element: <DashboardLayout />,
    children: [
      {
        path: "chartjs",
        element: <Chartjs />,
      },
      {
        path: "apexcharts",
        element: <ApexCharts />,
      },
    ],
  },
  {
    path: "maps",
    element: <DashboardLayout />,
    children: [
      {
        path: "vector-maps",
        element: <VectorMaps />,
      },
    ],
  },
  {
    path: "documentation",
    element: <DocLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/documentation/welcome" replace />,
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
      {
        path: "getting-started",
        element: <GettingStarted />,
      },
      {
        path: "routing",
        element: <Routing />,
      },
      {
        path: "auth/auth0",
        element: <Auth0 />,
      },
      {
        path: "auth/cognito",
        element: <Cognito />,
      },
      {
        path: "auth/firebase",
        element: <Firebase />,
      },
      {
        path: "auth/jwt",
        element: <JWT />,
      },
      {
        path: "guards",
        element: <Guards />,
      },
      {
        path: "environment-variables",
        element: <EnvironmentVariables />,
      },
      {
        path: "deployment",
        element: <Deployment />,
      },
      {
        path: "theming",
        element: <Theming />,
      },
      {
        path: "api-calls",
        element: <APICalls />,
      },
      {
        path: "redux",
        element: <Redux />,
      },
      {
        path: "internationalization",
        element: <Internationalization />,
      },
      {
        path: "eslint-and-prettier",
        element: <ESLintAndPrettier />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
  {
    path: "changelog",
    element: <DocLayout />,
    children: [
      {
        path: "",
        element: <Changelog />,
      },
    ],
  },
  {
    path: "private",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ProtectedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
