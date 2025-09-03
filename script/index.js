const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json=>displayLesson(json.data))
}
const displayLesson=(lessons)=>{
    lessons.forEach(lesson=>{
        const levelContainer=document.getElementById("level-container");
        // console.log(levelContainer)
        const levelNo=lesson.level_no;
        // console.log(levelNo)
        const newDiv=document.createElement("div");
        newDiv.innerHTML=`
        <button class="btn btn-xs btn-outline btn-primary">
                            <i class="fa-solid fa-book-open"></i>Lesson-${levelNo}</button>
        `
        levelContainer.appendChild(newDiv);
    })
    
}
loadLesson();;