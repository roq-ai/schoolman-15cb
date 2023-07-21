const mapping: Record<string, string> = {
  attendances: 'attendance',
  'progress-reports': 'progress_report',
  schools: 'school',
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
