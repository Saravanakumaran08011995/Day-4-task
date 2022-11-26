var obj1 = {name : "Person1", age : 5};
var obj2 = {age: 5, name: "Person1"};
var jsn1 = JSON.stringify(obj1);
var jsn_1 = JSON.parse(jsn1);
var jsn2 = JSON.stringify(obj2);
var jsn_2 = JSON.parse(jsn2);
console.log("Question 1")
if(jsn_1.name === jsn_2.name && jsn_1.age === jsn_2.age){
    console.log("True")
}
else{
    console.log("False")
}

/* Output
Question 1
True
*/

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all", true)
request.send()
console.log("Question 2")
request.onload = function (){
    var data = request.response
    var result = JSON.parse(data)
    for(let i of result){
        console.log(i.flags.png);
    }
    console.log("Question 3")
    for(let i of result){
    console.log("name : ", i.name.common,",","region :", i.region,",","sub_region : ",i.subregion,",","population : ",i.population)
}
}

/* 
Output
Question 2
script.js:28 https://flagcdn.com/w320/mr.png
script.js:28 https://flagcdn.com/w320/aw.png
script.js:28 https://flagcdn.com/w320/ar.png
script.js:28 https://flagcdn.com/w320/se.png
script.js:28 https://flagcdn.com/w320/mv.png
script.js:28 https://flagcdn.com/w320/mx.png
script.js:28 https://flagcdn.com/w320/nz.png
script.js:28 https://flagcdn.com/w320/ec.png
script.js:28 https://flagcdn.com/w320/wf.png
script.js:28 https://flagcdn.com/w320/ax.png
script.js:28 https://flagcdn.com/w320/me.png
script.js:28 https://flagcdn.com/w320/pk.png
script.js:28 https://flagcdn.com/w320/pn.png
script.js:28 https://flagcdn.com/w320/zm.png
script.js:28 https://flagcdn.com/w320/sc.png
script.js:28 https://flagcdn.com/w320/my.png
script.js:28 https://flagcdn.com/w320/no.png
script.js:28 https://flagcdn.com/w320/uz.png
script.js:28 https://flagcdn.com/w320/vu.png
script.js:28 https://flagcdn.com/w320/tf.png
script.js:28 https://flagcdn.com/w320/cx.png
script.js:28 https://flagcdn.com/w320/sg.png
script.js:28 https://flagcdn.com/w320/sr.png
script.js:28 https://flagcdn.com/w320/eh.png
script.js:28 https://flagcdn.com/w320/mf.png
script.js:28 https://flagcdn.com/w320/cr.png
script.js:28 https://flagcdn.com/w320/hm.png
script.js:28 https://flagcdn.com/w320/ie.png
script.js:28 https://flagcdn.com/w320/aq.png
script.js:28 https://flagcdn.com/w320/au.png
script.js:28 https://flagcdn.com/w320/ly.png
script.js:28 https://flagcdn.com/w320/qa.png
script.js:28 https://flagcdn.com/w320/gl.png
script.js:28 https://flagcdn.com/w320/mu.png
script.js:28 https://flagcdn.com/w320/kz.png
script.js:28 https://flagcdn.com/w320/io.png
script.js:28 https://flagcdn.com/w320/al.png
script.js:28 https://flagcdn.com/w320/bh.png
script.js:28 https://flagcdn.com/w320/pg.png
script.js:28 https://flagcdn.com/w320/bi.png
script.js:28 https://flagcdn.com/w320/in.png
script.js:28 https://flagcdn.com/w320/uy.png
script.js:28 https://flagcdn.com/w320/lc.png
script.js:28 https://flagcdn.com/w320/bb.png
script.js:28 https://flagcdn.com/w320/nc.png
script.js:28 https://flagcdn.com/w320/lv.png
script.js:28 https://flagcdn.com/w320/ee.png
script.js:28 https://flagcdn.com/w320/nu.png
script.js:28 https://flagcdn.com/w320/bl.png
script.js:28 https://flagcdn.com/w320/pr.png
script.js:28 https://flagcdn.com/w320/gd.png
script.js:28 https://flagcdn.com/w320/mo.png
script.js:28 https://flagcdn.com/w320/cy.png
script.js:28 https://flagcdn.com/w320/im.png
script.js:28 https://flagcdn.com/w320/gr.png
script.js:28 https://flagcdn.com/w320/sy.png
script.js:28 https://flagcdn.com/w320/lt.png
script.js:28 https://flagcdn.com/w320/cw.png
script.js:28 https://flagcdn.com/w320/dm.png
script.js:28 https://flagcdn.com/w320/ne.png
script.js:28 https://flagcdn.com/w320/kg.png
script.js:28 https://flagcdn.com/w320/tt.png
script.js:28 https://flagcdn.com/w320/tg.png
script.js:28 https://flagcdn.com/w320/ps.png
script.js:28 https://flagcdn.com/w320/mg.png
script.js:28 https://flagcdn.com/w320/hr.png
script.js:28 https://flagcdn.com/w320/fo.png
script.js:28 https://flagcdn.com/w320/ht.png
script.js:28 https://flagcdn.com/w320/ms.png
script.js:28 https://flagcdn.com/w320/ck.png
script.js:28 https://flagcdn.com/w320/tl.png
script.js:28 https://flagcdn.com/w320/mq.png
script.js:28 https://flagcdn.com/w320/cu.png
script.js:28 https://flagcdn.com/w320/tw.png
script.js:28 https://flagcdn.com/w320/sz.png
script.js:28 https://flagcdn.com/w320/ua.png
script.js:28 https://flagcdn.com/w320/bm.png
script.js:28 https://flagcdn.com/w320/kr.png
script.js:28 https://flagcdn.com/w320/pe.png
script.js:28 https://flagcdn.com/w320/iq.png
script.js:28 https://flagcdn.com/w320/md.png
script.js:28 https://flagcdn.com/w320/sm.png
script.js:28 https://flagcdn.com/w320/ve.png
script.js:28 https://flagcdn.com/w320/gy.png
script.js:28 https://flagcdn.com/w320/ky.png
script.js:28 https://flagcdn.com/w320/kh.png
script.js:28 https://flagcdn.com/w320/cc.png
script.js:28 https://flagcdn.com/w320/mt.png
script.js:28 https://flagcdn.com/w320/lk.png
script.js:28 https://flagcdn.com/w320/il.png
script.js:28 https://flagcdn.com/w320/sd.png
script.js:28 https://flagcdn.com/w320/vi.png
script.js:28 https://flagcdn.com/w320/er.png
script.js:28 https://flagcdn.com/w320/ml.png
script.js:28 https://flagcdn.com/w320/so.png
script.js:28 https://flagcdn.com/w320/nf.png
script.js:28 https://flagcdn.com/w320/km.png
script.js:28 https://flagcdn.com/w320/ni.png
script.js:28 https://flagcdn.com/w320/ru.png
script.js:28 https://flagcdn.com/w320/ug.png
script.js:28 https://flagcdn.com/w320/nr.png
script.js:28 https://flagcdn.com/w320/ch.png
script.js:28 https://flagcdn.com/w320/pt.png
script.js:28 https://flagcdn.com/w320/tj.png
script.js:28 https://flagcdn.com/w320/ss.png
script.js:28 https://flagcdn.com/w320/bv.png
script.js:28 https://flagcdn.com/w320/fm.png
script.js:28 https://flagcdn.com/w320/as.png
script.js:28 https://flagcdn.com/w320/cz.png
script.js:28 https://flagcdn.com/w320/bw.png
script.js:28 https://flagcdn.com/w320/tn.png
script.js:28 https://flagcdn.com/w320/ai.png
script.js:28 https://flagcdn.com/w320/gw.png
script.js:28 https://flagcdn.com/w320/sk.png
script.js:28 https://flagcdn.com/w320/mh.png
script.js:28 https://flagcdn.com/w320/dz.png
script.js:28 https://flagcdn.com/w320/jm.png
script.js:28 https://flagcdn.com/w320/mz.png
script.js:28 https://flagcdn.com/w320/es.png
script.js:28 https://flagcdn.com/w320/hn.png
script.js:28 https://flagcdn.com/w320/nl.png
script.js:28 https://flagcdn.com/w320/za.png
script.js:28 https://flagcdn.com/w320/az.png
script.js:28 https://flagcdn.com/w320/mk.png
script.js:28 https://flagcdn.com/w320/gm.png
script.js:28 https://flagcdn.com/w320/lr.png
script.js:28 https://flagcdn.com/w320/lu.png
script.js:28 https://flagcdn.com/w320/cv.png
script.js:28 https://flagcdn.com/w320/bs.png
script.js:28 https://flagcdn.com/w320/ge.png
script.js:28 https://flagcdn.com/w320/ki.png
script.js:28 https://flagcdn.com/w320/tz.png
script.js:28 https://flagcdn.com/w320/cn.png
script.js:28 https://flagcdn.com/w320/gt.png
script.js:28 https://flagcdn.com/w320/st.png
script.js:28 https://flagcdn.com/w320/de.png
script.js:28 https://flagcdn.com/w320/sl.png
script.js:28 https://flagcdn.com/w320/td.png
script.js:28 https://flagcdn.com/w320/gb.png
script.js:28 https://flagcdn.com/w320/si.png
script.js:28 https://flagcdn.com/w320/th.png
script.js:28 https://flagcdn.com/w320/id.png
script.js:28 https://flagcdn.com/w320/mp.png
script.js:28 https://flagcdn.com/w320/gu.png
script.js:28 https://flagcdn.com/w320/fi.png
script.js:28 https://flagcdn.com/w320/yt.png
script.js:28 https://flagcdn.com/w320/gi.png
script.js:28 https://flagcdn.com/w320/tm.png
script.js:28 https://flagcdn.com/w320/xk.png
script.js:28 https://flagcdn.com/w320/ci.png
script.js:28 https://flagcdn.com/w320/ma.png
script.js:28 https://flagcdn.com/w320/do.png
script.js:28 https://flagcdn.com/w320/gh.png
script.js:28 https://flagcdn.com/w320/va.png
script.js:28 https://flagcdn.com/w320/je.png
script.js:28 https://flagcdn.com/w320/tr.png
script.js:28 https://flagcdn.com/w320/tv.png
script.js:28 https://flagcdn.com/w320/ir.png
script.js:28 https://flagcdn.com/w320/eg.png
script.js:28 https://flagcdn.com/w320/dk.png
script.js:28 https://flagcdn.com/w320/ke.png
script.js:28 https://flagcdn.com/w320/bg.png
script.js:28 https://flagcdn.com/w320/zw.png
script.js:28 https://flagcdn.com/w320/ao.png
script.js:28 https://flagcdn.com/w320/ng.png
script.js:28 https://flagcdn.com/w320/pl.png
script.js:28 https://flagcdn.com/w320/sn.png
script.js:28 https://flagcdn.com/w320/sh.png
script.js:28 https://flagcdn.com/w320/lb.png
script.js:28 https://flagcdn.com/w320/ws.png
script.js:28 https://flagcdn.com/w320/ph.png
script.js:28 https://flagcdn.com/w320/gg.png
script.js:28 https://flagcdn.com/w320/sv.png
script.js:28 https://flagcdn.com/w320/kw.png
script.js:28 https://flagcdn.com/w320/to.png
script.js:28 https://flagcdn.com/w320/om.png
script.js:28 https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
script.js:28 https://flagcdn.com/w320/kn.png
script.js:28 https://flagcdn.com/w320/cf.png
script.js:28 https://flagcdn.com/w320/rs.png
script.js:28 https://flagcdn.com/w320/am.png
script.js:28 https://flagcdn.com/w320/bd.png
script.js:28 https://flagcdn.com/w320/la.png
script.js:28 https://flagcdn.com/w320/cl.png
script.js:28 https://flagcdn.com/w320/pf.png
script.js:28 https://flagcdn.com/w320/pa.png
script.js:28 https://flagcdn.com/w320/us.png
script.js:28 https://flagcdn.com/w320/np.png
script.js:28 https://flagcdn.com/w320/mm.png
script.js:28 https://flagcdn.com/w320/fk.png
script.js:28 https://flagcdn.com/w320/hu.png
script.js:28 https://flagcdn.com/w320/pw.png
script.js:28 https://flagcdn.com/w320/gq.png
script.js:28 https://flagcdn.com/w320/gn.png
script.js:28 https://flagcdn.com/w320/ae.png
script.js:28 https://flagcdn.com/w320/tc.png
script.js:28 https://flagcdn.com/w320/vg.png
script.js:28 https://flagcdn.com/w320/li.png
script.js:28 https://flagcdn.com/w320/ba.png
script.js:28 https://flagcdn.com/w320/mw.png
script.js:28 https://flagcdn.com/w320/bt.png
script.js:28 https://flagcdn.com/w320/cm.png
script.js:28 https://flagcdn.com/w320/ad.png
script.js:28 https://flagcdn.com/w320/gp.png
script.js:28 https://flagcdn.com/w320/cg.png
script.js:28 https://flagcdn.com/w320/re.png
script.js:28 https://flagcdn.com/w320/bf.png
script.js:28 https://flagcdn.com/w320/jo.png
script.js:28 https://flagcdn.com/w320/cd.png
script.js:28 https://flagcdn.com/w320/tk.png
script.js:28 https://flagcdn.com/w320/vn.png
script.js:28 https://flagcdn.com/w320/sx.png
script.js:28 https://flagcdn.com/w320/be.png
script.js:28 https://flagcdn.com/w320/um.png
script.js:28 https://flagcdn.com/w320/br.png
script.js:28 https://flagcdn.com/w320/bz.png
script.js:28 https://flagcdn.com/w320/ag.png
script.js:28 https://flagcdn.com/w320/py.png
script.js:28 https://flagcdn.com/w320/bj.png
script.js:28 https://flagcdn.com/w320/bn.png
script.js:28 https://flagcdn.com/w320/bo.png
script.js:28 https://flagcdn.com/w320/dj.png
script.js:28 https://flagcdn.com/w320/gf.png
script.js:28 https://flagcdn.com/w320/ca.png
script.js:28 https://flagcdn.com/w320/pm.png
script.js:28 https://flagcdn.com/w320/jp.png
script.js:28 https://flagcdn.com/w320/rw.png
script.js:28 https://flagcdn.com/w320/vc.png
script.js:28 https://flagcdn.com/w320/is.png
script.js:28 https://flagcdn.com/w320/by.png
script.js:28 https://flagcdn.com/w320/hk.png
script.js:28 https://flagcdn.com/w320/ls.png
script.js:28 https://flagcdn.com/w320/fj.png
script.js:28 https://flagcdn.com/w320/at.png
script.js:28 https://flagcdn.com/w320/co.png
script.js:28 https://flagcdn.com/w320/ga.png
script.js:28 https://flagcdn.com/w320/sa.png
script.js:28 https://flagcdn.com/w320/gs.png
script.js:28 https://flagcdn.com/w320/et.png
script.js:28 https://flagcdn.com/w320/bq.png
script.js:28 https://flagcdn.com/w320/mc.png
script.js:28 https://flagcdn.com/w320/kp.png
script.js:28 https://flagcdn.com/w320/it.png
script.js:28 https://flagcdn.com/w320/na.png
script.js:28 https://flagcdn.com/w320/mn.png
script.js:28 https://flagcdn.com/w320/sb.png
script.js:28 https://flagcdn.com/w320/ye.png
script.js:28 https://flagcdn.com/w320/ro.png
script.js:28 https://flagcdn.com/w320/sj.png
script.js:28 https://flagcdn.com/w320/fr.png

Question 3
script.js:32 name :  Mauritania , region : Africa , sub_region :  Western Africa , population :  4649660
script.js:32 name :  Aruba , region : Americas , sub_region :  Caribbean , population :  106766
script.js:32 name :  Argentina , region : Americas , sub_region :  South America , population :  45376763
script.js:32 name :  Sweden , region : Europe , sub_region :  Northern Europe , population :  10353442
script.js:32 name :  Maldives , region : Asia , sub_region :  Southern Asia , population :  540542
script.js:32 name :  Mexico , region : Americas , sub_region :  North America , population :  128932753
script.js:32 name :  New Zealand , region : Oceania , sub_region :  Australia and New Zealand , population :  5084300
script.js:32 name :  Ecuador , region : Americas , sub_region :  South America , population :  17643060
script.js:32 name :  Wallis and Futuna , region : Oceania , sub_region :  Polynesia , population :  11750
script.js:32 name :  Åland Islands , region : Europe , sub_region :  Northern Europe , population :  29458
script.js:32 name :  Montenegro , region : Europe , sub_region :  Southeast Europe , population :  621718
script.js:32 name :  Pakistan , region : Asia , sub_region :  Southern Asia , population :  220892331
script.js:32 name :  Pitcairn Islands , region : Oceania , sub_region :  Polynesia , population :  56
script.js:32 name :  Zambia , region : Africa , sub_region :  Eastern Africa , population :  18383956
script.js:32 name :  Seychelles , region : Africa , sub_region :  Eastern Africa , population :  98462
script.js:32 name :  Malaysia , region : Asia , sub_region :  South-Eastern Asia , population :  32365998
script.js:32 name :  Norway , region : Europe , sub_region :  Northern Europe , population :  5379475
script.js:32 name :  Uzbekistan , region : Asia , sub_region :  Central Asia , population :  34232050
script.js:32 name :  Vanuatu , region : Oceania , sub_region :  Melanesia , population :  307150
script.js:32 name :  French Southern and Antarctic Lands , region : Antarctic , sub_region :  undefined , population :  400
script.js:32 name :  Christmas Island , region : Oceania , sub_region :  Australia and New Zealand , population :  2072
script.js:32 name :  Singapore , region : Asia , sub_region :  South-Eastern Asia , population :  5685807
script.js:32 name :  Suriname , region : Americas , sub_region :  South America , population :  586634
script.js:32 name :  Western Sahara , region : Africa , sub_region :  Northern Africa , population :  510713
script.js:32 name :  Saint Martin , region : Americas , sub_region :  Caribbean , population :  38659
script.js:32 name :  Costa Rica , region : Americas , sub_region :  Central America , population :  5094114
script.js:32 name :  Heard Island and McDonald Islands , region : Antarctic , sub_region :  undefined , population :  0
script.js:32 name :  Ireland , region : Europe , sub_region :  Northern Europe , population :  4994724
script.js:32 name :  Antarctica , region : Antarctic , sub_region :  undefined , population :  1000
script.js:32 name :  Australia , region : Oceania , sub_region :  Australia and New Zealand , population :  25687041
script.js:32 name :  Libya , region : Africa , sub_region :  Northern Africa , population :  6871287
script.js:32 name :  Qatar , region : Asia , sub_region :  Western Asia , population :  2881060
script.js:32 name :  Greenland , region : Americas , sub_region :  North America , population :  56367
script.js:32 name :  Mauritius , region : Africa , sub_region :  Eastern Africa , population :  1265740
script.js:32 name :  Kazakhstan , region : Asia , sub_region :  Central Asia , population :  18754440
script.js:32 name :  British Indian Ocean Territory , region : Africa , sub_region :  Eastern Africa , population :  3000
script.js:32 name :  Albania , region : Europe , sub_region :  Southeast Europe , population :  2837743
script.js:32 name :  Bahrain , region : Asia , sub_region :  Western Asia , population :  1701583
script.js:32 name :  Papua New Guinea , region : Oceania , sub_region :  Melanesia , population :  8947027
script.js:32 name :  Burundi , region : Africa , sub_region :  Eastern Africa , population :  11890781
script.js:32 name :  India , region : Asia , sub_region :  Southern Asia , population :  1380004385
script.js:32 name :  Uruguay , region : Americas , sub_region :  South America , population :  3473727
script.js:32 name :  Saint Lucia , region : Americas , sub_region :  Caribbean , population :  183629
script.js:32 name :  Barbados , region : Americas , sub_region :  Caribbean , population :  287371
script.js:32 name :  New Caledonia , region : Oceania , sub_region :  Melanesia , population :  271960
script.js:32 name :  Latvia , region : Europe , sub_region :  Northern Europe , population :  1901548
script.js:32 name :  Estonia , region : Europe , sub_region :  Northern Europe , population :  1331057
script.js:32 name :  Niue , region : Oceania , sub_region :  Polynesia , population :  1470
script.js:32 name :  Saint Barthélemy , region : Americas , sub_region :  Caribbean , population :  4255
script.js:32 name :  Puerto Rico , region : Americas , sub_region :  Caribbean , population :  3194034
script.js:32 name :  Grenada , region : Americas , sub_region :  Caribbean , population :  112519
script.js:32 name :  Macau , region : Asia , sub_region :  Eastern Asia , population :  649342
script.js:32 name :  Cyprus , region : Europe , sub_region :  Southern Europe , population :  1207361
script.js:32 name :  Isle of Man , region : Europe , sub_region :  Northern Europe , population :  85032
script.js:32 name :  Greece , region : Europe , sub_region :  Southern Europe , population :  10715549
script.js:32 name :  Syria , region : Asia , sub_region :  Western Asia , population :  17500657
script.js:32 name :  Lithuania , region : Europe , sub_region :  Northern Europe , population :  2794700
script.js:32 name :  Curaçao , region : Americas , sub_region :  Caribbean , population :  155014
script.js:32 name :  Dominica , region : Americas , sub_region :  Caribbean , population :  71991
script.js:32 name :  Niger , region : Africa , sub_region :  Western Africa , population :  24206636
script.js:32 name :  Kyrgyzstan , region : Asia , sub_region :  Central Asia , population :  6591600
script.js:32 name :  Trinidad and Tobago , region : Americas , sub_region :  Caribbean , population :  1399491
script.js:32 name :  Togo , region : Africa , sub_region :  Western Africa , population :  8278737
script.js:32 name :  Palestine , region : Asia , sub_region :  Western Asia , population :  4803269
script.js:32 name :  Madagascar , region : Africa , sub_region :  Eastern Africa , population :  27691019
script.js:32 name :  Croatia , region : Europe , sub_region :  Southeast Europe , population :  4047200
script.js:32 name :  Faroe Islands , region : Europe , sub_region :  Northern Europe , population :  48865
script.js:32 name :  Haiti , region : Americas , sub_region :  Caribbean , population :  11402533
script.js:32 name :  Montserrat , region : Americas , sub_region :  Caribbean , population :  4922
script.js:32 name :  Cook Islands , region : Oceania , sub_region :  Polynesia , population :  18100
script.js:32 name :  Timor-Leste , region : Asia , sub_region :  South-Eastern Asia , population :  1318442
script.js:32 name :  Martinique , region : Americas , sub_region :  Caribbean , population :  378243
script.js:32 name :  Cuba , region : Americas , sub_region :  Caribbean , population :  11326616
script.js:32 name :  Taiwan , region : Asia , sub_region :  Eastern Asia , population :  23503349
script.js:32 name :  Eswatini , region : Africa , sub_region :  Southern Africa , population :  1160164
script.js:32 name :  Ukraine , region : Europe , sub_region :  Eastern Europe , population :  44134693
script.js:32 name :  Bermuda , region : Americas , sub_region :  North America , population :  63903
script.js:32 name :  South Korea , region : Asia , sub_region :  Eastern Asia , population :  51780579
script.js:32 name :  Peru , region : Americas , sub_region :  South America , population :  32971846
script.js:32 name :  Iraq , region : Asia , sub_region :  Western Asia , population :  40222503
script.js:32 name :  Moldova , region : Europe , sub_region :  Eastern Europe , population :  2617820
script.js:32 name :  San Marino , region : Europe , sub_region :  Southern Europe , population :  33938
script.js:32 name :  Venezuela , region : Americas , sub_region :  South America , population :  28435943
script.js:32 name :  Guyana , region : Americas , sub_region :  South America , population :  786559
script.js:32 name :  Cayman Islands , region : Americas , sub_region :  Caribbean , population :  65720
script.js:32 name :  Cambodia , region : Asia , sub_region :  South-Eastern Asia , population :  16718971
script.js:32 name :  Cocos (Keeling) Islands , region : Oceania , sub_region :  Australia and New Zealand , population :  544
script.js:32 name :  Malta , region : Europe , sub_region :  Southern Europe , population :  525285
script.js:32 name :  Sri Lanka , region : Asia , sub_region :  Southern Asia , population :  21919000
script.js:32 name :  Israel , region : Asia , sub_region :  Western Asia , population :  9216900
script.js:32 name :  Sudan , region : Africa , sub_region :  Northern Africa , population :  43849269
script.js:32 name :  United States Virgin Islands , region : Americas , sub_region :  Caribbean , population :  106290
script.js:32 name :  Eritrea , region : Africa , sub_region :  Eastern Africa , population :  5352000
script.js:32 name :  Mali , region : Africa , sub_region :  Western Africa , population :  20250834
script.js:32 name :  Somalia , region : Africa , sub_region :  Eastern Africa , population :  15893219
script.js:32 name :  Norfolk Island , region : Oceania , sub_region :  Australia and New Zealand , population :  2302
script.js:32 name :  Comoros , region : Africa , sub_region :  Eastern Africa , population :  869595
script.js:32 name :  Nicaragua , region : Americas , sub_region :  Central America , population :  6624554
script.js:32 name :  Russia , region : Europe , sub_region :  Eastern Europe , population :  144104080
script.js:32 name :  Uganda , region : Africa , sub_region :  Eastern Africa , population :  45741000
script.js:32 name :  Nauru , region : Oceania , sub_region :  Micronesia , population :  10834
script.js:32 name :  Switzerland , region : Europe , sub_region :  Western Europe , population :  8654622
script.js:32 name :  Portugal , region : Europe , sub_region :  Southern Europe , population :  10305564
script.js:32 name :  Tajikistan , region : Asia , sub_region :  Central Asia , population :  9537642
script.js:32 name :  South Sudan , region : Africa , sub_region :  Middle Africa , population :  11193729
script.js:32 name :  Bouvet Island , region : Antarctic , sub_region :  undefined , population :  0
script.js:32 name :  Micronesia , region : Oceania , sub_region :  Micronesia , population :  115021
script.js:32 name :  American Samoa , region : Oceania , sub_region :  Polynesia , population :  55197
script.js:32 name :  Czechia , region : Europe , sub_region :  Central Europe , population :  10698896
script.js:32 name :  Botswana , region : Africa , sub_region :  Southern Africa , population :  2351625
script.js:32 name :  Tunisia , region : Africa , sub_region :  Northern Africa , population :  11818618
script.js:32 name :  Anguilla , region : Americas , sub_region :  Caribbean , population :  13452
script.js:32 name :  Guinea-Bissau , region : Africa , sub_region :  Western Africa , population :  1967998
script.js:32 name :  Slovakia , region : Europe , sub_region :  Central Europe , population :  5458827
script.js:32 name :  Marshall Islands , region : Oceania , sub_region :  Micronesia , population :  59194
script.js:32 name :  Algeria , region : Africa , sub_region :  Northern Africa , population :  44700000
script.js:32 name :  Jamaica , region : Americas , sub_region :  Caribbean , population :  2961161
script.js:32 name :  Mozambique , region : Africa , sub_region :  Eastern Africa , population :  31255435
script.js:32 name :  Spain , region : Europe , sub_region :  Southern Europe , population :  47351567
script.js:32 name :  Honduras , region : Americas , sub_region :  Central America , population :  9904608
script.js:32 name :  Netherlands , region : Europe , sub_region :  Western Europe , population :  16655799
script.js:32 name :  South Africa , region : Africa , sub_region :  Southern Africa , population :  59308690
script.js:32 name :  Azerbaijan , region : Asia , sub_region :  Western Asia , population :  10110116
script.js:32 name :  North Macedonia , region : Europe , sub_region :  Southeast Europe , population :  2077132
script.js:32 name :  Gambia , region : Africa , sub_region :  Western Africa , population :  2416664
script.js:32 name :  Liberia , region : Africa , sub_region :  Western Africa , population :  5057677
script.js:32 name :  Luxembourg , region : Europe , sub_region :  Western Europe , population :  632275
script.js:32 name :  Cape Verde , region : Africa , sub_region :  Western Africa , population :  555988
script.js:32 name :  Bahamas , region : Americas , sub_region :  Caribbean , population :  393248
script.js:32 name :  Georgia , region : Asia , sub_region :  Western Asia , population :  3714000
script.js:32 name :  Kiribati , region : Oceania , sub_region :  Micronesia , population :  119446
script.js:32 name :  Tanzania , region : Africa , sub_region :  Eastern Africa , population :  59734213
script.js:32 name :  China , region : Asia , sub_region :  Eastern Asia , population :  1402112000
script.js:32 name :  Guatemala , region : Americas , sub_region :  Central America , population :  16858333
script.js:32 name :  São Tomé and Príncipe , region : Africa , sub_region :  Middle Africa , population :  219161
script.js:32 name :  Germany , region : Europe , sub_region :  Western Europe , population :  83240525
script.js:32 name :  Sierra Leone , region : Africa , sub_region :  Western Africa , population :  7976985
script.js:32 name :  Chad , region : Africa , sub_region :  Middle Africa , population :  16425859
script.js:32 name :  United Kingdom , region : Europe , sub_region :  Northern Europe , population :  67215293
script.js:32 name :  Slovenia , region : Europe , sub_region :  Central Europe , population :  2100126
script.js:32 name :  Thailand , region : Asia , sub_region :  South-Eastern Asia , population :  69799978
script.js:32 name :  Indonesia , region : Asia , sub_region :  South-Eastern Asia , population :  273523621
script.js:32 name :  Northern Mariana Islands , region : Oceania , sub_region :  Micronesia , population :  57557
script.js:32 name :  Guam , region : Oceania , sub_region :  Micronesia , population :  168783
script.js:32 name :  Finland , region : Europe , sub_region :  Northern Europe , population :  5530719
script.js:32 name :  Mayotte , region : Africa , sub_region :  Eastern Africa , population :  226915
script.js:32 name :  Gibraltar , region : Europe , sub_region :  Southern Europe , population :  33691
script.js:32 name :  Turkmenistan , region : Asia , sub_region :  Central Asia , population :  6031187
script.js:32 name :  Kosovo , region : Europe , sub_region :  Southeast Europe , population :  1775378
script.js:32 name :  Ivory Coast , region : Africa , sub_region :  Western Africa , population :  26378275
script.js:32 name :  Morocco , region : Africa , sub_region :  Northern Africa , population :  36910558
script.js:32 name :  Dominican Republic , region : Americas , sub_region :  Caribbean , population :  10847904
script.js:32 name :  Ghana , region : Africa , sub_region :  Western Africa , population :  31072945
script.js:32 name :  Vatican City , region : Europe , sub_region :  Southern Europe , population :  451
script.js:32 name :  Jersey , region : Europe , sub_region :  Northern Europe , population :  100800
script.js:32 name :  Turkey , region : Asia , sub_region :  Western Asia , population :  84339067
script.js:32 name :  Tuvalu , region : Oceania , sub_region :  Polynesia , population :  11792
script.js:32 name :  Iran , region : Asia , sub_region :  Southern Asia , population :  83992953
script.js:32 name :  Egypt , region : Africa , sub_region :  Northern Africa , population :  102334403
script.js:32 name :  Denmark , region : Europe , sub_region :  Northern Europe , population :  5831404
script.js:32 name :  Kenya , region : Africa , sub_region :  Eastern Africa , population :  53771300
script.js:32 name :  Bulgaria , region : Europe , sub_region :  Southeast Europe , population :  6927288
script.js:32 name :  Zimbabwe , region : Africa , sub_region :  Southern Africa , population :  14862927
script.js:32 name :  Angola , region : Africa , sub_region :  Middle Africa , population :  32866268
script.js:32 name :  Nigeria , region : Africa , sub_region :  Western Africa , population :  206139587
script.js:32 name :  Poland , region : Europe , sub_region :  Central Europe , population :  37950802
script.js:32 name :  Senegal , region : Africa , sub_region :  Western Africa , population :  16743930
script.js:32 name :  Saint Helena, Ascension and Tristan da Cunha , region : Africa , sub_region :  Western Africa , population :  53192
script.js:32 name :  Lebanon , region : Asia , sub_region :  Western Asia , population :  6825442
script.js:32 name :  Samoa , region : Oceania , sub_region :  Polynesia , population :  198410
script.js:32 name :  Philippines , region : Asia , sub_region :  South-Eastern Asia , population :  109581085
script.js:32 name :  Guernsey , region : Europe , sub_region :  Northern Europe , population :  62999
script.js:32 name :  El Salvador , region : Americas , sub_region :  Central America , population :  6486201
script.js:32 name :  Kuwait , region : Asia , sub_region :  Western Asia , population :  4270563
script.js:32 name :  Tonga , region : Oceania , sub_region :  Polynesia , population :  105697
script.js:32 name :  Oman , region : Asia , sub_region :  Western Asia , population :  5106622
script.js:32 name :  Afghanistan , region : Asia , sub_region :  Southern Asia , population :  40218234
script.js:32 name :  Saint Kitts and Nevis , region : Americas , sub_region :  Caribbean , population :  53192
script.js:32 name :  Central African Republic , region : Africa , sub_region :  Middle Africa , population :  4829764
script.js:32 name :  Serbia , region : Europe , sub_region :  Southeast Europe , population :  6908224
script.js:32 name :  Armenia , region : Asia , sub_region :  Western Asia , population :  2963234
script.js:32 name :  Bangladesh , region : Asia , sub_region :  Southern Asia , population :  164689383
script.js:32 name :  Laos , region : Asia , sub_region :  South-Eastern Asia , population :  7275556
script.js:32 name :  Chile , region : Americas , sub_region :  South America , population :  19116209
script.js:32 name :  French Polynesia , region : Oceania , sub_region :  Polynesia , population :  280904
script.js:32 name :  Panama , region : Americas , sub_region :  Central America , population :  4314768
script.js:32 name :  United States , region : Americas , sub_region :  North America , population :  329484123
script.js:32 name :  Nepal , region : Asia , sub_region :  Southern Asia , population :  29136808
script.js:32 name :  Myanmar , region : Asia , sub_region :  South-Eastern Asia , population :  54409794
script.js:32 name :  Falkland Islands , region : Americas , sub_region :  South America , population :  2563
script.js:32 name :  Hungary , region : Europe , sub_region :  Central Europe , population :  9749763
script.js:32 name :  Palau , region : Oceania , sub_region :  Micronesia , population :  18092
script.js:32 name :  Equatorial Guinea , region : Africa , sub_region :  Middle Africa , population :  1402985
script.js:32 name :  Guinea , region : Africa , sub_region :  Western Africa , population :  13132792
script.js:32 name :  United Arab Emirates , region : Asia , sub_region :  Western Asia , population :  9890400
script.js:32 name :  Turks and Caicos Islands , region : Americas , sub_region :  Caribbean , population :  38718
script.js:32 name :  British Virgin Islands , region : Americas , sub_region :  Caribbean , population :  30237
script.js:32 name :  Liechtenstein , region : Europe , sub_region :  Western Europe , population :  38137
script.js:32 name :  Bosnia and Herzegovina , region : Europe , sub_region :  Southeast Europe , population :  3280815
script.js:32 name :  Malawi , region : Africa , sub_region :  Eastern Africa , population :  19129955
script.js:32 name :  Bhutan , region : Asia , sub_region :  Southern Asia , population :  771612
script.js:32 name :  Cameroon , region : Africa , sub_region :  Middle Africa , population :  26545864
script.js:32 name :  Andorra , region : Europe , sub_region :  Southern Europe , population :  77265
script.js:32 name :  Guadeloupe , region : Americas , sub_region :  Caribbean , population :  400132
script.js:32 name :  Republic of the Congo , region : Africa , sub_region :  Middle Africa , population :  5657000
script.js:32 name :  Réunion , region : Africa , sub_region :  Eastern Africa , population :  840974
script.js:32 name :  Burkina Faso , region : Africa , sub_region :  Western Africa , population :  20903278
script.js:32 name :  Jordan , region : Asia , sub_region :  Western Asia , population :  10203140
script.js:32 name :  DR Congo , region : Africa , sub_region :  Middle Africa , population :  108407721
script.js:32 name :  Tokelau , region : Oceania , sub_region :  Polynesia , population :  1411
script.js:32 name :  Vietnam , region : Asia , sub_region :  South-Eastern Asia , population :  97338583
script.js:32 name :  Sint Maarten , region : Americas , sub_region :  Caribbean , population :  40812
script.js:32 name :  Belgium , region : Europe , sub_region :  Western Europe , population :  11555997
script.js:32 name :  United States Minor Outlying Islands , region : Americas , sub_region :  North America , population :  300
script.js:32 name :  Brazil , region : Americas , sub_region :  South America , population :  212559409
script.js:32 name :  Belize , region : Americas , sub_region :  Central America , population :  397621
script.js:32 name :  Antigua and Barbuda , region : Americas , sub_region :  Caribbean , population :  97928
script.js:32 name :  Paraguay , region : Americas , sub_region :  South America , population :  7132530
script.js:32 name :  Benin , region : Africa , sub_region :  Western Africa , population :  12123198
script.js:32 name :  Brunei , region : Asia , sub_region :  South-Eastern Asia , population :  437483
script.js:32 name :  Bolivia , region : Americas , sub_region :  South America , population :  11673029
script.js:32 name :  Djibouti , region : Africa , sub_region :  Eastern Africa , population :  988002
script.js:32 name :  French Guiana , region : Americas , sub_region :  South America , population :  254541
script.js:32 name :  Canada , region : Americas , sub_region :  North America , population :  38005238
script.js:32 name :  Saint Pierre and Miquelon , region : Americas , sub_region :  North America , population :  6069
script.js:32 name :  Japan , region : Asia , sub_region :  Eastern Asia , population :  125836021
script.js:32 name :  Rwanda , region : Africa , sub_region :  Eastern Africa , population :  12952209
script.js:32 name :  Saint Vincent and the Grenadines , region : Americas , sub_region :  Caribbean , population :  110947
script.js:32 name :  Iceland , region : Europe , sub_region :  Northern Europe , population :  366425
script.js:32 name :  Belarus , region : Europe , sub_region :  Eastern Europe , population :  9398861
script.js:32 name :  Hong Kong , region : Asia , sub_region :  Eastern Asia , population :  7500700
script.js:32 name :  Lesotho , region : Africa , sub_region :  Southern Africa , population :  2142252
script.js:32 name :  Fiji , region : Oceania , sub_region :  Melanesia , population :  896444
script.js:32 name :  Austria , region : Europe , sub_region :  Central Europe , population :  8917205
script.js:32 name :  Colombia , region : Americas , sub_region :  South America , population :  50882884
script.js:32 name :  Gabon , region : Africa , sub_region :  Middle Africa , population :  2225728
script.js:32 name :  Saudi Arabia , region : Asia , sub_region :  Western Asia , population :  34813867
script.js:32 name :  South Georgia , region : Antarctic , sub_region :  undefined , population :  30
script.js:32 name :  Ethiopia , region : Africa , sub_region :  Eastern Africa , population :  114963583
script.js:32 name :  Caribbean Netherlands , region : Americas , sub_region :  Caribbean , population :  25987
script.js:32 name :  Monaco , region : Europe , sub_region :  Western Europe , population :  39244
script.js:32 name :  North Korea , region : Asia , sub_region :  Eastern Asia , population :  25778815
script.js:32 name :  Italy , region : Europe , sub_region :  Southern Europe , population :  59554023
script.js:32 name :  Namibia , region : Africa , sub_region :  Southern Africa , population :  2540916
script.js:32 name :  Mongolia , region : Asia , sub_region :  Eastern Asia , population :  3278292
script.js:32 name :  Solomon Islands , region : Oceania , sub_region :  Melanesia , population :  686878
script.js:32 name :  Yemen , region : Asia , sub_region :  Western Asia , population :  29825968
script.js:32 name :  Romania , region : Europe , sub_region :  Southeast Europe , population :  19286123
script.js:32 name :  Svalbard and Jan Mayen , region : Europe , sub_region :  Northern Europe , population :  2562
script.js:32 name :  France , region : Europe , sub_region :  Western Europe , population :  67391582
*/
