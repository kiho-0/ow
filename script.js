function addFeedback(){

let name = document.getElementById("name").value
let position = document.getElementById("position").value
let feedback = document.getElementById("feedback").value

let data = {
name:name,
position:position,
feedback:feedback
}

let list = JSON.parse(localStorage.getItem("feedbacks")) || []

list.push(data)

localStorage.setItem("feedbacks", JSON.stringify(list))

alert("피드백이 제출되었습니다!")

}