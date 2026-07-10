const profile = {
  name: '周同学',
  title: '前端学习者 · 热爱页面设计与交互实现',
  bio: '我正在学习 HTML、CSS 和 JavaScript，希望用简洁的代码做出好看又实用的网页。',
  email: 'example@example.com',
  github: 'https://github.com/yourname',
  skills: ['HTML', 'CSS', 'JavaScript', '响应式布局', '页面美化']
};

const skillsContainer = document.getElementById('skills');
const message = document.getElementById('message');
const themeBtn = document.getElementById('themeBtn');
const copyBtn = document.getElementById('copyBtn');

function renderSkills(items) {
  skillsContainer.innerHTML = '';
  items.forEach((skill) => {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = skill;
    skillsContainer.appendChild(badge);
  });
}

function updateProfile() {
  document.getElementById('name').textContent = profile.name;
  document.getElementById('title').textContent = profile.title;
  document.getElementById('bio').textContent = profile.bio;
  document.getElementById('email').textContent = profile.email;
  document.getElementById('email').href = `mailto:${profile.email}`;
  document.getElementById('github').textContent = profile.github.replace(/^https?:\/\//, '');
  document.getElementById('github').href = profile.github;
  renderSkills(profile.skills);
}

function updateMessage(text) {
  message.textContent = text;
}

document.addEventListener('DOMContentLoaded', () => {
  updateProfile();

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '切换浅色模式' : '切换深色模式';
    updateMessage(document.body.classList.contains('dark') ? '已切换到深色模式。' : '已切换到浅色模式。');
  });

  copyBtn.addEventListener('click', async () => {
    const text = `${profile.name}｜${profile.title}｜${profile.bio}`;
    try {
      await navigator.clipboard.writeText(text);
      updateMessage('简介已复制到剪贴板。');
    } catch {
      updateMessage('复制失败，请手动选择内容。');
    }
  });
});

