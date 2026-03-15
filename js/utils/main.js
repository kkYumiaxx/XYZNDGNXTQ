// ==========================
// 全局工具函数：页面切换
// ==========================
function go(target) {
  // 隐藏所有 .page
  document.querySelectorAll('.page').forEach(el => {
    el.classList.remove('active');
  });

  // 数字：p0、p1、p2（个人中心、作业）
  if (typeof target === 'number') {
    const id = 'p' + target;
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
    return;
  }

  // 字符串：page-login、page-register、page-help、page-logout
  const el = document.getElementById(target);
  if (el) el.classList.add('active');
}

// ==========================
// 图书/作业等通用 tab 切换
// ==========================
function switchTab(index) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page' + index);
  if (page) page.classList.add('active');
}

// ==========================
// 消息通知：未读/已读切换
// ==========================
function switchNotifyTab(type) {
  document.querySelectorAll('.notify-content').forEach(el => {
    el.classList.remove('active');
  });
  document.getElementById(type)?.classList.add('active');

  document.querySelectorAll('.notify-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`.notify-tab[onclick="switchNotifyTab('${type}')"]`)?.classList.add('active');
}

// ==========================
// 登录表单处理
// ==========================
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const userID = document.getElementById('userID').value.trim();
      const password = document.getElementById('password').value.trim();

      const errUser = document.getElementById('usernameError');
      const errPwd = document.getElementById('passwordError');

      errUser.style.display = 'none';
      errPwd.style.display = 'none';

      // 校验
      if (userID.length < CONFIG.VALIDATE.USERID_MIN_LENGTH) {
        errUser.textContent = CONFIG.VALIDATE.USERID_EMPTY;
        errUser.style.display = 'block';
        return;
      }

      if (password.length < CONFIG.VALIDATE.PASSWORD_MIN_LENGTH) {
        errPwd.textContent = CONFIG.VALIDATE.PASSWORD_TOO_SHORT;
        errPwd.style.display = 'block';
        return;
      }

      alert(CONFIG.MESSAGE.LOGIN_SUCCESS);
      go('page-user'); // 登录成功去个人中心
    });
  }

  // ==========================
  // 注册表单处理
  // ==========================
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const userID = document.getElementById('userID').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const verifyCode = document.getElementById('verifyCode').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPwd = document.getElementById('confirmPwd').value.trim();

      const errName = document.getElementById('nameError');
      const errUserID = document.getElementById('userIDError');
      const errPhone = document.getElementById('phoneError');
      const errVerify = document.getElementById('verifyCodeError');
      const errPwd = document.getElementById('passwordError');
      const errConfirm = document.getElementById('confirmPwdError');

      // 清空错误
      document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
      });

      if (!name) {
        errName.textContent = CONFIG.VALIDATE.NAME_EMPTY;
        errName.style.display = 'block';
        return;
      }
      if (!userID) {
        errUserID.textContent = CONFIG.VALIDATE.USERID_EMPTY;
        errUserID.style.display = 'block';
        return;
      }
      const phoneReg = /^1[3-9]\d{9}$/;
      if (!phoneReg.test(phone)) {
        errPhone.textContent = CONFIG.VALIDATE.PHONE_INVALID;
        errPhone.style.display = 'block';
        return;
      }
      const codeReg = /^\d{6}$/;
      if (!codeReg.test(verifyCode)) {
        errVerify.textContent = CONFIG.VALIDATE.VERIFY_CODE_INVALID;
        errVerify.style.display = 'block';
        return;
      }
      if (password.length < CONFIG.VALIDATE.PASSWORD_MIN_LENGTH) {
        errPwd.textContent = CONFIG.VALIDATE.PASSWORD_TOO_SHORT;
        errPwd.style.display = 'block';
        return;
      }
      if (password !== confirmPwd) {
        errConfirm.textContent = CONFIG.VALIDATE.PASSWORD_NOT_MATCH;
        errConfirm.style.display = 'block';
        return;
      }

      alert(CONFIG.MESSAGE.SUBMIT_SUCCESS);
      go('page-login');
    });
  }

  // ==========================
  // 密码显示/隐藏切换
  // ==========================
  const toggle = document.getElementById('passwordToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      const pwdInput = document.getElementById('password');
      const type = pwdInput.type === 'password' ? 'text' : 'password';
      pwdInput.type = type;
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  }
});

// ==========================
// 退出登录
// ==========================
function logout() {
  if (confirm(CONFIG.MESSAGE.LOGOUT_CONFIRM)) {
    alert('已退出登录');
    go('page-login');
  }
}

// ==========================
// 占位函数（防止报错）
// ==========================
function changeAvatar() { alert('更换头像功能'); }
function editNickname() { alert('修改昵称'); }
function changePhone() { alert('更换手机号'); }
function changePassword() { alert('修改密码'); }
function editPermission() { alert('权限设置'); }
function submitFeedback() { alert(CONFIG.MESSAGE.SUBMIT_SUCCESS); }
function analyzeScore() { alert('成绩分析演示'); }
function submitTask() { alert('作业提交成功'); }
function searchBooks() { alert('搜索图书'); }
function submitBorrow() { alert('预约提交成功'); }
