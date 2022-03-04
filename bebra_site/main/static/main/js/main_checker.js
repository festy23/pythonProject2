function check() {
 var sum=0;
 var diagnosis="";
 var gastrit="";
 var esofagit="";
 var duofagit="";
 var yazva="";
 var gastrit_count=0;
 var duofagit_count=0;
 var esofagit_count=0;
 var yazva_count=0;
 var choice;
 let gastrit_symps = ["изжога", "тошнота","неприятный вкус", "запах изо рта"];
 let esofagit_symps = ["нарушение рефлекса глотания","боли в верхней части желудка"];
 let duofagit_symps = ["общая слабость", "выраженная боль в подреберье","отрыжка"];
 let yazva_symps = ["боли в средней части желудка", "чувство раннего насыщения и тяжести в желудке"];
 var q1 = document.forms['quiz'].elements['vopros1'];
 for (let i=0; i<q1.length;i++) {
    if (q1[i].checked) {
    choice=q1[i].value;
    if (choice=='man') {sum=sum+1;}
    }
 }
 var q2 = document.forms['quiz'].elements['vopros2'];
 for (let i=0; i<q1.length;i++) {
    if (q2[i].checked) {
    choice=q2[i].value;
    if (choice=="yes") {sum=sum+2;}
    if (choice=="sometimes") {sum=sum+1;}
    }
 }
 var q3 = document.forms['quiz'].elements['vopros3'];
 for (let i=0; i<q3.length; i++) {
    if (q3[i].checked) {
    choice=q3[i].value;
    if (gastrit_symps.includes(choice)) {
    gastrit=gastrit+" " + choice+", ";
    gastrit_count++;
    }
    if (esofagit_symps.includes(choice)) {
    esofagit=esofagit+" " + choice+", ";
    esofagit_count++;
    }
    if (duofagit_symps.includes(choice)) {
    duofagit=duofagit+" " + choice+", ";
    duofagit_count++;
    }
    if (yazva_symps.includes(choice)) {
    yazva=yazva+" " + choice+", ";
    yazva_count++;
    }
    }
 }
 let answer_list = {"Гастрит": gastrit_count, "Эзофагит": esofagit_count, "Панкреатит": duofagit_count, "Язва": yazva_count};
 let count_list = [gastrit_count, duofagit_count, esofagit_count, yazva_count];
 var m = Math.max.apply(null, count_list);
 if (m==4) {document.getElementById("answer").innerHTML = "У вас рак почек";}
 if (gastrit_count==m) {document.getElementById("answer").innerHTML = "У вас возможен гастрит. Вы выбрали симптомы наиболее соответствующие этому заболеванию среди остальных - " + gastrit + ". К сожалению, симптомы гастрита нередко игнорируются большинством пациентов. По статистике около 50% населения России болеет хроническим гастритом, но за врачебной помощью обращается 10-15%. Это приводит к печальным последствиям – нелеченный острый гастрит переходит в хроническую форму, а хронический в язву желудка и даже рак. Но если вовремя обратиться к гастроэнтерологу и пройти курс лечения, от болезни можно избавиться раз и навсегда.";}
 if (esofagit_count==m) {document.getElementById("answer").innerHTML = "Возможно у вас эзофагит.Вы выбрали симптомы наиболее соответствующие этому заболеванию среди остальных - " + esofagit + ". Эзофагит — воспаление слизистой оболочки пищевода, возникающее под действием инфекций, химических веществ, физических факторов и генетической предрасположенности. Профилактика эзофагитов подразумевает избегание причин его развития – ожогов горячей пищей, химическими веществами, повреждений инородными телами и т. п. Профилактика хронического эзофагита – регулярное диспансерное обследование у гастроэнтеролога и при необходимости – лечение. Больным хроническим эзофагитом в качестве профилактики обострений показано санаторно-курортное лечение.";}
 if (duofagit_count==m) {document.getElementById("answer").innerHTML = "Возможно у вас панкреатит.Вы выбрали симптомы наиболее соответствующие этому заболеванию среди остальных - " + duofagit + ". Панкреатит – это воспаление тканей поджелудочной железы (ПЖ) с нарушением оттока ее секретов. Заболевание вызвано плохой проходимостью выводящих протоков на фоне повышенной активности ферментных систем. За последние 10 лет «популярность» заболевания выросла в 3 раза и стала характерным явлением не только для взрослых, но и для подрастающего поколения. Наиболее частые причины – нарушение рациона питания и отсутствие правильной культуры потребления алкогольных напитков. ";}
 if (yazva_count==m) {document.getElementById("answer").innerHTML = "Возможно у вас язвенная болезнь желудка.Вы выбрали симптомы наиболее соответствующие этому заболеванию среди остальных - " + yazva + ". Язвенная болезнь желудка – это хроническая полиэтиологическая патология, протекающая с формированием язвенных повреждений в желудке, склонностью к прогрессированию и формированию осложнений. К основным клиническим признакам язвенной болезни относят боль в области желудка и диспепсические явления. Первичная профилактика язвенной болезни желудка включает в себя предупреждение заражения хеликобактерной инфекцией, исключение факторов риска развития данной патологии (курение, стесненные условия проживания, низкий уровень жизни). Вторичная профилактика направлена на предупреждение рецидивов и включает в себя соблюдение диеты, исключение стрессов, назначение антихеликобактерной схемы препаратов при появлении первых симптомов ЯБЖ.";}
}