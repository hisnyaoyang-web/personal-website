const params=new URLSearchParams(location.search);const project=window.PROJECTS.find(item=>item.id===params.get('id'))||window.PROJECTS[0];
document.title=`${project.title} · Hsienyao Yang`;
document.getElementById('lang-zh')?.setAttribute('href','../project.html'+location.search);
const categoryNames={product:'AI Products & Interactive Experiences',culture:'Digital Humanities & Cultural Technology',strategy:'User Research & Product Strategy',growth:'Content Operations & User Growth'};
const detailSections=window.DETAIL_COPY?.[project.id]||[];
const metricMarkup=project.metrics.map(([value,label])=>`<div><b>${value}</b><span>${label}</span></div>`).join('');
const tags=project.tags.map(tag=>`<span>${tag}</span>`).join('');
const detailCopy=detailSections.map(section=>`<section class="detail-copy-section">${section.title?`<h3>${section.title}</h3>`:''}<p>${section.text}</p></section>`).join('');
const socialSection=project.id==='personal-content'?`<section class="project-social"><div class="project-social-heading"><p class="kicker">CULTURAL OBSERVATIONS</p><h2>Cultural Observations</h2><p>Recording learning, campus life, and cross-strait cultural observation in words and images.</p></div><div class="culture-grid"><a class="culture-card" href="https://xhslink.com/m/tr4otmRUCC" target="_blank" rel="noopener noreferrer"><span class="media-wm"><img src="../assets/social/xiaohongshu.jpg" alt="Xiaohongshu account Angela's Cross-Strait Diary" loading="lazy"></span><h3>Xiaohongshu · Angela's Cross-Strait Diary</h3><p>Major studies, exam prep, and campus life.</p><span>Visit profile ↗</span></a><a class="culture-card" href="../assets/social/wechat-channel.jpg" target="_blank"><span class="media-wm"><img src="../assets/projects/personal-content-wechat-channel.jpg" alt="WeChat Channels performance for Angela's Cross-Strait Diary" loading="lazy"></span><h3>WeChat Channels · Angela's Cross-Strait Diary</h3><p>Cross-strait cultural observation, everyday video, and people.</p><span>View QR code ↗</span></a></div></section>`:'';
const repoLink=project.repo?`<a class="detail-repo" href="${project.repo}" target="_blank" rel="noopener noreferrer">View GitHub repository ↗</a>`:'';
const liveLink=project.link?`<a class="detail-repo" href="${project.link}" target="_blank" rel="noopener noreferrer">Try the live experience${project.linkNote?` (${project.linkNote})`:''} ↗</a>`:'';
const linksBlock=(repoLink||liveLink)?`<div class="detail-links">${repoLink}${liveLink}</div>`:'';
const gallery=project.gallery?.length?`<section class="detail-gallery"><p class="kicker">PROJECT EVIDENCE</p><div class="detail-gallery-grid">${project.gallery.map(item=>`<figure><a href="${item.image}" target="_blank" rel="noopener noreferrer"><img src="${item.image}" alt="${item.caption}" loading="lazy"></a><figcaption>${item.caption}</figcaption></figure>`).join('')}</div></section>`:'';
const media=project.video?`<figure class="detail-media video-media"><video controls playsinline preload="metadata" controlslist="nodownload" disablepictureinpicture oncontextmenu="return false"${project.videoPoster||project.image?` poster="${project.videoPoster||project.image}"`:''}><source src="${project.video}">Your browser does not support video playback.</video><figcaption>Project demo video</figcaption></figure>`:project.image?`<figure class="detail-media"><img src="${project.image}" alt="${project.title} project visual"><figcaption>Current project asset · fuller process evidence to come</figcaption></figure>`:`<div class="detail-media missing"><p>MEDIA<br>TO BE ADDED</p><span>Screenshots, flow diagrams, or a demo video for this project are coming</span></div>`;
const story=`<section class="case-narrative"><p class="kicker">PROJECT STORY · STAR</p><div class="star-story">${detailCopy}</div></section>`;
const metrics=`<section class="detail-metrics">${metricMarkup}</section>`;
const caseContent=project.id==='qingdong'?`<section class="qingdong-detail-split"><div class="qingdong-copy">${story}${metrics}</div>${media}</section>`:`${media}${story}${metrics}`;
document.querySelector('#project-detail').innerHTML=`
  <section class="detail-hero">
    <div><p class="kicker">${project.categories.map(c=>categoryNames[c]).join(' · ')} · ${project.year}</p><h1>${project.title}</h1>${project.en&&project.en!==project.title?`<p class="detail-en">${project.en}</p>`:''}</div>
    <div><p class="detail-summary">${project.summary}</p><p class="detail-role">My role: ${project.role}</p><div class="tag-list">${tags}</div>${linksBlock}</div>
  </section>
  ${caseContent}
  ${gallery}
  ${socialSection}
  <section class="next-case"><p>Keep exploring</p><a href="index.html#library">Back to all projects →</a></section>`;

document.addEventListener("contextmenu",e=>{if(e.target.closest("img,video"))e.preventDefault()});
document.addEventListener("dragstart",e=>{if(e.target.closest("img,video"))e.preventDefault()});
