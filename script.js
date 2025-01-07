const centerImg = document.getElementById('center-img');
const soundSelector = document.getElementById('sound-selector');

// shell-sound-1.mp3  都不吃
// shell-sound-2.mp3  最好別吃
// shell-sound-3.mp3  對
// shell-sound-4.mp3  不行
// shell-sound-5.mp3  可以
// shell-sound-6.mp3  你再問問看
// shell-sound-7.mp3  坐好
// shell-sound-8.mp3  可能會吧
const soundSets  = 
{
    set1: [
        { src: 'shell-sound-1.mp3', probability: 0 },
        { src: 'shell-sound-2.mp3', probability: 0 },
        { src: 'shell-sound-3.mp3', probability: 0 },
        { src: 'shell-sound-4.mp3', probability: 0 },
        { src: 'shell-sound-5.mp3', probability: 0.8 },
        { src: 'shell-sound-6.mp3', probability: 0 },
        { src: 'shell-sound-7.mp3', probability: 0.2 },
        { src: 'shell-sound-8.mp3', probability: 0 }
    ], 
    set2: [
        { src: 'shell-sound-1.mp3', probability: 0.05 },
        { src: 'shell-sound-2.mp3', probability: 0.05 },
        { src: 'shell-sound-3.mp3', probability: 0.05 },
        { src: 'shell-sound-4.mp3', probability: 0.6 },
        { src: 'shell-sound-5.mp3', probability: 0 },
        { src: 'shell-sound-6.mp3', probability: 0.2 },
        { src: 'shell-sound-7.mp3', probability: 0 },
        { src: 'shell-sound-8.mp3', probability: 0.05 }
    ]
};
// 預設為海綿寶寶機率 
let currentSounds = soundSets.set1;
soundSelector.addEventListener('change', (event) => {
    currentSounds = soundSets[event.target.value];
});

// 生成隨機音效
function getRandomSound() {
    const rand = Math.random(); 
    let cumulativeProbability = 0;

    for (const sound of currentSounds) {
        cumulativeProbability += sound.probability;
        if (rand < cumulativeProbability) {
            return sound.src;
        }
    }
    return currentSounds[currentSounds.length - 1].src;
}

centerImg.addEventListener('click', () => {
    const audio = new Audio(getRandomSound());
    audio.play();

    centerImg.style.transform = 'scale(1.2)';
    setTimeout(() => {
        centerImg.style.transform = 'scale(1)';
    }, 300);
});
