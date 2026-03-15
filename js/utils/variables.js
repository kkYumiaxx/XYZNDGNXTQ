// ======================================
// 全局 JS 变量 —— variables.js
// ======================================
export const VARS = {
  // ========== 颜色系统 ==========
  // 主色调
  PRIMARY_COLOR: '#4361ee',
  PRIMARY_LIGHT: '#5a74f0',
  PRIMARY_DARK: '#3a56d4',

  // 辅助色
  SUCCESS_COLOR: '#10b981',
  WARNING_COLOR: '#f59e0b',
  DANGER_COLOR: '#ef4444',
  INFO_COLOR: '#3b82f6',

  // 文字颜色
  TEXT_COLOR: '#1e293b',
  TEXT_LIGHT: '#64748b',
  TEXT_GRAY: '#94a3b8',
  WHITE: '#ffffff',

  // 背景颜色
  BG_WHITE: '#ffffff',
  BG_LIGHT: '#f8fafc',
  BG_GRAY: '#e2e8f0',
  BG_DARK: '#1e293b',

  // 边框颜色
  BORDER_COLOR: '#e2e8f0',
  BORDER_LIGHT: '#f1f5f9',

  // 状态色
  UNREAD_BG: '#f0f5ff',
  UNREAD_DOT: '#ef4444',
  WEAK_COLOR: '#ef4444',
  MEDIUM_COLOR: '#f59e0b',
  GOOD_COLOR: '#10b981',

  // ========== 间距系统 ==========
  SPACING_XS: 4,
  SPACING_SM: 8,
  SPACING_MD: 16,
  SPACING_LG: 24,
  SPACING_XL: 32,

  // ========== 字体系统 ==========
  FONT_SIZE_XS: 12,
  FONT_SIZE_SM: 14,
  FONT_SIZE_BASE: 16,
  FONT_SIZE_LG: 18,
  FONT_SIZE_XL: 20,
  FONT_SIZE_2XL: 24,

  // ========== 圆角与阴影 ==========
  BORDER_RADIUS_SM: 4,
  BORDER_RADIUS_MD: 8,
  BORDER_RADIUS_LG: 12,
  BORDER_RADIUS_FULL: '50%',

  SHADOW_SM: '0 2px 4px rgba(0, 0, 0, 0.05)',
  SHADOW_MD: '0 4px 6px rgba(0, 0, 0, 0.07)',

  // ========== 过渡动画 ==========
  TRANSITION_BASE: 'all 0.2s ease'
};

// 也可以直接挂载到 window，方便非模块化 JS 使用
window.VARS = VARS;

// 全局变量文件
// 作用：存放整个校园学习管理器共用的常量、配置、文字

const APP_INFO = {
  // 系统名称
  APP_NAME: "校园学习管理器",
  APP_TITLE: "校园学习管理器（学生端）",
  APP_SUBTITLE: "校园学习管理一站式服务",

  // 版本
  VERSION: "1.0.0",
  AUTHOR: "学生端系统",
  COPYRIGHT: "© 2026 校园学习管理器"
};

const CONFIG = {
   // ====================
   // 登录页相关
   // ====================
   LOGIN: {
     REMEMBER_TEXT: "记住密码",
     FORGOT_PWD_TEXT: "忘记密码？",
     LOGIN_BTN_TEXT: "登录",
     NO_ACCOUNT_TEXT: "还没有账号？",
     GO_REGISTER_TEXT: "立即注册"
   },
   // ====================
   // 注册页相关
   // ==================== 
   REGISTER: {
     REGISTER_TITLE: "填写信息完成注册",
     REGISTER_BTN_TEXT: "注册",
     HAVE_ACCOUNT_TEXT: "已有账号？",
     GO_LOGIN_TEXT: "立即登录"
   },
   // ====================  
   // 验证规则
   // ====================
   VALIDATE_RULES = {
     NAME_EMPTY: "请输入真实姓名",
     USERID_EMPTY: "请输入学生帐号ID",
     PHONE_INVALID: "请输入有效的11位手机号（仅数字）",
     VERIFY_CODE_INVALID: "验证码格式错误（6位数字）",
     USERID_MIN_LENGTH: 1,
     PASSWORD_MIN_LENGTH: 6,
     PASSWORD_TOO_SHORT: "密码长度不能少于6位",
     PASSWORD_NOT_MATCH: "两次输入的密码不一致"
   },
   // ====================
   // 按钮文字
   // ====================
   BTN: {
     GET_VERIFY_CODE: "获取验证码"
   },
   // ====================
   // 页面标识
   // ====================
   PAGES = {
     LOGIN: "page-login",
     REGISTER: "page-register",
     HOME: "page-home",
     USER: "page-user",
     HELP: "page-help",
     LOGOUT: "page-logout"
   },
   // ==================== 
   // 接口/路径
   // ====================
   API = {
     BASE_URL: "",
     LOGIN: "/api/login",
     REGISTER: "/api/register",
     USER_INFO: "/api/user/info"
   },
   // ====================
   // 功能模块名称
   // ====================
   MODULES = {
     TASK: "校园学习事务管理",
     BOOK: "预约借书",
     USER_CENTER: "个人中心"
   },
   // ====================
   // 课表查询 / 自定义
   // ====================
   SCHEDULE: {
     TITLE: "课表查询/自定义",
     BTN_ADD: "自定义课程/换课",
     BTN_DOWNLOAD: "下载课表",
     MODAL_TITLE: "自定义课程",
     MODAL_SAVE: "保存",
     MODAL_CANCEL: "取消",
     // 星期选项
     WEEKDAYS: [
       { value: "", name: "全部" },
       { value: "Monday", name: "星期一" },
       { value: "Tuesday", name: "星期二" },
       { value: "Wednesday", name: "星期三" },
       { value: "Thursday", name: "星期四" },
       { value: "Friday", name: "星期五" }
     ],
     // 节次选项
     SECTIONS: [
       { value: "", name: "全部" },
       { value: "1", name: "第1节 (08:00-08:40)" },
       { value: "2", name: "第2节 (08:50-09:30)" },
       { value: "3", name: "第3节 (10:00-10:40)" },
       { value: "4", name: "第4节 (10:50-11:30)" },
       { value: "5", name: "第5节 (14:20-15:00)" },
       { value: "6", name: "第6节 (15:10-15:50)" },
       { value: "7", name: "第7节 (16:00-16:40)" },
       { value: "8", name: "第8节 (16:50-17:30)" }
     ]
   },
   // ====================
   // 成绩管理系统
   // ====================
   SCORE: {
     TITLE: "查看历史成绩",
     NO_DATA: "暂无记录",
     BTN_ANALYZE: "开始分析成绩",
     // 学期
     SEMESTERS: [
       { value: "", name: "全部" },
       { value: "the first semester", name: "第一学期" },
       { value: "the second semester", name: "第二学期" },
       { value: "the third semester", name: "第三学期" },
       { value: "the fourth semester", name: "第四学期" },
       { value: "the fifth semester", name: "第五学期" },
       { value: "the sixth semester", name: "第六学期" }
     ],
     // 考试类型
     EXAM_TYPES: [
       { value: "", name: "全部" },
       { value: "第一次月考", name: "第一次月考" },
       { value: "期中考", name: "期中考" },
       { value: "第二次月考", name: "第二次月考" },
       { value: "期末考", name: "期末考" }
     ],
     // 学科
     SUBJECTS: [
       { value: "", name: "全部" },
       { value: "Chinese", name: "语文" },
       { value: "math", name: "数学" },
       { value: "English", name: "英语" },
       { value: "physics", name: "物理" },
       { value: "chemistry", name: "化学" },
       { value: "biology", name: "生物" },
       { value: "politics", name: "政治" },
       { value: "history", name: "历史" },
       { value: "geography", name: "地理" }
     ],
     // 分析结果
     RESULT_TITLE: "📊 成绩统计结果",
     AVG: "平均分",
     TOTAL: "总分",
     PASS_COUNT: "及格科目数",
     WEAK: "薄弱/不及格科目",
     MEDIUM: "待提升科目",
     GOOD: "优势科目"
   },
   // ====================
   // 作业管理系统
   // ====================
   TASK: {
     TITLE: "作业管理系统",
     // 标签页
     TAB_RECEIVE: "接收作业",
     TAB_SUBMIT: "提交作业",
     TAB_RESULT: "查询批改结果",
     // 提交作业
     SELECT_TASK: "选择作业",
     YOUR_ANSWER: "你的答案/内容",
     SUBMIT_BTN: "提交作业"
   },
   // ====================
   // 图书借阅预约
   // ====================
   BOOK: {
     TITLE: "图书馆藏书查询",
     SEARCH_PLACEHOLDER: "输入书名/作者/ISBN查询",
     SEARCH_BTN: "搜索",
     // 图书分类
     CATEGORIES: [
       { value: "", name: "全部分类" },
       { value: "文学", name: "文学类" },
       { value: "理科", name: "理科类" },
       { value: "工科", name: "工科类" },
       { value: "社科", name: "社科类" },
       { value: "教辅", name: "教辅类" },
       { value: "艺术", name: "艺术类" },
       { value: "英语", name: "英语类" },
       { value: "法律", name: "法律类" },
       { value: "心理学", name: "心理学类" },
       { value: "政治", name: "政治类" },
       { value: "地理", name: "地理类" },
       { value: "信息技术", name: "电脑类" },
       { value: "其他", name: "其他类型" }
     ],
     // 标签页
     TAB_BORROW: "发起预约",
     TAB_RECORD: "我的预约记录",
     TAB_RENEW: "申请续借",
     // 表单文字
     SELECT_BOOK: "选择书籍(可多选)",
     RESERVE_NAME: "预约人姓名",
     CLASSROOM: "班级",
     RESERVE_PHONE: "联系电话",
     TAKE_DATE: "预计取书时间",
     SUBMIT_BORROW: "提交预约申请",
     // 提示
     EMPTY_TIP: "暂无预约记录"
   },
   // ====================
   // 个人中心
   // ====================
   USER: {
     // 标签栏
     TAB_INFO: "个人信息",
     TAB_MESSAGE: "消息通知",
     TAB_HELP: "帮助与反馈",
     TAB_LOGOUT: "退出登录",
     // 个人信息字段
     AVATAR: "头像",
     NICKNAME: "昵称",
     USER_ID: "帐号ID",
     PHONE: "手机号",
     PASSWORD: "密码",
     NAME: "姓名",
     CLASS: "班级",
     TEACHER: "班主任",
     STUDENT_ID: "学号",
     ROLE: "权限设置",
     // 按钮文字
     CHANGE_AVATAR: "更换头像",
     EDIT_NICKNAME: "修改昵称",
     CHANGE_PHONE: "更换手机号",
     CHANGE_PASSWORD: "更改密码",
     EDIT_PERMISSION: "权限设置",
     // 固定值
     ROLE_NORMAL: "普通用户"
   },
   // ====================
   // 消息通知
   // ====================
   NOTIFY: {
     UNREAD: "未读消息",
     READ: "已读消息"
   },
   // ====================
   // 帮助与反馈
   // ====================
   HELP: {
     TITLE: "帮助与反馈",
     PLACEHOLDER: "请输入你的问题或建议...",
     BACK_BTN: "返回",
     SUBMIT_BTN: "提交反馈"
   },
   // ====================
   // 退出登录
   // ====================
   LOGOUT: {
     TITLE: "确认退出登录？",
     TIP: "退出后将返回登录页面",
     CANCEL_BTN: "取消",
     CONFIRM_BTN: "确认退出"
   },
   // ====================
   // 通用提示语
   // ====================
   MESSAGE: {
     LOGIN_SUCCESS: "登录成功，正在进入系统……",
     SUBMIT_SUCCESS: "提交成功",
     OPERATION_FAILED: "操作失败，请重试",
     LOGOUT_CONFIRM: "确定要退出登录吗？"
     LOGIN_EMPTY_USERID: "请输入学生帐号ID",
     LOGIN_EMPTY_PASSWORD: "请输入密码",
     LOGIN_PASSWORD_TOO_SHORT: "密码长度不能少于6位",
   }
 };
