

$( document ).ready(function() {
    console.log("Hello World")

    //Assign a value to each jellyfish
    $(".jellyfish").each(function(){
    var randomnumber=Math.floor(Math.random() * (25 - 1 + 1)) + 1;
    $(this).attr("jellynumber",randomnumber)
    })
    
    //Make a number for the player to see
    var randomnumber=Math.floor(Math.random() * (25 - 1 + 1)) + 1;
    $("#target_value").html(randomnumber)
    
    
    //Make the jellyfish buttons do the math
    $(".jellyfish").click(function(){
        var current_score = Number($("#totalscore").html()
    )
        var jellyfishscore = Number($(this).attr('jellynumber'))
        var final_score = current_score + jellyfishscore
        $("#totalscore").html(final_score)

         // if (totalscore) is greater than target value then write "You Lose"
    //     else if total score is equal to target value then write "You Win" 
    var totalscore = Number($("#totalscore").html())
    var targetvalue = Number($("#target_value").html())

    if (totalscore > targetvalue){
     var losses = Number($("#losses").html())
     $("#losses").html(losses+1)
     $("#gameoutcome").html("You Lose")
    } else if (totalscore == targetvalue){
        var wins = Number($("#wins").html())
        $("#wins").html(wins+1)
        $("#gameoutcome").html("You Win")
    }
        })


    //Make it recognize wins/losses
    
    //
    
   




    //reset
    
    });


// $("#test").html() will FETCH and return 22
// $("#test").html(55) will SET the html as 55
// $("#test").html() will NOW FETCH and return 55