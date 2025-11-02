// Gift list data
const GIFTS_DATA = [
  {
    "name": "Polo Shirt",
    "description": "A nice polo shirt for casual occasions",
    "price": "",
    "link": ""
  },
  {
    "name": "Steam Gift Card",
    "description": "For buying games on Steam",
    "price": "As much you want",
    "link": "https://store.steampowered.com/digitalgiftcards/"
  },
  {
    "name": "Lego One Piece (Original)",
    "description": "Official Lego One Piece set",
    "price": "160 to  460 PLN",
    "link": "https://www.amazon.pl/LEGO-minifigurkami-dziewczynek-plakatami-75637/dp/B0DWDR1DBS/ref=asc_df_B0DWDR1DBS?mcid=dd7cb579516b3fc7a3629a3075c4c3c9&tag=plshogostdde-21&linkCode=df0&hvadid=719821083554&hvpos=&hvnetw=g&hvrand=3932351598298955791&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9051339&hvtargid=pla-2425145461803&psc=1&language=pl_PL&gad_source=1"
  },
  {
    "name": "Electric Scooter",
    "description": "For easy commuting around the city",
    "price": "",
    "link": "https://elensport.pl/shop_archive/electric-scooters/30.0.0.0.1119.2.1.en.0.htm"
  },
  {
    "name": "BBQ Kit",
    "description": "Complete set for barbecue",
    "price": "",
    "link": "https://allegro.pl/oferta/zestaw-walizka-do-grilla-prezent-na-dzien-ojca-taty-przybory-akcesoria-bbq-17558969746?utm_feed=aa34192d-eee2-4419-9a9a-de66b9dfae24&utm_source=google&utm_medium=cpc&utm_campaign=_dio_wyposazenie_pla_ss&ev_adgr=_dio_wyposazenie_ss&ev_campaign_id=22602123266&gad_source=1&gad_campaignid=22602123266&gbraid=0AAAAAD24kbPeMwAhBWXlJAHypqA3eb-PB&gclid=Cj0KCQjwgpzIBhCOARIsABZm7vEnIjMJFjNEkG-P-H5bhMrnFGbj4SGMfOqBV3iUII3x9J8tXBeKaUgaAqjEEALw_wcB"
  },
  {
    "name": "Sweatpants",
    "description": "Comfortable pants for lounging",
    "price": "",
    "link": "https://www.amazon.pl/adidas-M%C4%99%C5%BCczy%C5%BAni-Essentials-3-Stripes-Training/dp/B0BQWK2XX5/ref=asc_df_B0BQWK2XX5?mcid=98875b65f15a3555b1594793e8c5bfcc&tag=plshogostdde-21&linkCode=df0&hvadid=719703756192&hvpos=&hvnetw=g&hvrand=15913281606590393802&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9051339&hvtargid=pla-2199845338040&psc=1&language=pl_PL&gad_source=1"
  },
  {
    "name": "Non-Electric Scooter",
    "description": "Manual kick scooter",
    "price": "",
    "link": "https://allegro.pl/listing?string=Hulajnoga%20do%20150%20kg"
  },
  {
    "name": "3D Hologram Photo Frame (Geek Magic)",
    "description": "Cool 3D holographic display frame",
    "price": "",
    "link": "https://www.temu.com/pl/mini--giftv--photo-display-holographic-desktop-smart-weather-station-digital-clock-with-animated-album-g-601102391144256.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F107e41c1-05fa-4952-9531-3e9ae1756826.jpg&spec_gallery_id=354939&share_token=zaaOftzbbSdpM9ffnfUcP37OUYFpRg2TQep1Wx6AUszGWv2uaH9wp_POtjbpwI_CtEP9WYYIl5ZI17jZY26FQ7gb9L_E6PF2abBa4NMtZtAg-ITDfisEZCkrGx1Rryq9sOZcjHexfx3n8NCdVNRgVZQNZWS6ZRtMawQqhnCvfSX&_x_vst_scene=adg&_x_ads_sub_channel=shopping&_x_ns_prz_type=-1&_x_ns_sku_id=17604477140216&_x_ns_gid=601102391144256&_x_ads_channel=google&_x_gmc_account=762730731&_x_login_type=Google&_x_ns_gg_lnk_type=adr&_x_ads_account=7293790144&_x_ads_set=21210032819&_x_ads_id=159696891005&_x_ads_creative_id=697123721415&_x_ns_source=g&_x_ns_gclid=Cj0KCQjwgpzIBhCOARIsABZm7vHjXAWd5P8WoP-urjveFnMi3tPUwlMJZiIu9ChF4yVovOBmHVpOk1gaAlRvEALw_wcB&_x_ns_placement=&_x_ns_match_type=&_x_ns_ad_position=&_x_ns_product_id=762730731-en-17604477140216&_x_ns_target=&_x_ns_devicemodel=&_x_ns_wbraid=CkwKCAjw35bIBhBFEjwAZPYSd3UIPc9zOB7D1t5KZAFVsjuApo589ymqyHq8jjcZgd3Y-cUr2Ow2ocAxplHYZFVRnieLaXkIG0saAkSu&_x_ns_gbraid=0AAAAAo4mICEtg8tXHqlSDhXFeu9xjys4N&_x_ns_targetid=pla-311657494501&refer_page_name=kuiper&refer_page_id=13554_1762111864048_fingscc72x&refer_page_sn=13554&_x_sessn_id=mb86ys7knc"
  },
  {
    "name": "T-shirts",
    "description": "Casual t-shirts",
    "price": "",
    "link": "https://www.temu.com/pl/-bawe%C5%82niana--koszulka-anime--no--kamogawa-boxing-gym-lu%C5%BAna-koszulka-m%C4%99ska-damska-y2k-hip-hop-letnia-bluzka-g-601101328195458.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fd12361844fd649e590a88551df36e5d4-goods.jpeg&spec_id=17098&spec_gallery_id=73918&spec_ids=17098&share_token=zaaOftzbbSdpM9ffnfUcP37OUYFpRg2TQep1Wx6AUs7Aqt0BdaYGFney0rRCz1lxNeBNLV6Kopk6GLGBVpX9CHycLYHzPnwya_NJ1WS6bW0zfVjJ9a97IPKAzcww-AIxYhjI9OO9LSLb7kNZZh9pQfXrt50JBfjFCWFEyzZ_OPY&_x_vst_scene=adg&_x_ads_sub_channel=shopping&_x_ns_prz_type=-1&_x_ns_sku_id=17599311997323&_x_ns_gid=601101328195458&_x_ads_channel=google&_x_gmc_account=5583656541&_x_login_type=Google&_x_ns_gg_lnk_type=adr&_x_ads_account=1703989576&_x_ads_set=22564768316&_x_ads_id=176897623382&_x_ads_creative_id=752546954049&_x_ns_source=g&_x_ns_gclid=Cj0KCQjwgpzIBhCOARIsABZm7vHagq6DZwdAJGrX-bFNG0p6ucYNL1esLIhCP-wNtB5EArnftjI4-egaAgyGEALw_wcB&_x_ns_placement=&_x_ns_match_type=&_x_ns_ad_position=&_x_ns_product_id=5583656541-17599311997323&_x_ns_target=&_x_ns_devicemodel=&_x_ns_wbraid=CkwKCAjw35bIBhBFEjwAZPYSd8RjEkVtEuxIPKYAmq4aoB4h3Pz8_GhehUCZY6adrjXwfXIXynJPu0zTSPxOITDnLfI4WQv077MaAk9O&_x_ns_gbraid=0AAAAAo4mICFWsOeGq-Mjke4LbgOPqxsTY&_x_ns_targetid=pla-2433834027038&_x_sessn_id=feu6u8f1qx&refer_page_name=kuiper&refer_page_id=13554_1762111902902_0gysvfzhkk&refer_page_sn=13554"
  },
  {
    "name": "Social Socks",
    "description": "Fun and stylish socks",
    "price": "",
    "link": ""
  },
  ,
  {
    "name":"Sport Shorts",
    "description": "Regular comfortable socks",
    "price": "",
    "link": "https://www.temu.com/pl/m%C4%99skie-spodenki-sportowe-2-w-1-z-nadrukiem-3d-podw%C3%B3jna-warstwa-du%C5%BCe-kieszenie-sznurek-w--mieszanka-poliestrowa-bia%C5%82o-czerwony-kolorystyka-logo--i-wz%C3%B3r-gwiazd-wygodne-do-uprawiania--i-codziennego-noszenia-stylowe-spodenki-sportowe-trwa%C5%82y-materia%C5%82-g-601100103312957.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F76121899-b611-4be3-ab27-5842ae999fc7.jpg&spec_id=2001&spec_gallery_id=26405&spec_ids=2001&share_token=zaaOftzbbSdpM9ffnfUcP37OUYFpRg2TQep1Wx6AUsz-9XU20lDAGhS0zz6C1_pWWHei2pTl8CmA_9DItBRXi_KrXLP4clsRPqCwVFG-jtEJk8Zdfwt9oDZ4p1Ob_yIiMTatyuYfJdYC9qV43xP9VlzPKv6aKG307R_jL6YpTgE&_x_vst_scene=adg&_x_ads_sub_channel=shopping&_x_ns_prz_type=-1&_x_ns_sku_id=17594736989685&_x_ns_gid=601100103312957&_x_ads_channel=google&_x_gmc_account=5583656541&_x_login_type=Google&_x_ns_gg_lnk_type=adr&_x_ads_account=1703989576&_x_ads_set=22806166989&_x_ads_id=188437448131&_x_ads_creative_id=765009104387&_x_ns_source=g&_x_ns_gclid=Cj0KCQjwgpzIBhCOARIsABZm7vGqhxohbHazJD5dBwiSma-lPBRv5Rsubknr3SuPjqN5ry01Cwq2LvwaAuOxEALw_wcB&_x_ns_placement=&_x_ns_match_type=&_x_ns_ad_position=&_x_ns_product_id=5583656541-17594736989685&_x_ns_target=&_x_ns_devicemodel=&_x_ns_wbraid=CkwKCAjw35bIBhBFEjwAZPYSd9AA-Qs6xdqIoqqkNK3lVeUK-IaIUjBg0roBMv594D2A0bhkg-TxaCaS01cP_5RBgX8o0puw5I8aAnUR&_x_ns_gbraid=0AAAAAo4mICFHEvAQBhpGYHAe_3_V6PQZR&_x_ns_targetid=pla-2430580960776&refer_page_name=kuiper&refer_page_id=13554_1762112108097_jf8o81gw0l&refer_page_sn=13554&_x_sessn_id=1bdtgrwqjb"
  },
  {
    "name": "Funko Pop Luffy Gear 5",
    "description": "One Piece collectible figure",
    "price": "",
    "link": "https://www.amazon.pl/Funko-POP-Animation-kolekcjonerska-oficjalny/dp/B0CDJQT8XJ/ref=asc_df_B0CDJQT8XJ?mcid=7dae5192de503293a5e89b1775d831e3&tag=plshogostdde-21&linkCode=df0&hvadid=719622508008&hvpos=&hvnetw=g&hvrand=15552283479566743915&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9051339&hvtargid=pla-2309029742764&psc=1&language=pl_PL&gad_source=1"
  },
  {
    "name": "Tournament Arc: Build Your Own Sports Anime with Friends!",
    "description": "Fun board/card game about creating sports anime",
    "price": "",
    "link": "https://www.kickstarter.com/projects/littlecreature/tournament-arc-card-game"
  },
  {
    "name": "Kamen Rider Item",
    "description": "Any Kamen Rider collectible or merchandise",
    "price": "",
    "link": ""
  },
  {
    "name": "Socks",
    "description": "Regular comfortable socks",
    "price": "",
    "link": "https://www.aliexpress.com/p/tesla-landing/index.html?scenario=c_ppc_item_bridge&productId=1005007307349222&_immersiveMode=true&withMainCard=true&src=google&aff_platform=true&isdl=y&src=google&albch=shopping&acnt=231-612-1468&isdl=y&slnk=&plac=&mtctp=&albbt=Google_7_shopping&aff_platform=google&aff_short_key=_oFgTQeV&gclsrc=aw.ds&&albagn=888888&&ds_e_adid=&ds_e_matchtype=&ds_e_device=c&ds_e_network=x&ds_e_product_group_id=&ds_e_product_id=pl1005007307349222&ds_e_product_merchant_id=5556343033&ds_e_product_country=PL&ds_e_product_language=pl&ds_e_product_channel=online&ds_e_product_store_id=&ds_url_v=2&albcp=22977263263&albag=&isSmbAutoCall=false&needSmbHouyi=false&gad_source=1&gad_campaignid=22977280474&gbraid=0AAAABBR8kP3cXKC85xpX9gNeRlerecLv4&gclid=Cj0KCQjwgpzIBhCOARIsABZm7vHspuyWmaT4TVpQcOlylCGtUnj9GzdqI6YDvLG1NjhzjnbSWp-FlP4aAmPVEALw_wcB"
  }
];