// 测试3 的脚本，基于模板
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('测试3 按钮被点击');
    });
  }
  console.log('测试3 脚本已加载');
});
