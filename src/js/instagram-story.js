let arr =[
    {
        dp:"../img/image (4).png",
        story:"../src//img/image (4).png"
    },
    {
        dp:"../img/image (4).png",
        story:"../../img/image (4).png"
    },
    {
        dp:"../img/image (4).png",
        story:"../../img/image (4).png"
    }
];

let stories = document.querySelector('.stories');
let fullScreen = document.querySelector('.full-screen');
let data= "";

arr.forEach((elm,index)=>{
    data +=`
     <div class="cursor-pointer story">
        <div class="bg-white rounded-full overflow-hidden mx-auto w-16 h-16 p-0.5 border-[3.5px] border-primary">
            <img id="${index}" alt="img" src="${elm.dp}" class="w-full h-full rounded-ful">
        </div>
        <p class="text-xs text-black font-bold mt-2">دوره مدیریت تجربه مشتری</p>
    </div>
    `
})

stories.innerHTML = data;

stories.addEventListener('click',(dets)=>{
    var story = arr[dets.target.id].story;
    fullScreen.classList.add('active');
    fullScreen.style.backgroundImage= `url(${story})`;

    setTimeout(() => {
        fullScreen.classList.remove('active');
    }, 3000);
})