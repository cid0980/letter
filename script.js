const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseImage = document.getElementById('responseImage');
const responseText = document.getElementById('responseText');

yesButton.addEventListener('click', function() {
    
    questionText.style.display = 'none'; 
    yesButton.style.display = 'none'; 
    noButton.style.display = 'none'; 
    responseImage.style.display = 'block'; 
    responseText.style.display = 'block';
});

noButton.addEventListener('mouseover', function() {
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
