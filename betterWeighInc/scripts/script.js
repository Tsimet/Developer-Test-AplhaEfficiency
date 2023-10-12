const burger = document.getElementById("menu_bars");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

const dropdown = document.querySelector(".navbar_dropdown_links");

const faq = document.querySelectorAll(".faq_dropdown");
const faq_ans = document.querySelectorAll(".answer");
const id_all = document.querySelectorAll("#answer");

burger.addEventListener("click", function(){
	bar1.classList.toggle("toggle");
	bar2.classList.toggle("toggle");
	bar3.classList.toggle("toggle");
	dropdown.classList.toggle("toggle");
})

faq.forEach(el=>{
	el.addEventListener("click", function(){
		const ans = el.querySelector(".answer");
		const id = el.querySelector("#answer");

		if(ans.style.opacity === "1"){
			ans.style.height = "0%";
			ans.style.opacity = "0";
			id.style.display = "none"
		} else{
			faq_ans.forEach(a=>{
				a.style.opacity = "0";
				a.style.height = "0%";
			});
			id_all.forEach(i=>{
				i.style.display = "none"
			});
			ans.style.opacity = "1";
			ans.style.height = "100%";
			id.style.display = "flex"
		}

	});
});


const targetDate = new Date('2023-10-25 23:59:59').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('day_num').innerText = days;
    document.getElementById('hour_num').innerText = hours;
    document.getElementById('minute_num').innerText = minutes;
    document.getElementById('second_num').innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);