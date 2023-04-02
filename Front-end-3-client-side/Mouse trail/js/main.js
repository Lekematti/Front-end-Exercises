const dot = 1;
const trailElements = [];
for (let i = 0; i < dot; i++) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trailElements.push(trail);
    document.body.appendChild(trail);
}

let currentTrailIndex = 0;
document.addEventListener('mousemove', (event) => {
    const currentTrail = trailElements[currentTrailIndex];
    currentTrail.style.left = event.pageX + 'px';
    currentTrail.style.top = event.pageY + 'px';
    currentTrailIndex = (currentTrailIndex + 1) % dot;
});