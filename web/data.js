const getListOfContents = (function() {
  const t = [
    { text: 'Biography', slag: 'bio' },
    { text: 'Discography', slag: 'disco' },
    { text: 'Live', slag: 'live' },
    { text: 'Goods', slag: 'goods' },
    { text: 'Contact', slag: 'contact' }
  ];

  return {
    mobile() {
      const t2 = t.slice();
      t2.splice(-1, 0, { text: 'Twitter', slag: 'twitter' });
      t2.splice(-1, 0, { text: 'Youtube', slag: 'youtube' });
      t2.splice(-1, 0, { text: 'Soundcloud', slag: 'soundcloud' });
      return t2;
    },
    list() {
      return t;
    },
    name() {
      return [
        { name: 'Ba しじゅん', id_twit: 'season_urb', id_insta: 'ykpy' },
        { name: 'Gt 澤田誠也', id_twit: 'esparto_kaga', id_insta: 'ykpy' },
        { name: 'Vo イカリヤマナツ', id_twit: 'piyoco009', id_insta: 'ykpy' },
        { name: 'Synth.Vo 伊藤薫人', id_twit: 'ykpythemind', id_insta: 'ykpy' },
        { name: 'Dr たまちゃん', id_twit: false, id_insta: 'ykpy' }
      ];
    },
    live() {
      return [
        {
          title: 'WONDER WALL vol.5×DUNCE SCHOOL vol.5',
          date: '2018/2/25',
          place: '鶴舞KDハポン',
          img: 'img/wonderwall225.jpg',
          text:
            'op/st 17:30/18:00 <br> adv/door ￥2,300/￥2,500(+1D) <br> w/ ULTRA CUB / Emu sickS / THE FREAKS / Lahaha'
        },
        {
          title: '「Here and there Vol.2」名古屋編',
          date: '2018/2/10',
          place: "新栄Club Rock'n'nRoll",
          img: 'img/20180210.jpg',
          text:
            'op/st 17:00/17:30 <br> adv/door ￥2200/￥2700 (+1D) <br> w/ Ms.take / YUMEGIWA GIRL FRIEND'
        },
        {
          title: '',
          date: '2018/1/14',
          place: '京都MOJO',
          img: '',
          text:
            '開演：16:30 <br> 前売：¥2,000 <br> 出演：the spooks(島根) / 野良猫ガッツ / ベリーバッドアラモード / 福永大使館 / Catch The Ground / Pince-Nez / Funny Funk Fish'
        },
        {
          title: '南堀江ばくはけいかく',
          date: '2018/1/8',
          place: '南堀江knave',
          img: 'img/20180108.jpg',
          text:
            'adv/door ￥2,000/￥2,500（＋1D） <br>w/ Emu sickS / the denkibran / マチルダにおねがい / Lambda '
        },
        {
          title: 'Synchronized Rockers Vol.46',
          date: '2017/12/29',
          place: "新栄Club Rock'n'nRoll",
          img: 'img/rock.jpg',
          text:
            '[LIVE] monaca yellow city / ゼローネ / ロストフィルム / [DJ] 野垣内悠'
        },
        {
          title: 'For sight vol.3',
          date: '2017/9/23',
          place: '栄TIGHTROPE',
          img: 'img/forsight.jpg',
          text: 'ろいさん企画'
        },
        {
          title: '16ビートアザラシコンピツアー 京都編',
          date: '2017/9/3',
          place: '京都GROWLY',
          img: 'img/16beat_kyoto.jpg',
          text:
            '開演:17:30 / 前売:2,000円<br> w/ Emu sickS / about a ROOM（福岡） / SAPPY（神戸） / YOOKs'
        },
        {
          title: '悲しいことに慣れたならvol.7',
          date: '2017/8/6',
          place: '新栄DAYTRIVE',
          img: 'img/nare_7.png',
          text:
            '猫を堕ろすpresents【悲しいことに慣れたなら vol.7】DALLJUB STEP CLUB 「CHECK THE SHADOW」Release Tour <br><br>名古屋 新栄DAYTRIVE<br>open  18:30 / start 19:00<br>ticket 3000円 (FREEDRINK)<br>act: 猫を堕ろす / DALLJUB STEP CLUB (東京) / yobai video (茨城) / the coast / the Ships'
        },
        {
          title: '『β beat』',
          date: '2017/7/9',
          place: '京都GROWLY',
          img: '',
          text:
            '出演:ネオンズ/ジェットシンセサイザーズ/DAVID BOYS/SUNNY SIDE RAINS/BAKEMON<br>開演18:00 前売2000円<br>初の県外ライブ'
        },
        {
          title: '「夏のビール祭り～名古屋場所」',
          date: '2017/6/18',
          place: '鶴舞KDハポン',
          img: '',
          text:
            'w/ テトペッテンソン / ハポン。/ mmm / mad tapes erase group / 黒岡まさひろ / [DJ] Oya Goto Senseidani / [DECO] AZK <br><br>16:30～ ￥2500'
        },
        {
          title: '悲しいことに慣れたならvol.6',
          date: '2017/5/7',
          place: '鶴舞DAYTRIP',
          img: 'img/kanasi_kotoni_naretanara_vol6_mini.jpg',
          text:
            '1stアルバム「The Cats Are Alright」レコ発！！ <br>open  18:00 / start 18:30 ticket 3000円(FREEDRINK) <br> act :猫を堕ろす / soratobiwo / 谷本早也歌 / LADY FLASH / ハポン。'
        },
        {
          title: '悲しいことに慣れたならvol.5',
          date: '2017/3/25',
          place: '新栄DAYTRIVE',
          img: 'img/nare5_1.jpg',
          text:
            'OP 17:30/ST 18:00　TICKET ￥3000（FREEDRINK付き）　<br>act 猫を堕ろす / TAMTAM / DALLJUB STEP CLUB / The Blind Kids / FUZZKLAXON <br><br>[<a href="http://nare5.nkwors.com/">詳細</a>]'
        },
        {
          title: '『おとを紡ぐ』',
          date: '2017/2/25',
          place: '鶴舞KDハポン',
          img: '',
          text:
            '18:00OP/18:30ST　予約¥2,000/当日2,500（D代別）　<br>act ハラフロムヘル（千葉） / 猫を堕ろす / and more!(後日解禁)'
        },
        {
          title: '悲しいことに慣れたならvol.4',
          date: '2017/1/8',
          place: '鶴舞KDハポン',
          img: 'img/nkwors20170108.jpg',
          text:
            'OP/ST 18:00/18:30 TICKET 2500yen(+1Drink) w/ CICADA(東京) / ミスタニスタ(京都) / the Ships'
        },
        {
          title: '猫を堕ろすpresents. 悲しいことに慣れたなら vol.3',
          date: '2016/11/19',
          place: '東山 Studio 246',
          img: 'img/nk3_fly_new.jpg',
          text: ''
        },
        {
          title: '悲しいことに慣れたなら vol.2',
          date: '2016/9/25',
          place: '新栄DAYTRIVE',
          img: 'img/NKvol2_2.jpg',
          text: ''
        },
        {
          title: 'Daytrip 18th Anniversary [瞬の美]',
          date: '2016/7/4',
          place: '鶴舞DAYTRIP',
          img: '',
          text:
            'open/start 17:00/17:30<br>adv/door 2000/2500yen(D別)<br>ジョニー大蔵大臣(水中、それは苦しい) / アクロバット★少年 / Over Beat / ALILIE / 猫を堕ろす / バナナズ / ともだちはいらない'
        },
        {
          title: '対BURRN！',
          date: '2016/2/7',
          place: '鶴舞KDハポン',
          img: '',
          text:
            '出演：oasobi / Sukida dramas / 猫を堕ろす<br>スリーマンなので長めにやります！ボーカルなっちゃんのデビュー戦ですのでお見逃しなく！'
        }
      ];
    }
  };
})();

// { title: '', date: '', place: '', img: '',text: ''},
