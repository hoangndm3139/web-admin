
export enum MENU {
  MANAGE_USER = "Quản lý nhân viên",
  MANAGE_SALARY = "Quản lý lương",
  MANAGE_CHECKIN = "Quản lý chấm công",
  MANAGE_ROOM = "Quản lý phòng ban",
  MANAGE_MODE = "Quản lý chế độ",
  MANAGE_SENSE = "Quản lý ý thức",
  LOGOUT = "Đăng xuất",
}
export interface IMenuConfig {
  text: MENU;
  icon?: string;
  onClick: () => void;
}
