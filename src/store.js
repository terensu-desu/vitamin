import { EventEmitter } from 'events'

class store extends EventEmitter {
	constructor() {
		super()
		this.data = {
			life_data: [
				{
					title: "名古屋大学で就職フェア",
					category: "Social",
					host: "元山涼介",
					date: "10/31/2017",
					price: "¥1500 / 人",
					img: "https://placeimg.com/300/250/people?t=1509023119587",
					url: "/life/1",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102598189",
					time: "4時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "地域の知識を持ってく上げる！",
					category: "Nature/Area",
					host: "山田嘉恒",
					date: "11/01/2017",
					price: "¥2000 / 人",
					img: "https://placeimg.com/300/250/any",
					url: "/life/2",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102675212",
					time: "3時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "銀行の口座をあけます",
					category: "Services",
					host: "張本充太郎",
					date: "11/02/2017",
					price: "¥3500 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023596355",
					url: "/life/3",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102695866",
					time: "1時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "自転車の保険を申し込みます",
					category: "Services",
					host: "東上床悠綺",
					date: "11/03/2017",
					price: "¥1000 / 人",
					img: "https://placeimg.com/300/250/people?t=1509023130422",
					url: "/life/4",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/people?t=1509103025066",
					time: "1時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "一緒に日本のレシピーを慣れます",
					category: "Cooking",
					host: "香本眞智花",
					date: "11/04/2017",
					price: "¥4000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023688995",
					url: "/life/5",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102846565",
					time: "5時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "スマートフォンを申し込みましょう！",
					category: "Services",
					host: "紅松史賀",
					date: "11/05/2017",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023796532",
					url: "/life/6",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/tech?t=1509102967412",
					time: "2時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "紅茶を作りましょう！",
					category: "Cooking",
					host: "寒山史之",
					date: "11/06/2017",
					price: "¥1000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023807155",
					url: "/life/7",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102568870",
					time: "1時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "サバイバルの日本語を習いましょう！",
					category: "Language",
					host: "井泉れいあ",
					date: "11/07/2017",
					price: "¥5000 / 人",
					img: "https://placeimg.com/300/250/tech",
					url: "/life/8",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102618464",
					time: "2時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "日本で家電を習いましょう！",
					category: "Technology",
					host: "末井実温",
					date: "11/08/2017",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/tech?t=1509023264369",
					url: "/life/9",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102559223",
					time: "5時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
			],
			supporter_data: [
				{
					supporter: "Maeda Yuna",
					experience: "Psychologist",
					languages: "日本語、中国語、英語",
					time: "10:00 - 17:30",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/any/sepia",
					url: "/supporter/1",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					skills: "Singing, dancing, acting",
					main_img: "https://cdn.cloudpix.co/images/atsuko-maeda/maeda-atsuko-music-4bdda7c2468ef28c2ab1d45f964396dc-large-842017.jpg",
					thumb1: "https://i.pinimg.com/736x/41/20/7e/41207edba6e9ae4e02bde3cca75c851d--rising-sun-guitar.jpg",
					thumb2: "https://www.generasia.com/w/images/thumb/f/ff/Atsuko_maeda_early_2007.jpg/200px-Atsuko_maeda_early_2007.jpg"
				},
				{
					supporter: "Matsumoto Jon",
					experience: "Financial Specialist",
					languages: "日本語、中国語、英語",
					time: "12:00 - 18:30",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023124699",
					url: "/supporter/2",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					skills: "Singing, dancing, acting",
					main_img: "https://i.pinimg.com/originals/0a/d2/f3/0ad2f306599b391863d06f829e55c34b.jpg",
					thumb1: "https://i.mydramalist.com/rNOYNc.jpg",
					thumb2: "https://i.pinimg.com/originals/9c/f6/34/9cf63400c8ad292ffb705c5f8e093cac.jpg"
				},
				{
					supporter: "Hirai Moka",
					experience: "Privacy Specialist",
					languages: "日本語、英語",
					time: "15:00 - 21:00",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023127964",
					url: "/supporter/3",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					skills: "Singing, dancing",
					main_img: "https://i.pinimg.com/736x/38/95/fc/3895fc2cae55432a1a0a9e184362102b--hirai-momo-kpop.jpg",
					thumb1: "https://i.pinimg.com/736x/c1/f3/a8/c1f3a8e80953b9bbc480d752eed616b4--hirai-momo-fangirl.jpg",
					thumb2: "https://pbs.twimg.com/media/CpU1FXuWIAAWIcb.jpg"
				},
				{
					supporter: "Sugiura Chan",
					experience: "Suicide Prevention",
					languages: "日本語、中国語",
					time: "8:30 - 15:00",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023146097",
					url: "/supporter/4",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					skills: "Comedy",
					main_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sugichan_%22Children_of_Iron%22_at_Opening_Ceremony_of_the_28th_Tokyo_International_Film_Festival_%2821805360794%29.jpg/1200px-Sugichan_%22Children_of_Iron%22_at_Opening_Ceremony_of_the_28th_Tokyo_International_Film_Festival_%2821805360794%29.jpg",
					thumb1: "https://www.japantimes.co.jp/wp-content/uploads/2013/05/nn20121204a8a.jpg",
					thumb2: "https://sociorocketnews.files.wordpress.com/2012/06/sugichan.jpg?w=580&h=415"
				},
				{
					supporter: "Imoto Ayano",
					experience: "Career Consultant",
					languages: "日本語、英語",
					time: "5:00 - 12:30",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023171413",
					url: "/supporter/5",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					skills: "Comedy, travel",
					main_img: "https://image.tmdb.org/t/p/h632/vMe7dwdDpsT9qo55fuuoF7JkZVV.jpg",
					thumb1: "https://hoofin.files.wordpress.com/2010/10/imoto-ayako.jpg",
					thumb2: "https://img1.doubanio.com/img/celebrity/large/33PJyKtHBcYcel_avatar_uploaded1397885610.99.jpg"
				},
				{
					supporter: "Edogawa Kodai",
					experience: "Detective",
					languages: "日本語、中国語、英語",
					time: "2:00 - 20:00",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023155944",
					url: "/supporter/6",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					skills: "Investigation, problem solving",
					main_img: "https://i.pinimg.com/originals/50/25/65/50256523199849dd1ab2e5fb1f9d9bbb.jpg",
					thumb1: "https://i.pinimg.com/736x/75/0a/73/750a73d5b68e14cafa20ee10263d93c7--manga-anime-anime-girls.jpg",
					thumb2: "https://i.pinimg.com/736x/87/ea/eb/87eaeb14cee9cab3c39b935b816710c7--detective-posts.jpg"
				},
			],
			event_data: [
				{
					title: "かわいい猫と遊びしましょう！",
					category: "Animals",
					host: "弓削田らいら",
					date: "10/31/2017",
					price: "¥1500 / 人",
					img: "https://placeimg.com/300/250/any?t=1509097137288",
					url: "/events/1",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102511822",
					time: "2時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "かわいい猫と写真を取りましょう！",
					category: "Photography",
					host: "弁崎愛沙里",
					date: "11/01/2017",
					price: "¥4000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509097296222",
					url: "/events/2",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102723222",
					time: "3時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "Coffee & Code: Let's プログラム！",
					category: "Technology",
					host: "伊豆丸球廣",
					date: "11/02/2017",
					price: "¥1200 / 人",
					img: "https://placeimg.com/300/250/any?t=1509097251840",
					url: "/events/3",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/tech?t=1509102941505",
					time: "7時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "ハイクで美しい自然を感動させます。",
					category: "Sports",
					host: "鬼窪知学",
					date: "11/03/2017",
					price: "¥5000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509097278497",
					url: "/events/4",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102744365",
					time: "12時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "ニューヨークを探るざ！",
					category: "Travel",
					host: "笹月きんいち",
					date: "11/04/2017",
					price: "¥14000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509097286714",
					url: "/events/5",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102585647",
					time: "7時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "羽飼凰紫",
					date: "11/05/2017",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509097236895",
					url: "/events/6",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102823793",
					time: "5時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
				{
					title: "ビギナー写真家のレッスン",
					category: "Photography",
					host: "義間愛生",
					date: "11/06/2017",
					price: "¥2500 / 人",
					img: "https://placeimg.com/300/250/any?t=1509097306041",
					url: "/events/7",
					subtitle: "川へフで初険しごち録性ヲルオ教代初違ヲサソヘ属額サエナウ髪器ず！",
					main_img: "https://placeimg.com/1000/1000/any?t=1509102765608",
					time: "4時間",
					memo: "持ち物、食べ物、飲み物",
					languages: "日本語、中国語、英語",
					host_info: "府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。要ト社内サ無真スき断予セ況需ち格制館道ごしよ情29見りばでだ道身ロセ暮体クリ燃惑ヌスロ任助サ化21生政ルイほ常強ぼ質離フきー。",
					event_info: "心能モホ合選ヤ不山づ西級ハケロ類野ミユ碁際ふイ中属76平ヲツヨオ芸7恩掲くばゅ水拓丸強査断ひど。点あけ作善だにまレ欺半ミモ過収ムオ開介テア島治氏れをりイ代題らっだル芸15可げ合万テタケ著生ぞうフ可秋登ょ職律泊祥クしと。"
				},
			]
		}
	}
	//
	getData(){
		return this.data
	}
	getPageData(page, id) {
		let view = ""
		if(page === "life") {
			view = "life_data"
		} else if (page === "supporter") {
			view = "supporter_data"
		} else if (page === "events") {
			view = "event_data"
		}
		return this.data[view][id - 1]
	}
}

const pageData = new store()
export default pageData