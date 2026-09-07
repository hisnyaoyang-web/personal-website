window.PROJECTS = [
  {id:'qingdong',title:'轻动',en:'Qingdong: AI Movement Coach',year:'2026.08',role:'产品策划 · 交互设计',categories:['product','strategy'],featured:true,image:'assets/projects/qingdong-demo-poster.jpg',video:'assets/videos/qingdong-demo.mp4',videoPoster:'assets/projects/qingdong-demo-poster.jpg',summary:'打通抖音 Feed 兴趣卡触达、摄像头动作识别、豆包陪练反馈与成果分享的完整闭环，让久坐用户坐着即可完成 50 秒轻运动，获抖音 AI 创变者计划黑客松深圳大区赛 TOP10。',problem:'久刷、久坐用户即使感到颈肩或腰背紧绷，也往往不愿中断当前场景；传统运动教程的搜索、观看与模仿链路较长，独自跟练时也缺少即时反馈。',actions:['设计 Feed 卡触达、部位选择、摄像头校准、动作跟练、完成结算与成果分享的端到端路径','将动作识别拆分为姿势校准、动作达标、保持计时、回到中立位与自动完成等状态','完成 PRD、四个核心界面、Feed 卡交互方案与演示 Demo，并纳入隐私、安全和异常恢复机制'],metrics:[['TOP10','深圳大区赛'],['50 秒','单次轻运动体验'],['Feed→AI','完整体验闭环']],tags:['AI Product','Motion Recognition','Mini Program','UX Design'],reflection:'AI 产品的关键不只是展示识别能力，还要找到技术能够自然进入的场景，并通过明确反馈、安全边界与低操作成本促成完整体验。'},
  {id:'jingmeng',title:'惊梦：寻回杜丽娘',en:'Jingmeng: Finding Du Liniang',year:'2026.07',role:'产品',categories:['product','culture'],featured:true,repo:'https://github.com/hisnyaoyang-web/VRmudanting-jingmeng',image:'assets/projects/jingmeng-cover.jpg',video:'assets/videos/jingmeng-demo.mp4',videoPoster:'assets/projects/jingmeng-cover.jpg',link:'https://vrmudanting-jingmeng-d06h51vde-hisnyaoyang-2167s-projects.vercel.app/',linkNote:'需 VPN',summary:'以《牡丹亭》杜丽娘为核心的 Web 互动体验，在 AdventureX 2026 黑客松获得双赛道奖项，作品已上线可在线体验。',problem:'如何将经典戏曲人物与叙事转化为适合 Web 与沉浸式设备体验的产品形态，并在黑客松周期内完成可演示交付。',actions:['负责产品定位、功能规划与体验路径梳理','围绕杜丽娘人物与《牡丹亭》叙事组织产品表达','协同团队推进原型、开发与赛道展示交付'],metrics:[['一等奖','PICO 赛道最佳 Web 应用创作者'],['三等奖','米哈游赛道'],['5 天','黑客松交付']],tags:['Product','Web','VR','Cultural Tech'],reflection:'在高强度黑客松中，产品角色需要快速收敛主题、明确核心体验，并让文化叙事、技术实现与赛道价值形成一致表达。'},
  {id:'cyber-ancestor',title:'赛博老祖宗养成计划',en:'Cyber Ancestor',year:'2026',role:'项目负责人 · AI 产品 · 全栈开发',categories:['product','strategy','growth'],featured:true,image:'assets/projects/cyber-ancestor.jpg',video:'assets/videos/cyber-ancestor.mp4',summary:'把历史人物知识转化为可养成、可对话、可分享的 AI 互动体验。',problem:'传统历史内容以单向阅读为主，缺少持续互动、人格反馈与用户共创。',actions:['从意图识别、回复质量、角色一致性和任务完成度评估 Agent','通过结构化 Prompt 多轮调优生成质量','结合行为数据与 A/B 测试优化剧情、奖励和分享链路'],metrics:[['40%','第二章完成率提升'],['8 min','平均互动时长'],['25%','内测分享率']],tags:['AI Agent','Prompt','A/B Test','Full-stack'],reflection:'产品价值不只来自模型能力，更来自角色一致性、反馈节奏和分享动机共同构成的体验闭环。'},
  {id:'moonbot',title:'Moonbot Tutor',en:'AI Teaching Content Platform',year:'2026',role:'AI 产品负责人',categories:['product'],featured:true,image:'assets/projects/moonbot-cover.jpg',video:'assets/videos/moonbot.mp4',summary:'把用户问题自动转化为教学视频与交互式 HTML。',problem:'高质量教学内容制作链路长、工具割裂，单一输出难以覆盖不同学习情境。',actions:['设计从 LLM 脚本到渲染合成的 7 阶段生成链路','制定 Claude 双阶段调用策略','集成 Claude、豆包 TTS 与 ManimCE，定义 OpenAPI 协作规范'],metrics:[['7-stage','自动化 Pipeline'],['2 modes','HTML + 视频'],['3 models','多模型协作']],tags:['AI Pipeline','Claude','TTS','ManimCE'],reflection:'复杂 AI 产品首先要把不稳定的模型输出拆成可检查、可重试、可协作的阶段。'},
  {id:'gushu-mask',title:'古蜀覆面：三星堆数字神面',en:'Ancient Shu Digital Mask',year:'2026',role:'项目负责人 · 全栈开发',categories:['product','culture'],featured:true,image:'assets/projects/gushu-mask-cover.jpg',video:'assets/videos/gushu-mask.mp4',summary:'用 AI 设计、3D 建模与 AR 试戴，让用户生成自己的三星堆数字神面。',problem:'文博展示往往停留在观看层，用户难以建立角色代入和主动传播。',actions:['串联素材参数、AI 平面生成与 3D 建模 API','开发摄像头识别和动作触发文化讲解','用个性化桌宠建立体验到分享的传播闭环'],metrics:[['1st','Nextstep 一等奖'],['AI→3D','多模态链路'],['AR','动作交互']],tags:['Generative AI','3D','AR','Cultural Tech'],reflection:'文化科技产品需要把知识融入动作、角色和可带走的个人成果，而不是额外附上一段说明。'},
  {id:'heritage',title:'文化遗产智能计算',en:'Intelligent Heritage Computing',year:'2025—至今',role:'省级大创项目负责人',categories:['culture'],featured:true,image:'assets/projects/heritage-computing.png',summary:'将文物纹样从图像像素转化为具有文化语义的可计算单元。',problem:'文物数字化常停留在粗粒度图像保存，难以对纹样和文化基因进行细粒度检索与解释。',actions:['建立视觉解构、语义切片与跨模态语义映射路径','使用 SAM 系列模型进行文物图像分割','编制传统器物纹样智能标注指南'],metrics:[['省级','创新训练项目'],['SAM','图像语义分割'],['跨模态','图像—文本映射']],tags:['Digital Humanities','SAM','Annotation','Multimodal'],reflection:'技术并不是研究目的；关键是把模型输出转化为可解释、可复用的文化知识结构。'},
  {id:'gusu',title:'《姑苏繁华图》数字活化',en:'Prosperous Suzhou Scroll',year:'2025',role:'独立策划 · 叙事设计 · 开发',categories:['culture'],featured:true,image:'assets/projects/gusu-cover.jpg',video:'assets/videos/gusu-scroll.mp4',link:'http://82.157.189.119/',summary:'以商贾、文人、平民三重身份重新进入古代长卷，作品获牛津大学 DHOxSS 2026 海报竞赛 Winner。',problem:'数字长卷常只是把线下观看搬到屏幕，缺少情境、身份和叙事参与。',actions:['设计三重身份视角与差异化旁白','用横向滚动模拟长卷观看方式','将文学叙事转换为交互节点和信息层'],metrics:[['Winner','Oxford DHOxSS 2026 海报竞赛'],['3','身份视角'],['Scroll','长卷交互']],tags:['Digital Heritage','Narrative','Interaction'],reflection:'数字活化不是增加动效，而是建立新的观看位置和理解路径。'},
  {id:'sushi',title:'二苏诗词情感识别',en:'Su Shi & Su Zhe Sentiment',year:'2025',role:'独立产品设计与全栈开发',categories:['product','culture'],featured:false,image:'assets/projects/sushi-sentiment.jpg',video:'assets/videos/sushi-sentiment.mp4',summary:'用大模型情感标注与可视化，把古典诗词转化为可探索的数据体验。',problem:'传统诗词阅读中，情绪演变和作品间关系难以被整体观察。',actions:['设计诗词情感识别与标签生成流程','将模型结果转化为图表与交互反馈','根据退出节点优化反馈清晰度和学习动线'],metrics:[['NLP','情感识别'],['LLM','文本标注'],['Web','交互可视化']],tags:['AI Product','Digital Humanities','NLP','Visualization'],reflection:'它同时是 AI 产品和数字人文项目：产品侧关注反馈体验，研究侧关注情感分类是否具有文学解释力。'},
  {id:'children-edu',title:'儿童公益教学工具',en:'Children Education Tool',year:'2025',role:'独立产品设计与全栈开发',categories:['product','strategy'],featured:false,image:'assets/projects/children-education.jpg',video:'assets/videos/children-education.mp4',summary:'用结构化记录和数据看板替代低效的微信群学习打卡。',problem:'学习记录碎片化、通知被淹没，学生进步不可见，教师难以精准指导。',actions:['设计登录—打卡—记录—排行榜闭环','为学生和教师分别提供周/月数据看板','设计一人多娃与多人一娃账户模式'],metrics:[['+50%','模块停留时长'],['+20%','周回访率'],['+30%','理解准确率']],tags:['User Research','Dashboard','Education','Full-stack'],reflection:'真实场景中的账户关系和反馈机制，往往比功能数量更决定产品能否长期使用。'},
  {id:'lingya',title:'腾讯灵芽 AIGC 产品运营',en:'Tencent Lingya Campus Growth',year:'2026.05—2026.08',role:'校园大使 · 产品运营',categories:['strategy','growth'],featured:true,summary:'从 0 到 1 建立校园获客和种子创作者孵化体系。',problem:'AIGC 产品在校园场景中面临认知门槛高、使用情境模糊和创作者供给不足。',actions:['联动社团、社群和朋友圈矩阵多渠道拉新','引入种子创作者并提供工具教学与创作指导','建立创作者反馈到产品模板优化的闭环'],metrics:[['2,000+','校园触达'],['75%','完课率'],['180','自然新增用户']],tags:['Growth','Creator Ops','Feedback Loop','AIGC'],reflection:'增长不只是曝光；内容教学、创作者成功和反馈迭代共同决定渠道质量。'},
  {id:'douyin',title:'武汉大学抖音俱乐部',en:'WHU Douyin Club',year:'2025',role:'主编及主要负责人',categories:['growth'],featured:false,image:'assets/projects/douyin-club.png',summary:'以校园生活共鸣为内容支点，建立有辨识度的校园账号和用户社群。',problem:'校园账号容易陷入同质化通知内容，缺少稳定的人设、选题机制和用户参与。',actions:['建立热点监测、选题和内容 SOP','根据数据迭代发布时间与内容形式','通过共创和互动激励沉淀校园用户'],gallery:[{image:'assets/projects/douyin-account-operations.jpg',caption:'账号运营数据（2025.03—08）：累计播放破百万、获赞破万，单条视频最高 87.8 万播放'},{image:'assets/projects/douyin-event-planning.jpg',caption:'活动策划文档：音乐会摊位方案、「寻迹武大·抖见新章」「珞珈越野·驰骋自然」主题活动策划提案'},{image:'assets/projects/douyin-sakura-event.jpg',caption:'字节跳动樱花季活动：负责活动策划与志愿者统筹，线上直播累计观看 20,745 次，线下围观预估上万人次'}],metrics:[['87.8万','单条最高播放'],['百万+','账号累计播放'],['2万+','樱花季直播观看']],tags:['Content Strategy','Community','Data'],reflection:'稳定增长来自可重复的内容机制，而不是偶然爆款。'},
  {id:'hi-acho',title:'网易 Hi Acho 用户研究',en:'AI English User Research',year:'2025',role:'用户研究项目负责人',categories:['strategy'],featured:false,image:'assets/projects/hi-acho.png',summary:'用问卷与深访定位 AI 口语产品的体验短板。',problem:'需要明确 AI 口语产品的教学接受度、核心流失节点和优化优先级。',actions:['完成问卷设计、信效度和交叉分析','组织多城市线下深访','整合定量与定性证据形成优化建议'],metrics:[['1,022','有效问卷'],['20+','用户访谈'],['4','覆盖城市']],tags:['User Research','SPSS','Interview','AI Education'],reflection:'用户研究的价值不是罗列意见，而是将证据转化为可排序的产品决策。'},
  {id:'personal-content',title:'个人账号内容增长',en:'Personal Content Growth',year:'2025—至今',role:'独立运营',categories:['growth'],featured:false,image:'assets/projects/personal-content-cover.jpg',summary:'从 0 到 1 验证场景化内容与社交裂变的冷启动路径。',problem:'新账号缺少初始分发和明确定位，需要用低成本实验找到有效内容模型。',actions:['提炼选题模板与封面标题公式','用 A/B 测试优化内容方向','分别适配视频号社交链与小红书搜索分发'],metrics:[['11W+','视频号单条播放'],['700%','7 天涨粉'],['1.8W+','小红书单篇浏览']],tags:['Cold Start','A/B Test','Social Growth'],reflection:'同一内容不能机械跨平台分发，平台关系结构决定包装和增长机制。'}
];

window.STAR_STORIES = {
  qingdong: {
    s:'久刷、久坐用户即使感到颈肩或腰背紧绷，也往往不愿中断当前场景。传统运动教程需要主动搜索、观看和模仿，操作链路较长；独自跟练时，用户也难以判断动作幅度与完成状态。',
    t:'「轻动」围绕抖音信息流场景构建低门槛的 AI 轻运动产品，让用户从 Feed 兴趣卡进入小程序，无需器械、无需起身，在约 50 秒内完成一次有引导、有反馈的局部舒展。',
    a:'项目设计“Feed 卡触达—身体部位选择—摄像头校准—动作跟练—完成结算—成果分享”的端到端路径，将动作识别拆分为姿势校准、动作达标、保持计时、回到中立位和自动完成等状态，并补充权限、识别与安全异常的处理机制。',
    r:'项目完成完整 PRD、小程序四个核心界面、Feed 卡交互方案及演示 Demo，形成从信息流内容触达到 AI 动作跟练及分享传播的产品闭环，并进入抖音 AI 创变者计划黑客松深圳大区赛 TOP10。'
  },
  jingmeng: {
    s:'经典戏曲的情感与人物关系具有丰富层次，但转化为 Web 与沉浸式体验时，需要在文化表达、交互理解和有限开发周期之间取得平衡。',
    t:'作为团队产品，我负责明确项目定位、梳理核心功能与用户体验路径，并推动团队在五天黑客松周期内完成可演示交付。',
    a:'我围绕杜丽娘与《牡丹亭》的核心叙事组织产品表达，协调原型、开发和展示节奏，让文化主题、Web 体验与赛道评审重点形成一致。',
    r:'项目获得 AdventureX 2026 PICO 赛道“最佳 Web 应用创作者”（一等奖），同时获得米哈游赛道三等奖；作品已上线，可在浏览器中直接体验。'
  },
  'cyber-ancestor': {
    s:'传统历史内容多以单向阅读为主，而带有人格设定的 AI 互动产品又容易出现角色失真、回复质量波动与剧情中途流失。',
    t:'作为项目负责人，我需要从 0 到 1 完成产品与全栈交付，让历史人物既能稳定对话，也能通过养成、任务和分享形成持续体验。',
    a:'我围绕意图识别、回复质量、任务完成度与角色一致性建立 Agent 评估维度，通过结构化 Prompt 多轮调优生成效果，并结合用户行为和 A/B 测试迭代剧情节奏、奖励机制、个性化内容与分享链路。',
    r:'第二章完成率提升 40%，用户平均互动时长达到 8 分钟，内测分享率达到 25%；项目获得武汉大学 AI 应用创新黑客松一等奖并晋级赛区。'
  },
  moonbot: {
    s:'高质量教学内容的制作依赖脚本、配音、动画和网页等多个工具，流程割裂且单一内容形态难以适配不同学习场景。',
    t:'我负责把一个用户问题转化为可直接学习的交互式 HTML 与教学视频，并保证多模型协作过程可检查、可重试。',
    a:'我将生成过程拆成七个阶段，制定 Claude 双阶段调用策略，串联 Claude、豆包 TTS 与 ManimCE，同时用 OpenAPI 规范明确各环节的输入、输出和异常处理。',
    r:'最终跑通从问题输入到 HTML 与视频双形态输出的端到端链路，形成可现场演示、可继续扩展的探月计划黑客松作品。'
  },
  'gushu-mask': {
    s:'文博展示往往停留在观看和说明层，用户缺少能够代入、操作并主动带走的个人化体验。',
    t:'我需要把三星堆文化元素转化为一条完整的数字体验，让用户生成自己的“数字神面”，并从创作自然进入理解与分享。',
    a:'我串联参数选择、AI 平面生成和 3D 建模 API，开发摄像头识别与动作触发讲解，并用专属二维码把生成结果延伸为可分享的个性化桌宠。',
    r:'项目完成 AI 生成、3D 建模、AR 试戴与传播环节的多模态闭环，并获得 Nextstep 黑客松一等奖。'
  },
  heritage: {
    s:'大量文化遗产已经完成图像数字化，但纹样仍常停留在“存得下来、难以计算，能够看见、难以解释”的粗粒度状态。',
    t:'作为三人跨学科团队的项目负责人，我负责总体研究设计、概念框架、语义层级与标注标准，探索如何把图像中的文化单元转化为可检索、可解释的知识结构。',
    a:'我设计“视觉单元—语义组合—情境知识”三层路径，推进实例分割、带引文的文本切片、跨模态对齐和人工校验，并以《虢国夫人游春图》开展试标注，持续完善标注规范。',
    r:'目前已完成文献综述、技术路线、模型调研、原型练习与首轮试标注；下一阶段将据此建设轻量知识库、多模态 RAG 智能体和网页原型，相关内容属于计划产出。'
  },
  sushi: {
    s:'传统诗词阅读擅长进入单篇文本，却不容易从整体上观察诗人情绪的分布、变化与作品之间的关联。',
    t:'我希望独立完成一个兼顾文学解释与交互体验的数字人文产品，把二苏诗词转化为可以探索的数据。',
    a:'我设计大模型情感识别与标签生成流程，将标注结果组织为图表和交互反馈，并根据使用过程中的退出节点调整信息清晰度与阅读动线。',
    r:'最终完成从文本标注、情感分类到网页可视化的原型，让诗词既能被逐篇阅读，也能从数据视角进行比较和观察。'
  },
  'children-edu': {
    s:'公益教学主要依靠微信群打卡时，学习记录容易被消息淹没，学生进步不可见，教师也难以持续追踪和针对性反馈。',
    t:'我需要独立设计并开发一套轻量工具，在不增加使用负担的前提下，把打卡、记录、反馈和激励集中到一条清晰链路中。',
    a:'我搭建登录、打卡、学习记录与排行榜闭环，为学生和教师分别设计周/月数据看板，并处理“一人多娃、多人一娃”等真实家庭账户关系。',
    r:'工具完成上线与闭环验证；既有项目记录显示，模块停留时长提升 50%、周回访率提升 20%、理解准确率提升 30%。'
  },
  gusu: {
    s:'许多数字长卷只是把线下图像搬到屏幕，观众仍处于远距离观看的位置，难以进入画中人物的生活与城市文化脉络。',
    t:'我独立承担研究、策划、叙事设计、前端开发和部署，要把《姑苏繁华图》转化为可漫游、可选择身份、可探索知识的数字人文空间。',
    a:'我将长卷拆为十个横向图块与八个场景，设置十二个文化热点、文人/商贾/平民三种身份及三十六段差异化叙事，并加入五个小游戏、NPC、放大镜和 D 键导览等交互。',
    r:'全部核心模块已完成并部署，用户可通过国内地址进入体验；作品获牛津大学数字人文暑期学校（DHOxSS 2026）海报竞赛 Winner。当前版本也明确保留了大图加载、视角数量与国际化等后续优化方向。'
  },
  lingya: {
    s:'AIGC 产品进入校园时，既有认知门槛和使用场景模糊的问题，也缺少能够持续产出内容的早期创作者。',
    t:'作为腾讯灵芽校园大使，我负责从 0 到 1 建立校园获客与种子创作者孵化机制，同时把一线反馈带回产品侧。',
    a:'我联动社团、社群和朋友圈矩阵完成多渠道触达，引入十名种子创作者并提供工具教学、创作指导和案例拆解，再把创作者反馈整理为模板和体验优化建议。',
    r:'累计触达 2,000 余名学生，课程完课率达到 75%并提升 20 个百分点，由种子创作者进一步带来 180 名自然新增用户。'
  },
  douyin: {
    s:'校园媒体账号容易落入通知化和同质化内容，偶发热点也很难沉淀为稳定的人设、选题机制与用户关系。',
    t:'作为主编及主要负责人，我需要从 0 到 1 建立可持续的内容体系，让账号既有校园辨识度，也能稳定获得互动。',
    a:'我建立热点监测、选题策划和生产 SOP，结合数据复盘迭代发布时间与内容形式，并通过校园共创、评论互动和跨团队协作增强用户参与。',
    r:'账号累计播放量超过百万、单条视频最高播放 87.8 万，单月互动率提升 30%；策划执行的字节跳动樱花季校园活动线上直播累计观看 20,745 次、线下围观预估上万人次，形成可重复运行的校园内容生产与社群互动机制。'
  },
  'hi-acho': {
    s:'AI 口语产品需要同时验证教学接受度、对话体验与长期使用意愿，仅凭零散反馈难以判断流失原因和优化优先级。',
    t:'作为用户研究项目负责人，我需要把不同城市、不同用户的体验转化为有证据支撑、可排序的产品判断。',
    a:'我组织问卷设计、信效度检验和交叉分析，回收 1,022 份有效问卷，并在四座城市完成 20 余位用户深访，将定量结果与真实使用叙述相互验证。',
    r:'研究定位了语音识别、对话自然度与教学反馈等关键体验问题，并形成结构化的优化建议，为后续产品决策提供依据。'
  },
  'personal-content': {
    s:'从零开始运营个人账号时，缺少初始分发和固定受众，同一内容在不同平台也会受到完全不同的推荐与关系机制影响。',
    t:'我需要以低成本持续实验，找到可复用的选题、包装和分发方法，并建立稳定的个人内容定位。',
    a:'我提炼场景化选题模板与封面标题公式，通过 A/B 测试筛选内容方向，并分别针对视频号的社交传播和小红书的搜索推荐调整表达与发布策略。',
    r:'视频号单条内容播放达 11.2 万（超越 99.55% 同类视频）、七天粉丝增长 700%；小红书单篇浏览最高 1.8 万，其中「古代文学史」笔记被转化为纸媒报道。'
  }
};
