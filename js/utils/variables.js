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
