    var retrievedValue = localStorage.getItem('sharedVariable');

    
    document.addEventListener("DOMContentLoaded", function() {
        
        var message = "Welcome ".concat(retrievedValue).concat("!")
        var messageContainer = document.getElementById("messageContainer");
        messageContainer.style.fontSize = "50px"
        messageContainer.style.padding = "0px"
    
        var coloredText = '<span style="color: black;">Welcome To The Cal Dining Diary!</span>';
        message = message.replace('Welcome To The Cal Dining Diary!', coloredText);
    
        messageContainer.innerHTML = message;
    });
    
    
    document.addEventListener("DOMContentLoaded", function() {
        var message = "The Cal Dining Diary is a website that tackles the problem of inaccurate information about dining hall quality at UC Berkeley. It offers a community-based rating system that provides realistic and comprehensive ratings for different dining halls on campus. Users can contribute their own ratings, explore detailed reviews, and receive personalized recommendations. The website also includes a social platform for students to connect, share experiences, and participate in challenges. With the Cal Dining Diary, Berkeley students can make informed dining choices and discover new favorites.";
        var messageContainer = document.getElementById("secondmessageContainer");

        messageContainer.style.padding = "0px"
        messageContainer.style.width = "900px"
        messageContainer.style.lineHeight = "35px"
    
        var coloredText = '<span style="color: black;">The Cal Dining Diary is a website that tackles the problem of inaccurate information about dining hall quality at UC Berkeley. It offers a community-based rating system that provides realistic and comprehensive ratings for different dining halls on campus. Users can contribute their own ratings, explore detailed reviews, and receive personalized recommendations. The website also includes a social platform for students to connect, share experiences, and participate in challenges. With the Cal Dining Diary, Berkeley students can make informed dining choices and discover new favorites.</span>';
        message = message.replace('The Cal Dining Diary is a website that tackles the problem of inaccurate information about dining hall quality at UC Berkeley. It offers a community-based rating system that provides realistic and comprehensive ratings for different dining halls on campus. Users can contribute their own ratings, explore detailed reviews, and receive personalized recommendations. The website also includes a social platform for students to connect, share experiences, and participate in challenges. With the Cal Dining Diary, Berkeley students can make informed dining choices and discover new favorites.', coloredText);
    
        messageContainer.innerHTML = message;
    });
    
    
    document.addEventListener("DOMContentLoaded", function() {
        var message = "Click the tabs at the top to either submit an entry or explore others entries!";
        var messageContainer = document.getElementById("thirdmessageContainer");
    
        var coloredText = '<span style="color: black;"><u>Click the tabs at the top to either submit an entry or explore others entries!</u></span>';
        message = message.replace('Click the tabs at the top to either submit an entry or explore others entries!', coloredText);
    
        messageContainer.innerHTML = message;
    });
  