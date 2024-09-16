//#Selecting Elements

    //*getElementById
        console.dir(document.getElementById("description"));

    //*getElementByclassName
        console.dir(document.getElementsByClassName("oldImg"));

    //*getElementByTagName
        console.dir(document.getElementsByTagName("p"));

    //*query selectors
        console.dir(document.querySelector("div a"));
        console.dir(document.querySelectorAll("div a"));//selects all anchor tag inside div


//#setting content in objects
    let heading=document.querySelector("h1");
    heading.innerHTML=`<u>${heading.innerText}</u>`;

//#Mainpulating Attributes
    let img=document.querySelector('img');
    console.dir(img.getAttribute('id'));
    console.dir(img.getAttribute('class'));//as we can see it returns null so it have no class
    //now we give a class to this img
    img.setAttribute('class','bigimg');
    console.dir(img.getAttribute('class'));


//Mainpulating Styles
    //*---->with style attributes
        //Note---->we can only change inline style with style attributes
        let links=document.querySelectorAll('.box a');
        for(link of links){
                link.style.color="purple";
        }
    
    //*---->using classList
        /*
        -> classList.add() to add new classes
        -> classList.remove() to remove classes 
        -> classList.contains() to check if class exist 
        -> classList.toggle() to toggle between add and remove
        */

        let heading2=document.querySelector('h1');
        //first we createw a class and add it to h1
        heading2.classList.add("green");

//Navigation
        //*parentElement
        //*children
        //*childElementCount
        //*previousElementSibling/nextElementSibling
         
        let elem=document.querySelector('.box ul');
        console.dir(elem.children);
        console.dir(elem.childElementCount);
        console.dir(elem.parentElement);


//Adding Elements
        //first we will create a element
            let p1=document.createElement('p');
        
        //appendChild(Element)------>add only element no strings or text
            p1.innerText="example of  appendChild()------>add only element no strings or text ";
            let a1=document.querySelector('.box');
            a1.appendChild(p1);

        //append(Element)--------->add text,strings and element too----------->frequently used
            let p2=document.createElement('button');
            p2.innerText="Example of append";
            let a2=document.querySelector('.box');
            a2.append(p2);
            a2.append("we can also append text");

        //prepend(element)--------->add at first/starting
           let p3=document.createElement('button');
           p3.innerText="example of prepend";
           let a3=document.querySelector('.box');
           a3.prepend(p3);
           a3.prepend("add at first/starting");
          
        //insertAdjacent(where ,element)
            //afterbegin..	After the beginning of the element (first child)
            //afterend..	After the element
            //beforebegin..	Before the element
            //beforeend..	Before the end of the element (last child)

            let p4=document.createElement('button');
            p4.innerText="insertAdjacent";
            let a4=document.querySelector('p');
            a4.insertAdjacentElement("beforebegin",p4);


//Removing Element
        //removeChild(element);
        //rempve(element);