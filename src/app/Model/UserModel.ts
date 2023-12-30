export interface UserModel {
  userId: number;
  companyId: number;
  userRoleId: number;
  name: string;
  normalizedName: string;
  email: string;
  normalizedEmail: string;
  isEmailConfirmed: boolean;
  password: string;
  mobileNumber: string;
  isMobileNumberConfirmed: boolean;
  isActive: boolean;
  isDeleted: boolean;
  createdBy: number;
  createdOn: string | null;
  updatedBy: number;
  updatedOn: string | null;
}

export interface userFormModel {
  userId?: number;
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  userRoleId: number | "";
}
