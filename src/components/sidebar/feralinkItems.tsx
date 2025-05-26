import { SidebarItemsType } from "@/types/sidebar";

import {
  Users,
  Building2,
  Stethoscope,
  UserCircle,
  LayoutDashboard,
  UserPlus,
  Building,
  HeartPulse,
  Dog,
  PawPrint,
  Settings,
  ClipboardList,
} from "lucide-react";

// Menú de Administración
const adminSection = [
  {
    href: "/admin",
    icon: LayoutDashboard,
    title: "Administración",
    children: [
      {
        href: "/admin/users",
        icon: UserPlus,
        title: "Gestión de Usuarios",
      },
      {
        href: "/admin/clinics",
        icon: Building,
        title: "Gestión de Veterinarias",
      },
      {
        href: "/admin/settings",
        icon: Settings,
        title: "Configuración",
      },
    ],
  },
] as SidebarItemsType[];

// Menú de Veterinaria
const clinicSection = [
  {
    href: "/clinic",
    icon: Building2,
    title: "Centro Veterinario",
    children: [
      {
        href: "/clinic/doctors",
        icon: Stethoscope,
        title: "Gestión de Médicos",
      },
      {
        href: "/clinic/appointments",
        icon: ClipboardList,
        title: "Gestión de Citas",
      },
      {
        href: "/clinic/settings",
        icon: Settings,
        title: "Configuración",
      },
    ],
  },
] as SidebarItemsType[];

// Menú de Médico
const doctorSection = [
  {
    href: "/doctor",
    icon: Stethoscope,
    title: "Médico Veterinario",
    children: [
      {
        href: "/doctor/patients",
        icon: Dog,
        title: "Gestión de Pacientes",
      },
      {
        href: "/doctor/appointments",
        icon: ClipboardList,
        title: "Mis Citas",
      },
      {
        href: "/doctor/medical-records",
        icon: HeartPulse,
        title: "Historias Clínicas",
      },
    ],
  },
] as SidebarItemsType[];

// Menú de Cliente
const clientSection = [
  {
    href: "/client",
    icon: UserCircle,
    title: "Cliente",
    children: [
      {
        href: "/client/pets",
        icon: PawPrint,
        title: "Mis Mascotas",
      },
      {
        href: "/client/appointments",
        icon: ClipboardList,
        title: "Mis Citas",
      },
      {
        href: "/client/medical-records",
        icon: HeartPulse,
        title: "Historias Clínicas",
      },
    ],
  },
] as SidebarItemsType[];

const navItems = [
  {
    title: "Administración",
    pages: adminSection,
  },
  {
    title: "Veterinaria",
    pages: clinicSection,
  },
  {
    title: "Médico",
    pages: doctorSection,
  },
  {
    title: "Cliente",
    pages: clientSection,
  },
];

export default navItems; 