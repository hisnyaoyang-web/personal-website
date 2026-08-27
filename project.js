const params=new URLSearchParams(location.search);const project=window.PROJECTS.find(item=>item.id===params.get('id'))||window.PROJECTS[0];
document.title=`${project.title}｜杨仙瑶`;
document.getElementById('lang-en')?.setAttribute('href','en/project.html'+location.search);
const categoryNames={product:'AI 产品与体验',research:'数字人文与科研',operations:'内容、用户与产品运营'};
const detailSections=window.DETAIL_COPY?.[project.id]||Object.values(window.STAR_STORIES[project.id]).map(text=>({title:'',text}));
const metricMarkup=project.metrics.map(([value,label])=>`<div><b>${value}</b><span>${label}</span></div>`).join('');
const tags=project.tags.map(tag=>`<span>${tag}</span>`).join('');
const detailCopy=detailSections.map(section=>`<section class="detail-copy-section">${section.title?`<h3>${section.title}</h3>`:''}<p>${section.text}</p></section>`).join('');
const socialSection=project.id==='personal-content'?`<section class="project-social"><div class="project-social-heading"><p class="kicker">CULTURAL OBSERVATIONS</p><h2>文化观察</h2><p>通过文字与影像，记录学习、校园生活以及两岸文化观察。</p></div><div class="culture-grid"><a class="culture-card" href="https://xhslink.com/m/tr4otmRUCC" target="_blank" rel="noopener noreferrer"><img src="assets/social/xiaohongshu.jpg" alt="小红书账号 Angela的两岸观察日记主页" loading="lazy"><h3>小红书 · Angela的两岸观察日记</h3><p>专业学习、备考经验与校园生活记录。</p><span>访问主页 ↗</span></a><a class="culture-card" href="assets/social/wechat-channel.jpg" target="_blank"><img src="assets/social/wechat-channel.jpg" alt="微信视频号 Angela的两岸观察日记二维码" loading="lazy"><h3>微信视频号 · Angela的两岸观察日记</h3><p>两岸文化观察、日常影像与人物记录。</p><span>查看二维码 ↗</span></a></div></section>`:'';
const media=project.video?`<figure class="detail-media video-media"><video controls playsinline preload="metadata"${project.image?` poster="${project.image}"`:''}><source src="${project.video}">你的浏览器暂不支持播放该视频。</video><figcaption>项目演示视频</figcaption></figure>`:project.image?`<figure class="detail-media"><img src="${project.image}" alt="${project.title}项目视觉"><figcaption>现有项目素材 · 后续将补充更完整的过程证据</figcaption></figure>`:`<div class="detail-media missing"><p>MEDIA<br>TO BE ADDED</p><span>该项目的界面截图、流程图或演示视频尚待补充</span></div>`;
document.querySelector('#project-detail').innerHTML=`
  <section class="detail-hero">
    <div><p class="kicker">${project.categories.map(c=>categoryNames[c]).join(' · ')} · ${project.year}</p><h1>${project.title}</h1><p class="detail-en">${project.en}</p></div>
    <div><p class="detail-summary">${project.summary}</p><p class="detail-role">我的角色：${project.role}</p><div class="tag-list">${tags}</div></div>
  </section>
  ${media}
  <section class="case-narrative">
    <p class="kicker">PROJECT STORY · STAR</p>
    <div class="star-story">${detailCopy}</div>
  </section>
  <section class="detail-metrics">${metricMarkup}</section>
  ${socialSection}
  <section class="next-case"><p>继续浏览全部项目</p><a href="index.html#library">返回项目库 →</a></section>`;
