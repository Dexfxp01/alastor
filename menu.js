const help = (p, date, user, wame) => {
return `Olรก @${user} bem vindo ao โ๐ฅโขโ๏ผญ๏ผฅ๏ผฌ๏ผฉ๏ผณ๏ผณ๏ผกโถโน ๐ฝ๐โ๐๐ฅโ, 
vejo aqui que vocรช assinou meu contrato entรฃo tem acesso ao menu,
se quiser ver minhas redes sociais escreva o comandossociais.

โญโโโโโโโโโโโโโโโโโโโโฎ
โโ๐ฅโขโ๏ผญ๏ผฅ๏ผฌ๏ผฉ๏ผณ๏ผณ๏ผกโถโน ๐ฝ๐โ๐๐ฅโ
โ  
โ Data: ${date}
โ
โ Wame: ${wame}
โ
โ Usuario: ${user}
โ
โ Prefixo: ${p}
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ ๐พ๐๐๐ผ๐ฟ๐๐ ๐
โ
โblocklevel (1 or 0) 
โblockcmd (cmd sem prefix) 
โunblockcmd (cmd sem prefix) 
โantispamcmd (1 or 0) 
โantipv (1 or 0) 
โantiligar (1 or 0)
โaddpalavra (txt) 
โrmpalavra (txt) 
โblock (num) 
โunblock (num) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐งโโ๏ธ ๐ผ๐๐๐๐ผ๐๐๐ ๐งโโ๏ธ
โ
โakinator
โresetaki
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ฃ๏ธ ๐๐๐๐๐ผ๐ฟ๐๐ ๐ฃ๏ธ
โ
โibere
โeminem
โfaustao
โpatolino
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ณ๏ธ ๐๐๐๐ ๐ณ๏ธ
โ
โvotohelp  
โvotoinit (txt) | opt1 | opt2
โclearvoto 
โvotostatus 
โvoto (opc) 
โvotofinish 
โgpvotohelp 
โgpvotoinit 
โgpclearvoto 
โgpvotostatus 
โgpvoto 
โgpvotofinish 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐โโ๏ธ ๐ฝ๐๐ผ๐ ๐๐๐๐ฟ๐ผ๐ ๐โโ๏ธ
โ
โbyeadd (txt) 
โwelcomeadd (txt) 
โwelcomehelp 
โwelcome (1 or 0) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ โฑ๏ธ ๐พ๐๐๐๐ผ๐ฟ๐๐ โฑ๏ธ
โ
โcheckativo (dial)  
โrankativo 
โatividade  
โfiltroativo (qnt) 
โbanativos 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐ ๐๐๐๐ผ๐ ๐
โ
โmute (marcar) 
โdesmute (marcar)  
โmutados 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐ซ ๐๐๐๐๐ ๐ซ
โ
โlevel (n/a, num) 
โฐโโโโโโโโโโโโโโโโโโโโฏ


โญโโโโโโโโโโโโโโโโโโโโฎ
โโณ ๐๐๐๐๐๐๐ โณ
โ
โrmlimituser 
โresetlimit  
โlimitcmd (1 or 0) 
โmylimit 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ โ ๐ผ๐๐๐ โ
โ
โantidoc (1 or 0) 
โantiloc (1 or 0) 
โantiimg (1 or 0) 
โantipalavra (1 or 0) 
โantivideo (1 or 0)  
โantisticker (1 or 0) 
โantiaudio (1 or 0) 
โantictt (1 or 0) 
โantilink (1 or 0) 
โantiporn (1 or 0) 
โantifake (1 or 0) 
โdontback (1 or 0) 
โantilinkhard (1 or 0) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐ฅ ๐๐๐๐๐๐ ๐ฅ
โ
โlistfake 
โlistbr 
โlistddd (country code) 
โdbackadd (num) 
โdbackrm (num)  
โfechargp 
โfecharhr 12:00
โmudarnome 
โabrirgp 
โabrirhr 12:00
โlinkgroup 
โlistadmin 
โleave 
โkick (dial num)  
โban (resp msg) 
โpromote (dial num) 
โdemote (dial num) 
โroletrussablock (1 or 0) 
โsimih (1 or 0) 
โautostickerimg (1 or 0) 
โautoreply (1 or 0) 
โmarcar 
โmarcar2 
โmarcar3 
โhidemarcar (txt) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ ๐๐๐ ๐
โ
โattp (txt) 
โattp2 (txt) 
โattp3 (txt) 
โattp4 (txt) 
โattp5 (txt) 
โattp6 (txt) 
โttp (txt) 
โttp2 (txt) 
โttp3 (txt) 
โttp4 (txt) 
โttp5 (txt) 
โttp6 (txt) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐จ ๐๐๐๐๐๐๐ ๐จ
โ
โ obs: coloque "me"
โ ou marque alguรฉm
โ
โtriggerfig 
โtriggered 
โamongus 
โlisa (txt) 
โsepie 
โinvert 
โgreyscale  
โlgbt 
โblur 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐๏ธ ๐๐๐๐๐ผ๐๐๐๐ ๐๏ธ
โ
โ obs: coloque "me"
โ ou marque alguรฉm
โ
โtrash 
โthomas 
โtatto 
โstonks 
โspank 
โrip 
โnotstonks 
โmms 
โkaraba 
โjail 
โhitler 
โfacepalm 
โbluediscord 
โblackdiscord 
โdelete 
โconfusedstonks 
โdobross 
โbeatiful 
โaffect 
โad 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  โจ ๐๐๐๐พ๐๐๐ โจ
โ
โstiker (leg, resp img) 
โsticker (leg, resp img) 
โcsticker (leg, resp img) 
โcstiker (leg, resp img) 
โfstiker (leg, resp img) 
โfsticker (leg, resp img) 
โnstiker (pack) (author) 
โnsticker (pack) (author) 
โnfstiker (pack) (author) 
โnfsticker (pack) (author) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐ฅ ๐๐๐๐๐๐ผ ๐๐๐๐๐ผ ๐ฅ
โ
โhelproleta 
โroletarussamed 
โroletarussaeasy 
โroletarussapac 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ #๏ธโฃ ๐๐๐๐ ๐ฟ๐ผ ๐๐๐๐๐ผ #๏ธโฃ
โ
โttt (dificulty) 
โcoord (coordenada)  
โtttme 
โtttrank 
โttthelp 
โdelttc  
โtttplayer (dial num)
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ ๐๐๐๐๐ ๐
โ
โpackmega18
โnhentai โฎcodeโฏ
โnsfw (1 or 0) 
โrandomhentai  
โnsfwblowjob  
โnsfwneko 
โnsfwtrap 
โanal  
โcum 
โyuri 
โhentainekogif  
โfutanari  
โnsfwfeet 
โnsfwfeetgif 
โgirlmasturbate  
โgirlmasturbategif  
โlesbian 
โeroyuri 
โeroneko
โerokitsune 
โspank
โฐโโโโโโโโโโโโโโโโโโโโฏ
โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ต ๐ผ๐๐ฟ๐๐ ๐ต
โ
โgtts (la) (txt) 
โlyrics 
โptlyrics  
โplay (music name) 
โplayv2 (music name) 
โtomp3 (cap, resp vid) 
โytmp4 (yt url) 
โytmp3 (yt url) 
โytsrc (query) 
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ ๐ซ๐ฐ๐ฝ๐ฌ๐น๐บ๐จฬ๐ถ ๐
โ 
โpapel 
โpedra 
โtesoura 
โcassino 
โdarkjokes 
โฐโโโโโโโโโโโโโโโโโโโโฏ
โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐ฑ ๐๐๐๐ฟ๐ผ ๐ฑ
โdolarhoje
โrublohoje
โienehoje
โlibrahoje
โbitcoinhoje
โrealhoje
โcvoin (c1)|(c2)
โccoin (c1)|(c2)|(num)
โฐโโโโโโโโโโโโโโโโโโโโฏ
โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ฎ ๐๐๐๐๐๐๐๐๐ ๐ฎ
โship (num1) (num2)
โcorno (num1)
โnazista (num1)
โcomunista (num1)
โgay (num1)
โqi (num1)
โseudia (num1)
โfeio (num1)
โbv (num1)
โgado (num1)
โgostoso (num1)
โgostosa (num1)
โrandomship (n1, n/a)
โฐโโโโโโโโโโโโโโโโโโโโฏ
`
}

exports.help = help


