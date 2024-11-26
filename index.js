/* PROJECT CARD CREATION */

let gameProjectCards = [];
let webDevProjectCards = [];

const projectCardCreator = (title, description, stack, link, coverImage) => {
    return {
        title: title,
        description: description,
        stack: stack,
        link: link,
        coverImage: coverImage
    }
}

gameProjectCards.push(projectCardCreator("Whispers of the Heart", "Developed the core mechanics and interactions. It’s a platformer game and the main mechanic is switching between two worlds to overcome obstacles and advance through the adventure.", "Godot and GDScript", "https://github.com/magentawitch/WGJ23","https://placecats.com/300/500"));
gameProjectCards.push(projectCardCreator("Fonded Grins", "Developed the core mechanics and interactions. It’s a platformer game where the player needed to collect laughs to save the townspeople from a sadness spell. Mechanics include collecting to an inventory, shooting."," Godot and GDScript","https://github.com/magentawitch/GGJ24","https://placecats.com/300/500"));
gameProjectCards.push(projectCardCreator("Inner Link", "Developed the core mechanics and interactions. The game was a “connecting the dot” kind of game where players needed to complete an image before a specific time.", "Godot and GDScript", "https://github.com/magentawitch/WGJ24","https://placecats.com/300/500"));
gameProjectCards.push(projectCardCreator("Despertar", "Develop the scenes, interactions between NPC’s, objects, etc using a library created for this game.", "Godot and GDScript", "https://github.com/magentawitch/despertar", "https://placecats.com/300/500"))
gameProjectCards.push(projectCardCreator("Ecos del Vacío", "Developed the core mechanics and interactions. The game was an interactive narrative drag and drop. Players needed to drag different words to specific parts of a diary to complete the story and advance the narrative", "Godot and GDScript","https://magentawitch.itch.io/ecos-del-vacio","https://placecats.com/300/500" ));

webDevProjectCards.push(projectCardCreator("BakeWarden", "App that checks the oven temperature and lets you control it by phone. Developed the frontend.", "Javsascript, CSS and HTML5", "https://github.com/Jbat1Jumper/bakewarden", "https://placecats.com/300/500"));
webDevProjectCards.push(projectCardCreator("Dreambound Book Club", "Landpage for a fictional book club displaying upcoming events, offerings, different membership types.", "CSS and HTML5", "https://github.com/magentawitch/Codecademy-Responsive-Club-Website", "https://placecats.com/300/500"));
webDevProjectCards.push(projectCardCreator("Peach Interactive", "Landpage for a fictional consulting company. Features their mission, services and a contact form.", "CSS and HTML5", "https://github.com/magentawitch/Codecademy-Company-Landpage", "https://placecats.com/300/500"));
webDevProjectCards.push(projectCardCreator("Portfolio", "Personal portolio displaying both web dev and game projects I've worked with", "Javascript, CSS and HTML5", "https://github.com/magentawitch/My-Portfolio", "https://placecats.com/300/500"));


/* PROJECT TABS */

const webDevButton = document.getElementById("webDev");
const gamesButton = document.getElementById("games");
let activeTab = webDevButton;

/**
 * @param {HTMLElement} button
 * @param {HTMLElement} currentActiveTab
 *  @param {HTMLElement} newActiveTab
 * @param {HTMLElement} card
 */

function showcaseTab(button) {
    button.style.color = "#6D5E61";
    button.style.backgroundColor = "#c9e99c";
    button.style.border = "2px solid #c9e99c";
};

function changeTab(currentActiveTab, newActiveTab) {
    currentActiveTab.style.color = "";
    currentActiveTab.style.backgroundColor = "";
    currentActiveTab.style.border = "";
    newActiveTab.style.color = "#6D5E61";
    newActiveTab.style.backgroundColor = "#c9e99c";
    newActiveTab.style.border = "2px solid #c9e99c";
    activeTab = newActiveTab;
};

/* PROJECT CARD LOADING */

let projectCards = document.getElementsByClassName("project-card");

function fillProjectCard(card, array, index) {
    card.querySelector(".card-title").innerHTML = array[index].title;
    card.querySelector(".card-description").innerHTML = array[index].description;
    card.querySelector(".stack-description").innerHTML = array[index].stack;
    card.querySelector(".github-link").setAttribute("href", array[index].link);
    card.querySelector(".card-image").setAttribute("src", array[index].coverImage);
}

function loadProjectCards(cards, array) {
    for (let i = 0; i < cards.length; i++) {
        let index = i;
        fillProjectCard(cards[i], array, index)
    }
}

/* ARROWS */
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let cardsDisplayed = 0;
let newIndexToDisplay = 0;
let lastProjectCardIndex = 0;
let lastIndexDisplayed = 0;

function changeEndpoint(cards, array, direction) {

    for (i=0; i < cards.length; i++) {
        if (window.getComputedStyle(cards[i]).display !== "none") {
            cardsDisplayed++;
        }
    }
    lastProjectCardIndex = cardsDisplayed - 1;
    lastIndexDisplayed = cards.length - 1;

    if(direction === "right") {
        newIndexToDisplay = lastIndexDisplayed + 1;
        fillProjectCard(cards[lastProjectCardIndex - 2], array, lastIndexDisplayed - 1);
        fillProjectCard(cards[lastProjectCardIndex - 1], array, lastIndexDisplayed);
        fillProjectCard(cards[lastProjectCardIndex], array, newIndexToDisplay);
        cardsDisplayed = 0;
        return lastIndexDisplayed
    } else {
        newIndexToDisplay = lastIndexDisplayed - lastProjectCardIndex;
        fillProjectCard(cards[lastProjectCardIndex], array, lastIndexDisplayed);
        fillProjectCard(cards[lastProjectCardIndex - 1], array, lastIndexDisplayed - 1);
        fillProjectCard(cards[lastProjectCardIndex - 2], array, newIndexToDisplay);
        cardsDisplayed = 0;
        return lastIndexDisplayed;
    }

    
}



/* EVENT LISTENERS  */

window.addEventListener("load", () => {showcaseTab(webDevButton); loadProjectCards(projectCards, webDevProjectCards)});
gamesButton.addEventListener("click",  () => {changeTab(webDevButton, gamesButton); loadProjectCards(projectCards, gameProjectCards)});
webDevButton.addEventListener("click", () => {changeTab(gamesButton, webDevButton); loadProjectCards(projectCards, webDevProjectCards)});
leftArrow.addEventListener("click", () => activeTab === webDevButton ? changeEndpoint(projectCards, webDevProjectCards, "left") : changeEndpoint(projectCards, gameProjectCards, "left"));
rightArrow.addEventListener("click", () => activeTab === webDevButton ? changeEndpoint(projectCards, webDevProjectCards, "right") : changeEndpoint(projectCards, gameProjectCards, "right"))



