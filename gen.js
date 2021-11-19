let 名人名言 = [
    "我们要学会专时专用，不该写作业的时候就不写作业，下课就该好好放松，",
    "你们下课写出来的作业，有过质量吗？你们就像教室里的写作业机器、行尸走肉，",
    "为什么没有一个班委出面解决问题？全体班委起立！一个个来说！",
    "现在，解决主题的问题，是非常重要的，这牵扯到我们班级里的每一个同学。所以，",
    "主题这件事很可能成曾为我们班的一个滑铁卢，我们不得不面对 6 班少有的嘲笑。",
    "最近我们班级在各个方面出现了种种漏洞，包括主题等等。",
    "班委丝毫起不到带头作用，一个人不作为，全班不作为！",
    "对老师要有基本的尊重，我不配拥有姓名吗？",
    "我不是你妈，我就算是你妈也养不出来你这样的！",
    "你们在我的课上都敢讲话！更不要说其他的课了！",
    "其他什么乱七八糟的课外班，能看回放的都去看回放！",
    "你们是戴着红领巾的学生！你们觉得这么做合适吗！",
    "你们不带作业不带备忘录回家，这是你们从预初到现在还没改掉的坏习惯！"
];

let 后面垫话 = [
    "是吗？",
    "对吧？",
    "邓老师都说过多少遍了，还是有人不理解！",
    "只考虑着自己，没有一点集体意识。",
    "这就是不专时专用的后果。",
    "就是这样。",
    "自私自利，完全不顾他人感受！",
    "我接下来会好好观察你们几个的表现。",
    "好好提高思想觉悟！",
    "这终将会体现在你们的学习成绩上！",
    "你们像是 7 班的样子吗？"
];

let 前面垫话 = [
    "作为华育的学生，",
    "作为 7 班的优秀学生，",
    "青春期正是你们荷尔蒙最旺盛的时候，",
    "我再强调一遍，",
    "体委，你给我起立！",
    "你们不要不信邪，",
    "进入初二年级，我们更应该学会调整自己的学习状态，"
];

function 随便取一句(列表) {
    let 坐标 = Math.floor(Math.random() * 列表.length);
    return 列表[坐标];
};

function 随便取一个数(最小值 = 0, 最大值 = 100) {
    let 数字 = Math.random() * (最大值 - 最小值) + 最小值;
    return 数字;
}

function 来点论述(主题) {
    let 名言 = 随便取一句(名人名言).replace(RegExp("主题", "g"), 主题)
    名言 = 随便取一句(前面垫话) + 名言 + 随便取一句(后面垫话)
    return 名言;
}

function 增加段落(章节) {
    if (章节[章节.length - 1] === " ") {
        章节 = 章节.slice(0, -2)
    }
    return "　　" + 章节
}

function 生成文章(主题) {
    let 文章 = []
    for (let 空 in 主题) {
        let 章节 = "";
        let 章节长度 = 0;
        while (章节长度 < 5000) {
            let 随机数 = 随便取一个数();
            if (随机数 < 5 && 章节.length > 200) {
                章节 = 增加段落(章节);
                文章.push(章节);
                章节 = "";
            } else {
                let 句子 = 来点论述(主题);
                章节长度 = 章节长度 + 句子.length;
                章节 = 章节 + 句子;
            }
        }
        章节 = 增加段落(章节);
        文章.push(章节);
    }
    return 文章.join("\n");
}