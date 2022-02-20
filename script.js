function display_selected_rate()
{   
    /*
    Displays the interest rate selected by the user
    */

    // We get the input range element's selected value
    rate = document.getElementById("rate_range").value;

    // We update accordingly the paragraph element located just beside the range input
    document.getElementById("rate_par").innerText = (rate*100).toFixed(1) + "%"; // Interest rate is displayed as a single decimal percentage
}

function compute_interest()
{
    /*
    Computes the interests due and displays the results
    */

    // We check that a principal amount has been provided, otherwise nothing happens
    principal = parseInt(document.getElementById("principal_input").value);
    if (isNaN(principal)) {
        alert("A positive principal amount must be provided !");
        document.getElementById("principal_input").focus();
    }

    else {
        // We retrieve the interest rate and investment duration values
        rate = parseFloat(document.getElementById("rate_range").value);
        duration = parseInt(document.getElementById("nb_years_dropdown").value);

        // We compute the interest amount due at the end of the investment
        interest = principal*rate*duration;

        // We display the results 
        document.getElementById("results_par").innerHTML = "If you deposit <span class='yellow'>"+principal+"</span>,<br> at an interest rate of <span class='yellow'>"+(rate*100).toFixed(1)+"%</span>.<br> You will receive an amount of <span class='yellow'>"+interest.toFixed(0)+"</span>,<br> in the year <span class='yellow'>"+(2022+parseInt(duration))+"</span>." // Today's year is 2022
    }
}
        