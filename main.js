class Present {
    constructor(containerElement) {
        this.containerElement = containerElement;
        this._openPresent = this._openPresent.bind(this);
        
        const image = document.createElement('img');
        image.src = 'images/gift-icon.png';
        this.containerElement.append(image);
        image.addEventListener('click', this._openPresent);
        // Koushik's Assignment
        this.image = image;
        this.imagePath;

        this.clicked = false      
    }   
    
    setImagePath(userInputPath) {
        this.imagePath = userInputPath;
    }

    _openPresent() {        
        this.image.src = this.imagePath;
        this.image.removeEventListener('click', this._openPresent);
        this.clicked = true;
        
        itemsFound+=1
        changeHeading()   
    }

}

const changeHeading = () => {
    document.getElementById('title').innerHTML = `Items found: ${itemsFound}`
    if (present1.clicked && present2.clicked && present3.clicked 
            && present4.clicked && present5.clicked) {
        document.getElementById('title').innerHTML = `Enjoy your presents! Items found: ${itemsFound}`
    }
}

itemsFound = 0

const container = document.querySelector('#presents');
present1 = new Present(container)
present1.setImagePath('images/pc.png')

present2 = new Present(container)
present2.setImagePath('images/cake.png')

present3 = new Present(container)
present3.setImagePath('images/plant.png')

present4 = new Present(container)
present4.setImagePath('images/pocky.png')

present5 = new Present(container)
present5.setImagePath('images/tv.png')
// Koushik's Assignment