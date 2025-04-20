// ① Tabs切換內容（關於 / 技能 / 知識）
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 先移除全部 active
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // 再把目前點到的加上 active
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// ② 漢堡選單控制
const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.getElementById('dropdownMenu');

// 點漢堡展開/收合
menuIcon.addEventListener('click', (e) => {
  e.stopPropagation(); // 防止點擊冒泡影響關閉
  dropdownMenu.classList.toggle('show');
});

// 點畫面其他地方關閉選單
document.addEventListener('click', (e) => {
  if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});

// 點下拉選單的項目也會自動關閉
const menuLinks = dropdownMenu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
  });
});
