const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json=>displayLesson(json.data))
}
const wordLoader=(id)=>{
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLevelWord(data.data))
}
// {
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
// },
const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById("word-container")
    wordContainer.innerHTML="";
    console.log(wordContainer)
    words.forEach(word=>{
        const WordDiv=document.createElement("div");
        WordDiv.innerHTML=`<div class="bg-white w-72 rounded-xl py-8 px-6 text-center space-y-5 shadow-sm">
        <h2 class="text-xl font-bold">${word.word}</h2>
        <p>Meaning/Pronunciation</p>
        <h2 class="text-xl font-bold font-bangla">${word.meaning}/${word.pronunciation}</h2>
        <div class="flex justify-between items-center">
            <button class="btn bg-[#1a91ff1a]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-[#1a91ff1a]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
    </div>`;
        wordContainer.appendChild(WordDiv)
    })
}




const displayLesson=(lessons)=>{
    const levelContainer=document.getElementById("level-container");
    levelContainer.innerHTML="";
    lessons.forEach(lesson=>{
        const levelNo=lesson.level_no;
        
        const newDiv=document.createElement("div");
        newDiv.innerHTML=`
        <button onClick="wordLoader(${levelNo})" class="btn  btn-sm btn-outline btn-primary">
                            <i class="fa-solid fa-book-open"></i>Lesson-${levelNo}</button>
        `
        levelContainer.appendChild(newDiv);
    })
    
}
loadLesson();