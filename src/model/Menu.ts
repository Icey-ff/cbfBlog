export default interface MenuItem {
  to: string,
  icon: string,
  text: string
}


export const menu = [
  {
    to: "/home",
    icon: "el-icon-house",
    text: "首页"
  } as MenuItem,
  {
    to: "/pigeonhole",
    icon: "el-icon-edit",
    text: "归档"
  } as MenuItem,
  {
    to: "/category",
    icon: "el-icon-folder",
    text: "分类"
  } as MenuItem,
  {
    to: "/about",
    icon: "el-icon-user",
    text: "关于"
  } as MenuItem,
]