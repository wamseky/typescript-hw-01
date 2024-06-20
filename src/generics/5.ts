export enum UserRole {
    admin = "admin",
    editor = "editor",
    guest = "guest",
  }
  
  type UserRoleDecr = Record<UserRole, string>;
  
  const RoleDescription: UserRoleDecr = {
    [UserRole.admin]: "Admin User",
    [UserRole.editor]: "Editor User",
    [UserRole.guest]: "Guest User",
  };
  
  console.log(RoleDescription);