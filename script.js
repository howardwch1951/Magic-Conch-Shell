const centerImg = document.getElementById('center-img');

// shell-sound-1.mp3  都不吃
// shell-sound-2.mp3  最好別吃
// shell-sound-3.mp3  對
// shell-sound-4.mp3  不行
// shell-sound-5.mp3  可以
// shell-sound-6.mp3  你再問問看
// shell-sound-7.mp3  坐好
// shell-sound-8.mp3  可能會吧
const sounds = [
    { src: 'shell-sound-1.mp3', probability: 0.06 },
    { src: 'shell-sound-2.mp3', probability: 0.06 },
    { src: 'shell-sound-3.mp3', probability: 0.06 },
    { src: 'shell-sound-4.mp3', probability: 0.5 },
    { src: 'shell-sound-5.mp3', probability: 0.1 },
    { src: 'shell-sound-6.mp3', probability: 0.1 },
    { src: 'shell-sound-7.mp3', probability: 0.06 },
    { src: 'shell-sound-8.mp3', probability: 0.06 }
];

// 生成隨機音效
function getRandomSound() {
    const rand = Math.random(); 
    let cumulativeProbability = 0;

    for (const sound of sounds) {
        cumulativeProbability += sound.probability;
        if (rand < cumulativeProbability) {
            return sound.src;
        }
    }
    return sounds[sounds.length - 1].src;
}

centerImg.addEventListener('click', () => {
    const audio = new Audio(getRandomSound());
    audio.play();

    centerImg.style.transform = 'scale(1.2)';
    setTimeout(() => {
        centerImg.style.transform = 'scale(1)';
    }, 300);
});
