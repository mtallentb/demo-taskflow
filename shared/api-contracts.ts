// API endpoint contracts
export const API_ENDPOINTS = {
  // Tasks
  GET_TASKS: '/api/tasks',
  CREATE_TASK: '/api/tasks',
  UPDATE_TASK: '/api/tasks/:id',
  DELETE_TASK: '/api/tasks/:id',
  
  // Auth
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REFRESH: '/api/auth/refresh',
  PROFILE: '/api/auth/profile',
} as const;