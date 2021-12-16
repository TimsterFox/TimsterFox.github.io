alert("you're having a large gathering of friends and family. You decide to get pizza or burgers depending on what everyone wants")

let pizza_or_burgers = prompt("does everyone want (1) pizza, or does everyone want (2) burgers");

if(pizza_or_burgers == 1) {
    let popular_or_cheap = prompt("as you go into town do you (1) go down the road to the dark and cheap understaffed pizza place, or do you (2) go up the road to the popular Marcos pizza?")
    if(popular_or_cheap==1){
        alert("You arrive and get your order taken, but they take more than an hour to make the pizzas. you get back to the party only to find that everybody has already left in separate groups to find someplace to eat");
    } else {
        let preorder_or_drivethru = prompt("As you go up the road, you remember that it's probably better to not go inside because it's full. as you arrive you see that the drive-thru line is short at the moment, Do you (1) preorder on the app or (2) go through the drive-thru?");
        if (preorder_or_drivethru==1){
            alert("you try to preorder but the app says lost server connection and when you try to get in line for the drive-thru you find it now twenty cars long. its too late to order so everyone leaves the party.");
        } else {
            alert("You get through the drive-thru quickly and are on your way to the party just in time.");
        }
    }
} else {
    alert("you go through the drive-thru only to find they're not accepting drive-thru orders after four in the afternoon");
}
