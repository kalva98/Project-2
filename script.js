/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

let studentList = document.querySelectorAll('.student-item');           //Global variables for student.
let studentPerPage = 10;                                                //Number of items per page.

const showPage = (list, page) => {                                      //Function shows 10 students at a time and hides the remainder of students.
   let startIndex = (page * studentPerPage) -studentPerPage;            //Finds the first student based on the index number.
   let endIndex = page * studentPerPage;                                //Finds the last student based on the index number.

   for (let i = 0; i < list.length; i++) {                              //Loops through list of students.
      if (i >= startIndex && i < endIndex) {                            //Shows student list between startIndex and endIndex
         list[i].style.display = "block";
      } else {
         list[i].style.display = "none";                                //Hides remaining student.
      }
   }
}
showPage(studentList, 1);                                               //Calling the showPage function.      


const appendPageLinks = (list) => {                                     //Function creates, appends, and displays page links.
   let totalPages = Math.ceil(list.length / studentPerPage);            //Calculates total number of pages needed.
  
   let div = document.createElement('div');                             //Creates div element.
   let page = document.querySelector('.page')                           //Selector is pulling .page from HTML.
   let ul = document.createElement('ul');                               //Creates ul.
   
   div.className = 'pagination';                                        //Gives div pagination class name.
   page.appendChild(div);                                               //Appends div to .page
   div.appendChild(ul);                                                 //Appends ul to div.
  
   for (let i = 1; i <= totalPages; i++) {                              //Loop adds <li> and <a> tags to the page number.                  
      let li = document.createElement('li');                            //Creates <li> tags.
      let a = document.createElement('a');                              //Creates <a> tags.
      a.setAttribute = ('href', '#');
      a.textContent = i;                                                //Creates page number.
      ul.appendChild (li);                                              //Appends li to ul.
      li.appendChild (a);                                               //Appends a to li.
      
   
      ul.addEventListener ('click', (e) => {                            //Listens for page button to be clicked and takes the user to the respective pages.
      let key = event.target;                                           //Targets which link is clisked.
      let page = event.target.textContent;                              //Holds number value of each page.
      showPage(list, page);                                             //Displays the page that was clicked.

      
      let allLinks = document.querySelectorAll('a');                    //Selects each <a> tag and stores them as a variable.
      for (let i = 0; i < allLinks.length; i++) {                       //Loops through every <a> tag.
         allLinks[i].className = 'none';                                //removes active class from other links.
      }
      key.className = 'active';                                         //Makes the link that's clicked active.
      
    });
   }
}    
 
 appendPageLinks(studentList);                                          //Calling the appendPage function.






