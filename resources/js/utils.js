// ==========================
// 页面切换工具函数
// ==========================
/**
 * 切换页面显示（支持数字和字符串两种传参）
 * @param {number|string} target - 目标页面标识：数字对应 p0/p1/p2，字符串对应页面ID（如 page-login）
 */
function go(target) {
  // 先隐藏所有 .page 元素
  document.querySelectorAll('.page').forEach(el => {
    el.classList.remove('active');
  });

  // 如果是数字，拼接成 p+数字（适配个人中心、作业等页面）
  if (typeof target === 'number') {
    const pageId = 'p' + target;
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');
    return;
  }

  // 如果是字符串，直接按ID查找页面
  const targetPage = document.getElementById(target);
  if (targetPage) targetPage.classList.add('active');
}

// ==========================
// 标签页切换工具（作业/图书）
// ==========================
/**
 * 切换标签页（适配作业、图书等模块）
 * @param {number} index - 标签页序号，对应 page0/page1/page2
 */
function switchTab(index) {
  document.querySelectorAll('.page').forEach(el => {
    el.classList.remove('active');
  });
  const targetPage = document.getElementById('page' + index);
  if (targetPage) targetPage.classList.add('active');
}

// ==========================
// 消息通知切换工具
// ==========================
/**
 * 切换未读/已读消息标签
 * @param {string} type - 'unread' 或 'read'
 */
function switchNotifyTab(type) {
  // 切换消息内容
  document.querySelectorAll('.notify-content').forEach(el => {
    el.classList.remove('active');
  });
  const content = document.getElementById(type);
  if (content) content.classList.add('active');

  // 切换按钮高亮状态
  document.querySelectorAll('.notify-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const activeTab = document.querySelector(`.notify-tab[onclick="switchNotifyTab('${type}')"]`);
  if (activeTab) activeTab.classList.add('active');
}

// ==========================
// 表单验证工具
// ==========================
/**
 * 手机号格式验证
 * @param {string} phone - 手机号
 * @returns {boolean} 是否为有效手机号
 */
function isValidPhone(phone) {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(phone);
}

/**
 * 验证码格式验证（6位数字）
 * @param {string} code - 验证码
 * @returns {boolean} 是否为有效验证码
 */
function isValidVerifyCode(code) {
  const reg = /^\d{6}$/;
  return reg.test(code);
}

/**
 * 显示/隐藏表单错误提示
 * @param {string} id - 错误提示元素ID
 * @param {string} message - 错误信息
 * @param {boolean} show - 是否显示
 */
function showError(id, message, show) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = message;
    el.style.display = show ? 'block' : 'none';
  }
}

// ==========================
// 本地存储工具（模拟数据持久化）
// ==========================
/**
 * 保存数据到 localStorage
 * @param {string} key - 存储键名
 * @param {any} data - 要存储的数据（会自动 JSON 序列化）
 */
function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * 从 localStorage 读取数据
 * @param {string} key - 存储键名
 * @returns {any} 解析后的数据，不存在则返回 null
 */
function getFromLocal(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// ==========================
// 弹窗/模态框工具
// ==========================
/**
 * 打开模态框
 * @param {string} modalId - 模态框ID
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

/**
 * 关闭模态框
 * @param {string} modalId - 模态框ID
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// ==========================
// 占位函数（防止页面按钮报错）
// ==========================
function changeAvatar() { alert('更换头像功能演示'); }
function editNickname() { alert('修改昵称功能演示'); }
function changePhone() { alert('更换手机号功能演示'); }
function changePassword() { alert('更改密码功能演示'); }
function editPermission() { alert('权限设置功能演示'); }
function submitFeedback() { alert('反馈提交成功！'); }
function analyzeScore() { alert('成绩分析功能演示'); }
function submitTask() { alert('作业提交成功！'); }
function searchBooks() { alert('搜索图书功能演示'); }
function submitBorrow() { alert('预约申请提交成功！'); }
function logout() {
  if (confirm('确定要退出登录吗？')) {
    alert('已退出登录');
    go('page-login');
  }
}

// ==========================
// 页面加载完成后初始化
// ==========================
document.addEventListener('DOMContentLoaded', function() {
  // 手机端导航菜单切换
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }

  // 初始化课表/成绩/作业/图书等模块的空数据提示
  const noDataEl = document.getElementById('noData');
  const emptyTipEl = document.getElementById('emptyTip');
  if (noDataEl) noDataEl.style.display = 'block';
  if (emptyTipEl) emptyTipEl.style.display = 'block';
});
