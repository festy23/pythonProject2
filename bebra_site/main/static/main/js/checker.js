function check()
 {
 var sum=0;
 var answer="";
 var choice;
 for (var v=1; v<=12; v++)
 {
 var q = document.forms['quiz'].elements['vopros'+v];
  for (var i=0; i<q.length; i++)
  {
  if (q[i].checked) {choice=q[i].value;}
  }
  if (choice=="yes") {sum=sum+2;}
  if (choice=="sometimes") {sum=sum+1;}
 }
 if (sum<6) {answer="Скорее всего, с пищеварением у вас все в порядке. Однако не забывайте все-таки прислушиваться к с сигналам своего организма, ведь если вы станете вести неправильный образ жизни, то или иное слабое звено в нем может дать о себе знать.";}
 if (sum<18 && sum>=6) {answer="Вам уже следует всерьез воспринимать сигналы своего организма, говорящие о каких-то сбоях в деятельности пищеварительной системы. Рационализируйте свое питание. Попробуйте перейти на дробный прием пищи – ешьте небольшими порциями 4-5 раз в день. В обед обязательно ешьте горячее. Старайтесь больше не принимать пищу не менее чем за 4-5 часов до сна. Почаще отдыхайте. Не забывайте об утренней гимнастике, водных процедурах и самомассаже (особенно, живота). Возможно, вам уже нужно начать прием сборов лекарственных трав для улучшения пищеварения.";}
 if (sum>=18) {answer="Ваша пищеварительная система посылает вам явные сигналы тревоги. Она уже не может работать в полную силу. Попробуйте с утра пить натощак по 1 стакану сока сырой картошки (после чего нужно полчаса полежать в постели и начать завтракать еще через час) – курсами по 10 дней с двухнедельными перерывами. Возможно, вам уже пора начинать прием таких ферментов, как панкреатин, панзинорм, мезим и т.п. (только делать это нужно после консультации с терапевтом или гастроэнтерологом). Постарайтесь исключить вредное воздействие на вас стрессов";}
 document.getElementById("answer").innerHTML = answer;
}