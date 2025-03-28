muban.首图2.二级.desc = 'p.data:eq(-1)&&Text;;;p.data:eq(-2)&&Text;p.data:eq(-3)&&Text';
var rule = {
    title: '达达龟',
    模板: '首图2',
    host: 'https://www.dadagui.me',
    // url:'/vodshow/fyclass--------fypage---.html',
    url: '/vodshow/fyclassfyfilter.html',
    filterable: 1, //是否启用分类筛选,
    filter_url: '-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter: {
        "1": [{
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "大陆",
                "v": "大陆"
            }, {
                "n": "香港",
                "v": "香港"
            }, {
                "n": "台湾",
                "v": "台湾"
            }, {
                "n": "美国",
                "v": "美国"
            }, {
                "n": "法国",
                "v": "法国"
            }, {
                "n": "英国",
                "v": "英国"
            }, {
                "n": "日本",
                "v": "日本"
            }, {
                "n": "韩国",
                "v": "韩国"
            }, {
                "n": "德国",
                "v": "德国"
            }, {
                "n": "泰国",
                "v": "泰国"
            }, {
                "n": "印度",
                "v": "印度"
            }, {
                "n": "意大利",
                "v": "意大利"
            }, {
                "n": "西班牙",
                "v": "西班牙"
            }, {
                "n": "加拿大",
                "v": "加拿大"
            }, {
                "n": "其他",
                "v": "其他"
            }]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "国语"
            }, {
                "n": "英语",
                "v": "英语"
            }, {
                "n": "粤语",
                "v": "粤语"
            }, {
                "n": "闽南语",
                "v": "闽南语"
            }, {
                "n": "韩语",
                "v": "韩语"
            }, {
                "n": "日语",
                "v": "日语"
            }, {
                "n": "法语",
                "v": "法语"
            }, {
                "n": "德语",
                "v": "德语"
            }, {
                "n": "其它",
                "v": "其它"
            }]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{
                "n": "时间",
                "v": "time"
            }, {
                "n": "人气",
                "v": "hits"
            }, {
                "n": "评分",
                "v": "score"
            }]
        }],
        "2": [{
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "内地",
                "v": "内地"
            }, {
                "n": "韩国",
                "v": "韩国"
            }, {
                "n": "香港",
                "v": "香港"
            }, {
                "n": "台湾",
                "v": "台湾"
            }, {
                "n": "日本",
                "v": "日本"
            }, {
                "n": "美国",
                "v": "美国"
            }, {
                "n": "泰国",
                "v": "泰国"
            }, {
                "n": "英国",
                "v": "英国"
            }, {
                "n": "新加坡",
                "v": "新加坡"
            }, {
                "n": "其他",
                "v": "其他"
            }]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "国语"
            }, {
                "n": "英语",
                "v": "英语"
            }, {
                "n": "粤语",
                "v": "粤语"
            }, {
                "n": "闽南语",
                "v": "闽南语"
            }, {
                "n": "韩语",
                "v": "韩语"
            }, {
                "n": "日语",
                "v": "日语"
            }, {
                "n": "其它",
                "v": "其它"
            }]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{
                "n": "时间",
                "v": "time"
            }, {
                "n": "人气",
                "v": "hits"
            }, {
                "n": "评分",
                "v": "score"
            }]
        }],
        "3": [{
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "内地",
                "v": "内地"
            }, {
                "n": "港台",
                "v": "港台"
            }, {
                "n": "日韩",
                "v": "日韩"
            }, {
                "n": "欧美",
                "v": "欧美"
            }]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "国语"
            }, {
                "n": "英语",
                "v": "英语"
            }, {
                "n": "粤语",
                "v": "粤语"
            }, {
                "n": "闽南语",
                "v": "闽南语"
            }, {
                "n": "韩语",
                "v": "韩语"
            }, {
                "n": "日语",
                "v": "日语"
            }, {
                "n": "其它",
                "v": "其它"
            }]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{
                "n": "时间",
                "v": "time"
            }, {
                "n": "人气",
                "v": "hits"
            }, {
                "n": "评分",
                "v": "score"
            }]
        }],
        "4": [{
            "key": "area",
            "name": "地区",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国产",
                "v": "国产"
            }, {
                "n": "日本",
                "v": "日本"
            }, {
                "n": "欧美",
                "v": "欧美"
            }, {
                "n": "其他",
                "v": "其他"
            }]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }]
        }, {
            "key": "lang",
            "name": "语言",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "国语",
                "v": "国语"
            }, {
                "n": "英语",
                "v": "英语"
            }, {
                "n": "粤语",
                "v": "粤语"
            }, {
                "n": "闽南语",
                "v": "闽南语"
            }, {
                "n": "韩语",
                "v": "韩语"
            }, {
                "n": "日语",
                "v": "日语"
            }, {
                "n": "其它",
                "v": "其它"
            }]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{
                "n": "时间",
                "v": "time"
            }, {
                "n": "人气",
                "v": "hits"
            }, {
                "n": "评分",
                "v": "score"
            }]
        }]
    },
    searchUrl: '/vodsearch/**----------fypage---.html',
    class_parse: '.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    lazy: `js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/\\.m3u8|\\.mp4/.test(url)) {
            input = {
                jx: 0,
                url: url,
                parse: 0
            }
        } else {
            input
        }
    `,
    // 搜索: muban.首图2.搜索1,
    搜索: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
}