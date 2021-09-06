var config = {
    style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    accessToken: 'pk.eyJ1IjoibmV3bmFuIiwiYSI6ImNrdDM1a2ZxMDBiYXUydm1qb2ZybGF6cWEifQ.u6qmMWphGinfoEJxw025Qg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Glaciers of Glacier National Park',
    subtitle: 'Change in coverage from 1998 to 2015',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: '1',
            alignment: 'full',
            title: '红色李巷',
            image: '1 .jpg',
            description: '李巷村位于南京主城南部、溧水东南部白马镇石头寨社区，距溧水城区26公里，距南京中心城区60公里。 由南京市委宣传部、市规划局、市建委联合主办的“南京十大地标评选活动”子榜单出炉，对外开放仅9个月的溧水红色李巷成功入选“南京十大红色文化地标”，与雨花台烈士陵园、渡江胜利纪念馆等知名红色场馆共获此殊荣。红色李巷堪称“红色文化地标界”的后起之秀。',
            location: {
                center: [119.148156,31.530391],
                zoom: 8,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: '2',
            alignment: 'left',
            title: '陈毅暂住地旧址',
            image: '陈毅旧居.jpg',
            description: '位于李巷村李光保家。建筑占地面积110平方米，保护范围面积130平方米。旧居由一进两厢组成，主屋三间，厢房各一间。当年陈毅居住在主屋西间。2017年修缮，主屋现为陈毅生平事迹展区，东厢房展出了陈毅铜像和部分事迹。陈毅在1938年6月至1939年10月曾三次在此居住。1938年6月8日，新四军第一支队司令员陈毅率部与粟裕领导的先遣支队在溧水新桥会师后，陈毅到达李巷村，住在李光保家。1939年4月，为进一步了解苏南地区抗日斗争的形势，陈毅到李巷村视察第二支队四团防区，住在李光保家。1939 年10月，陈毅再次来到李巷村视察工作，并参加了匪首徐大山的公审大会，在大会上作了讲话。其间，陈毅仍住在李光保家。',
            location: {
                center: [119.148156,31.530391],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '3',
            alignment: 'left',
            title: '李坚真居住地旧址',
            image: '李坚真旧居.jpg',
            description: '位于李巷村李光保家。建筑占地面积25平方米，保护范围面积为30平方米。1942年至1944年1月李坚真在此居住。旧居内设有李坚真生平、李坚真在溧水的主要抗日活动两块展板，并树有李坚真半身雕塑。李坚真是溧水第一位女县委书记，也是中共历史上第一位女县委书记，早在1931 年她就担任了中共长汀县委书记。1942年，她带领中共苏皖区委党校学员在李巷地区组织开展减租减息试点工作，使溧水县成为苏南减租减息工作的模范县。1943年10月，李坚真任中共溧水县委书记，1944年1月离开溧水。其间，李坚真以强大的人格魅力、严谨的工作态度、细腻的工作方式赢得了基层干部和溧水人民的爱戴。她即将调离溧水时，新桥区委书记徐若冰作诗留念：“大姐，她要南去了。心儿好像被什么东西塞住，说不出的难受，说不出的依恋……”',
            location: {
                center: [119.148156,31.530391],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: '4',
            alignment: 'left',
            title: '江渭清居住地旧址',
            image: '江渭清旧居.jpg',
            description: '位于李巷村芮学德家。建筑占地面积100平方米，保护范围面积240平方米。旧居为砖木结构的两层老式楼房，有一小院，院西为一组群雕，是根据村民回忆江渭清等人开会的场景创作而成。整座雕像生动活泼，旁边一个小男孩和一只小狗的设计极富生活趣味。旧居内设有江渭清雕像，十分逼真，其子江旅安看后夸赞雕像很传神。内部还设置有5块展板，记述了江渭清生平、在溧水的主要抗日活动及影像资料等内容。抗战时期，江渭清在溧水战斗时间较长。1938年7月，新四军第一支队一团在团长傅秋涛、副团长江渭清率领下进驻李巷地区，江渭清便长期住在芮学德家。华中局第一次扩大会议后，1942 年初，新四军第六师政治部主任兼十八旅旅长江渭清被任命为十六旅政委，4月21日至5月4日在李巷地区召开中共苏皖区委扩大会议，为了加强党的一元化领导，江渭清担任中共苏皖区委书记。1943 年3月18日，苏南区行政公署在李巷地区成立，江渭清任主任。江渭清与李巷村民结下了深厚的友谊，住芮学德家期间，曾为房东和邻居的孩子取名，谐音“抗胜”“必赢”。1985年10月苏南反顽战役阵亡将士纪念塔落成典礼后，江渭清专程前往李巷看望村民。',
            location: {
                center: [119.148156,31.530391],
                zoom: 12.92,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            title: '钟国楚居住地旧址',
            image: '钟国楚旧居.jpg',
            description: '位于李巷村李子发家。建筑占地面积100平方米，保护范围面积220平方米。旧居内设有钟国楚雕像，雕像目光如炬、栩栩如生。旧居内设置4块展板，分别介绍了钟国楚的生平、在溧水的主要抗日活动及影像资料等。钟国楚戎马一生，是抗战时期在溧水战斗时间最长的新四军将领。1938年7月，政治处主任钟国楚所在的第二支队三团进驻溧水西部的江当溧地区，开展抗日活动。1941年10月，四十六团政委钟国楚奉命率部恢复溧水抗日根据地。1942年初，谭震林不再兼任十六旅旅长，由钟国楚任旅长，江渭清任政委。1943年2月，原二旅和十六旅合编为十六旅，王必成任旅长，江渭清任政委，钟国楚任副旅长。钟国楚参与组织指挥了溧高战役、马占寺战斗等。因为在溧水战斗时间长，钟国楚对溧水人民和这片抗战热土怀有深厚的感情，1996年逝世后，按照他的遗愿，将其安葬在溧水中山烈士陵园。',
            location: {
                center: [119.148156,31.530391],
                zoom: 12.92,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        }
    ]
};
