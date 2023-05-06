export interface IUser {
  email: string | null;
  password: string | null;
}

export interface IUser {
  email: string | null;
  password: string | null;
}

interface IEducation {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: [];
  officeEmail: string;
  sector: string;
}

interface IGuarantor {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

interface IProfile {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

interface ISocials {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface IUserData {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: IEducation;
  email: string;
  guarantor: IGuarantor;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: IProfile;
  socials: ISocials;
  userName: string;
}
