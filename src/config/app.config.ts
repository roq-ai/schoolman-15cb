interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: [],
  tenantRoles: ['School Administrator', 'Teacher', 'Support Staff'],
  tenantName: 'School',
  applicationName: 'SchoolMan',
  addOns: ['chat', 'notifications', 'file'],
};
