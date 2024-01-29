import { icons } from '@Assets'




export const HOME_PATH = {
  DASHBOARD: "/admin",
  COMPANY: "/company",
  CREATE_COMPANY: "/create-company",
  COMPANY_INFO: "/company-info",
  ADD_USER: "/add-user",
  ISSUE_DETAILS: "/issue-details",
  ADD_REFERENCE_TICKET: '/add-reference-ticket',
  ADD_REFERENCE_TASK: '/add-reference-task',
  ISSUE_TICKET: '/issue-ticket',
  CREATE_BROAD_CAST: '/create-broad-cast',
  ADD_TASK: '/add-task',
  ADD_SUB_TASK: '/add-sub-task',
  TASK_DETAILS: '/task-details',
  TICKET_DETAILS: '/ticket-details',
  ADD_TICKET: './add-ticket',
  EMPLOYEE_TIME_SHEET: './employee-time-sheet',
  GROUPS: './groups'
}

export const ROUTES = {
  'auth-module': {
    login: '/login',
    otp: '/otp',
    splash: '/splash',
    register: '/register',
    landing: '/'
  },
  'task-module': {
    tasks: '/tasks',
    'tasks-details': '/tasks-details',
    'reference-task': '/reference-task',
    'add-task': '/add-task',
    'add-sub-task': '/add-sub-task',
  },
  'ticket-module': {
    tickets: '/tickets',
    'tickets-details': '/tickets-details',
    'add-ticket': '/add-ticket',
    'reference-ticket': '/reference-ticket'
  },
  'user-company-module': {
    companies: '/companies',
    "company-details": '/company-details',
    "add-company": '/add-company',
    "add-user": '/add-user',
    "employee-time-sheet": '/employee-time-sheet',
    profile: '/profile',
    setting: '/setting',
    employee: '/employee-sheet',
    'virtual-conference': '/virtual-conference',
    'video-conference': '/video-conference',
    "scheduled-meeting-list": '/scheduled-meeting-list',
    "schedule-meeting": '/schedule-meeting',
    'my-portfolio': '/my-portfolio',
    'admin-feeds': '/admin-feeds',
    Events: '/events',
    Groups: '/groups',
    'add-event': '/add-event'
  },
  'message-module': {
    broadcast: '/broadcast',
    'create-broadcast': '/create-broadcast',
  }
}

export * from "./RequireAuth";
export * from "./RequireHome";
