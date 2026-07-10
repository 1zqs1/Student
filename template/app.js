// 个人简介模板的交互脚本
const defaultProfile = {
  fullName: '王小明',
  title: '前端开发工程师',
  bio: '热衷于前端开发与用户体验，喜欢用简洁的代码构建可交互的页面。',
  avatar: 'https://avatars.githubusercontent.com/u/583231?v=4',
  skills: ['HTML', 'CSS', 'JavaScript', 'Vue/React'],
  email: 'example@example.com',
  github: 'https://github.com/yourname',
  projects: [{ name: '示例项目 1', url: '#' }]
};

function renderProfile(profile = defaultProfile) {
  document.getElementById('fullName').textContent = profile.fullName;
  document.getElementById('title').textContent = profile.title;
  document.getElementById('bio').textContent = profile.bio;
  document.getElementById('avatar').src = profile.avatar;
  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = '';
  profile.skills.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    skillsList.appendChild(li);
  });
  document.getElementById('email').href = `mailto:${profile.email}`;
  document.getElementById('email').textContent = profile.email;
  document.getElementById('github').href = profile.github;
  document.getElementById('github').textContent = profile.github.replace(/^https?:\/\//, '');
  const proj = document.getElementById('proj1');
  if (proj && profile.projects[0]) {
    proj.textContent = profile.projects[0].name;
    proj.href = profile.projects[0].url;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();

  const toggleTheme = document.getElementById('toggleTheme');
  const showContact = document.getElementById('showContact');
  const profileCard = document.getElementById('profileCard');
  const contact = document.getElementById('contact');

  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    // small visual tweak for card when dark
    profileCard.style.background = document.body.classList.contains('theme-dark') ? '#0b1220' : '#fff';
  });

  showContact.addEventListener('click', () => {
    contact.style.display = contact.style.display === 'none' ? 'block' : 'none';
  });

  console.log('个人简介模板脚本已加载');
});
