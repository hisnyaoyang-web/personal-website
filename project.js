const params=new URLSearchParams(location.search);const project=window.PROJECTS.find(item=>item.id===params.get('id'))||window.PROJECTS[0];
document.title=`${project.title}｜杨仙瑶`;
document.getElementById('lang-en')?.setAttribute('href','en/project.html'+location.search);
const categoryNames={product:'AI 产品与交互体验',culture:'数字人文与文化科技',strategy:'用户研究与产品策略',growth:'内容运营与用户增长'};
const detailSections=window.DETAIL_COPY?.[project.id]||Object.values(window.STAR_STORIES[project.id]).map(text=>({title:'',text}));
const metricMarkup=project.metrics.map(([value,label])=>`<div><b>${value}</b><span>${label}</span></div>`).join('');
const tags=project.tags.map(tag=>`<span>${tag}</span>`).join('');
const detailCopy=detailSections.map(section=>`<section class="detail-copy-section">${section.title?`<h3>${section.title}</h3>`:''}<p>${section.text}</p></section>`).join('');
const socialSection=project.id==='personal-content'?`<section class="project-social"><div class="project-social-heading"><p class="kicker">CULTURAL OBSERVATIONS</p><h2>文化观察</h2><p>通过文字与影像，记录学习、校园生活以及两岸文化观察。</p></div><div class="culture-grid"><a class="culture-card" href="https://xhslink.com/m/tr4otmRUCC" target="_blank" rel="noopener noreferrer"><span class="media-wm"><img src="assets/social/xiaohongshu.jpg" alt="小红书账号 Angela的两岸观察日记主页" loading="lazy"></span><h3>小红书 · Angela的两岸观察日记</h3><p>专业学习、备考经验与校园生活记录。</p><span>访问主页 ↗</span></a><a class="culture-card" href="assets/social/wechat-channel.jpg" target="_blank"><span class="media-wm"><img src="assets/projects/personal-content-wechat-channel.jpg" alt="微信视频号 Angela的两岸观察日记 运营成果" loading="lazy"></span><h3>微信视频号 · Angela的两岸观察日记</h3><p>两岸文化观察、日常影像与人物记录。</p><span>查看二维码 ↗</span></a></div></section>`:'';
const repoLink=project.repo?`<a class="detail-repo" href="${project.repo}" target="_blank" rel="noopener noreferrer">查看 GitHub 仓库 ↗</a>`:'';
const liveLink=project.link?`<a class="detail-repo" href="${project.link}" target="_blank" rel="noopener noreferrer">在线体验${project.linkNote?`（${project.linkNote}）`:''} ↗</a>`:'';
const linksBlock=(repoLink||liveLink)?`<div class="detail-links">${repoLink}${liveLink}</div>`:'';
const gallery=project.gallery?.length?`<section class="detail-gallery"><p class="kicker">PROJECT EVIDENCE · 项目佐证</p><div class="detail-gallery-grid">${project.gallery.map(item=>`<figure><a href="${item.image}" target="_blank" rel="noopener noreferrer"><img src="${item.image}" alt="${item.caption}" loading="lazy"></a><figcaption>${item.caption}</figcaption></figure>`).join('')}</div></section>`:'';
const media=project.video?`<figure class="detail-media video-media"><video controls playsinline preload="metadata" controlslist="nodownload" disablepictureinpicture oncontextmenu="return false"${project.videoPoster||project.image?` poster="${project.videoPoster||project.image}"`:''}><source src="${project.video}">你的浏览器暂不支持播放该视频。</video><figcaption>项目演示视频</figcaption></figure>`:project.image?`<figure class="detail-media"><img src="${project.image}" alt="${project.title}项目视觉"><figcaption>现有项目素材 · 后续将补充更完整的过程证据</figcaption></figure>`:`<div class="detail-media missing"><p>MEDIA<br>TO BE ADDED</p><span>该项目的界面截图、流程图或演示视频尚待补充</span></div>`;
const story=`<section class="case-narrative"><p class="kicker">PROJECT STORY · STAR</p><div class="star-story">${detailCopy}</div></section>`;
const metrics=`<section class="detail-metrics">${metricMarkup}</section>`;
const caseContent=project.id==='qingdong'?`<section class="qingdong-detail-split"><div class="qingdong-copy">${story}${metrics}</div>${media}</section>`:`${media}${story}${metrics}`;
document.querySelector('#project-detail').innerHTML=`
  <section class="detail-hero">
    <div><p class="kicker">${project.categories.map(c=>categoryNames[c]).join(' · ')} · ${project.year}</p><h1>${project.title}</h1><p class="detail-en">${project.en}</p></div>
    <div><p class="detail-summary">${project.summary}</p><p class="detail-role">我的角色：${project.role}</p><div class="tag-list">${tags}</div>${linksBlock}</div>
  </section>
  ${caseContent}
  ${gallery}
  ${socialSection}
  <section class="next-case"><p>继续浏览全部项目</p><a href="index.html#library">返回项目库 →</a></section>`;

document.addEventListener("contextmenu",e=>{if(e.target.closest("img,video"))e.preventDefault()});
document.addEventListener("dragstart",e=>{if(e.target.closest("img,video"))e.preventDefault()});
