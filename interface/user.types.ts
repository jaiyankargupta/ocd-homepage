export interface UserProfile {
  // user fields
  name: string;
  email: string;
  branch: string;
  graduationYear: string;
  photo: string;
  role: UserRoles;
  socialAccounts: Socials;

  // security fields
  id: string;
  token: string;
  userVerified: boolean;
}

export interface Socials {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
  website: string;
}

enum UserRoles {
  ADMIN = "admin",
  USER = "user",
  MEMBERS = "members",
}
