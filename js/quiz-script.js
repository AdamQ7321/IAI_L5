let preQuestions =
    [
        {
            "category": "Quotation",
            "type": "multiple",
            "difficulty": "medium",
            "question": "“Nine companions. So be it. You shall be the fellowship of the ring.” who said that words?",
            "correct_answer": "Elrond",
            "answers": ["Elrond", "Garadiel", "Sauron", "Peregrin Took"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "How many Rings of Power were forged in the second age?",
            "correct_answer": "20",
            "answers": ["8", "6", "12", "20"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In \"Fellowship of the Ring,\" what gift does Lady Galadriel give Gimli before the fellowship leaves Lothlorien?",
            "correct_answer": "Three strands of her hair",
            "answers": ["Three strands of her hair", "Elvish rope ", "A pint crafted from wood", "A dagger"]
        },
        {
            "category": "Names",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What was Gollum’s hobbit name?",
            "correct_answer": "Smeagol",
            "answers": ["Deagol", "Bandobras", "Smeagol", "Tobold"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Who is Shelob? ",
            "correct_answer": "Spider",
            "answers": ["An elf queen", "Spider"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How can Arwen choose a mortal life? ",
            "correct_answer": "Her family has human ancestry",
            "answers": ["All elves can choose a mortal life. ", "Her immortality is tied to her Evenstar necklace, which she gives away.", "Galadriel, Arwen's grandmother, used Nenya to give Arewen mortality. ", "Her family has human ancestry"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Which hobbit stabs the Witch King? ",
            "correct_answer": "Merry",
            "answers": ["Frodo", "Pippin", "Sam", "Merry"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who is Denethor II? ",
            "correct_answer": "Steward of Gondor",
            "answers": ["King of Gondor", "King of Rohan", "Aragorn's Uncle", "Steward of Gondor"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the name of Frodo’s sword that glows blue when orcs are near? ",
            "correct_answer": "Sting",
            "answers": ["Sting", "Earendil", "Anduin", "Mithril "]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Did Saruman allied himself with the Sauron? ",
            "correct_answer": "True",
            "answers": ["True", "False"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Where do the ghost army help fight off the forces of Sauron before they were relieved of the curse? ",
            "correct_answer": "Pelargir",
            "answers": ["Minas Tirith", "Pelargir", "Pelennor Fields", "Osgiliath "]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who stabbed Frodo with Morgul-blade?",
            "correct_answer": "Witch-King of Angmar",
            "answers": ["Witch-King of Angmar", "Gollum", "Cave Troll", "Shelob"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Elrond was lord of Rivendell?",
            "correct_answer": "True",
            "answers": ["False", "True"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the name of the Ent that befriends Merry and Pippin in Fangorn Forest?",
            "correct_answer": "Treebeard",
            "answers": ["Leaflock", "Beechbone", "Treebeard", "Fimbrethil"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What's name of Aragorn sword?",
            "correct_answer": "Anduril",
            "answers": ["Anduril", "Nasril", "Sting", "Glamdring"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Was Sauron a human being",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Where Frodo was born?",
            "correct_answer": "Shire",
            "answers": ["Shire", "Gondor", "Rohan", "Arnor"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who's most trusted lieutenant was Sauron in first and second era?",
            "correct_answer": "Morgoth",
            "answers": ["Bilbo", "Morgoth", "Saruman", "Smaug"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What are the names of wizards in middle-earth?",
            "correct_answer": "Alatar,Pallando,Saruman,Gandalf,Radagast",
            "answers": ["Gandalf,Sauron,Radagast,Orome,Tulkas", "Saruman,Gandalf,Orome,Alantar,Radagast", "Alatar,Pallando,Saruman,Gandalf,Radagast", "Saruman,Gandalf,Pallando,Orome,Radagast"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who heir Aragorn was? ",
            "correct_answer": "Isildur",
            "answers": ["Bilbo", "Sauron", "Elrond", "Isildur"]
        }];

let next = document.querySelector('.next');
let back=document.querySelector('.back')
let backonstart=document.querySelector('.backonstart');

let points=0;
let index = 0;

let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');



for( let i=0;i<answers.length;i++) {



    answers[i].addEventListener('click', function (event) {


        overwrite_class(answers[0], 'stop_click');
        overwrite_class(answers[1], 'stop_click');
        overwrite_class(answers[2], 'stop_click');
        overwrite_class(answers[3], 'stop_click');

        if (event.target.innerHTML === preQuestions[index].correct_answer) {

            overwrite_class(answers[i], 'correct');
            points++;
        }
        else{

            overwrite_class(answers[i], 'incorrect');

        }

        document.querySelector('.show_points').innerHTML="Your score:\n"+points;
    });
}

function setQuestion(index) {
    question.innerHTML = preQuestions[index].question;

    remove_overwrite(answers[0],'correct',  'incorrect', 'stop_click' );
    remove_overwrite(answers[1],'correct',  'incorrect', 'stop_click' );
    remove_overwrite(answers[2],'correct',  'incorrect', 'stop_click' );
    remove_overwrite(answers[3],'correct',  'incorrect', 'stop_click' );

    answers[0].style.display='block';
    answers[1].style.display='block';
    answers[2].style.display='block';
    answers[3].style.display='block';


    if(preQuestions[index].type==="multiple") {

        answers[0].innerHTML = preQuestions[index].answers[0];
        answers[1].innerHTML = preQuestions[index].answers[1];
        answers[2].innerHTML = preQuestions[index].answers[2];
        answers[3].innerHTML = preQuestions[index].answers[3];
    }
    else {

        answers[0].innerHTML = preQuestions[index].answers[0];
        answers[1].innerHTML = preQuestions[index].answers[1];
        answers[2].style.display="none";
        answers[3].style.display="none";
    }

    document.querySelector('.show_points').innerHTML="Your score:\n"+points;

}


setQuestion(index);



next.addEventListener('click', function () {

    index++;
    if(index<20){

        setQuestion(index);

    }
    else{

        document.querySelector(".backonstart").style.display = "block";
        document.querySelector('.next').style.display="none";
    }

});


back.addEventListener('click',function () { //<___________________________________________________________

    if (index>0){

        document.querySelector('.back').style.display="block";

    }
    else{

        document.querySelector('.back').style.display="none";

    }

    index--;

    setQuestion(index);

});


function overwrite_class (element,class_name){

    element.classList.add(class_name);

}
function remove_overwrite(element,class_name, class_name_2,class_name3){

    element.classList.remove(class_name,class_name_2,class_name3);

}

backonstart.addEventListener('click', function(){

    if(sessionStorage.tries) {

        sessionStorage.tries++;
    }
    else{

        sessionStorage.tries=1;
    }

    if(sessionStorage.total_points){

        sessionStorage.total_points= +sessionStorage.total_points+ +Number(points);

    }
    else{

        sessionStorage.total_points=Number(points);

    }

});

