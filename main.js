// Activation de la flèche UNE OK 

// function fleche () {
// const arrow = document.querySelector('.arrow');
// arrow.addEventListener('click', () => {
// const ask = document.querySelector('.question');
//     ask.classList.toggle('active');
// })
// }



// Selection de l'ensemble des flèches

// function fleche () {

//     const arrow = document.querySelectorAll('.arrow');
//     const ask = document.querySelector('.question');

//     arrow.forEach((item)=> {
//         item.addEventListener('click', () => {
//         ask.classList.toggle('active');
//         })
//     })
// }

// fleche();


// ajouter une class à l'élément parent

	// var accItem = document.getElementsByClassName('accordionItem');
    // var accHD = document.getElementsByClassName('accordionItemHeading');

    // for (i = 0; i < accHD.length; i++) {
    //     accHD[i].addEventListener('click', toggleItem, false);
    // }

    // function toggleItem() {
    //     var itemClass = this.parentNode.className;
    //     for (i = 0; i < accItem.length; i++) {
    //         accItem[i].className = 'accordionItem close';
    //     }
    //     if (itemClass == 'accordionItem close') {
    //         this.parentNode.className = 'accordionItem open';
    //     }
    // }

   // Source aide :  https://codepen.io/sureshrkm/pen/ZbzBpr
//
const question = document.getElementsByClassName('question');
const arrow = document.getElementsByClassName('arrow');

for (i = 0; i < arrow.length; i++){
    arrow[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    const itemClass = this.parentNode.className;
    for (i = 0; i < question.length; i++) {
        question[i].className = ' question close';
    }
    if (itemClass == 'question close') {
        this.parentNode.className = 'question open';
    }
}