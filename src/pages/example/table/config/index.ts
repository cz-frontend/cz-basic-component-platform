/**
 * 表哥配置
 */
import type { TableOptions } from "@/base-ui/CzTable/src/types";

export const tableOptions: TableOptions[] = [
  {
    prop: "id",
    width: "130px",
    label: "用户ID",
    slot: "link",
  },
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "date",
    label: "日期",
    slot: "date",
    editable: true,
  },

  {
    prop: "status",
    label: "用户状态",
    slot: "status",
  },
  {
    prop: "address",
    label: "地址",
    editable: true,
  },
  {
    label: "操作",
    action: true,
  },
];
