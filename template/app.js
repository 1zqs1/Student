// 模板示例的简单脚本
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('模板按钮被点击');
    });
  }
  console.log('模板脚本已加载');
});
