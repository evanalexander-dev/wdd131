const countSpan = document.getElementById('count');

let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount++;
countSpan.innerText = reviewCount;
localStorage.setItem('reviewCount', reviewCount);
