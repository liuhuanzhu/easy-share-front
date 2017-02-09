import Vue from 'vue'



Vue.directive("timer",{
	bind:function(el,bind){
		console.log("el");
		let time=bind.value;
		if(time!=null && time!=""){
			var date=new Date(time);
			let year=date.getFullYear();
			let month=date.getMonth()+1;
			let day=date.getDate();
			let hours=date.getHours();
			let minutes=date.getMinutes();
			let second=date.getSeconds();
			month=month>9?month:"0"+month;
			day=day>9?day:"0"+day;
			hours=hours>9?hours:"0"+hours;
			minutes=minutes>9?minutes:"0"+minutes;
			second=second>9?second:"0"+second;
			el.innerHTML+=year+"-"+month+"-"+day+"  "+hours+":"+minutes+":"+second+"&nbsp;";
		}
	}
})
