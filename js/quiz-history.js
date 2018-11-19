
let history_session=document.querySelector('.button_history');

history_session.addEventListener('click', function(){

    sessionStorage.average_show=(sessionStorage.total_points/sessionStorage.tries);

    if(sessionStorage.average_show!=="NaN"){


        document.querySelector('.history_points').innerHTML="Your mean score: " +sessionStorage.average_show + " on max. 20";

    }
    else{
        document.querySelector('.history_points').innerHTML="Your mean score: 0 on max. 20";
    }
});