document.addEventListener("DOMContentLoaded", function(event) { 
    // check for https
    if((location.protocol !== 'https:') && (location.protocol !== 'file:')) {
        console.error("Coping to the clipboard may not work on non-https sites.");
    }
    
    // copy parent content to clipboard
    function copy_function(e) {
        e.preventDefault();
        let copy_helper;
        
        if(!document.body.hasAttribute("data-booty-copy-helper-id")) {
            // no helper found, create one and store its id
            let copy_helper_random_id;
            
            // generate random - not existing - id for helper
            do {
                copy_helper_random_id = Math.random().toString(36).substring(2, 15);
            } while(document.getElementById(copy_helper_random_id))
            document.body.setAttribute("data-booty-copy-helper-id", copy_helper_random_id);
            
            // create helper and add it to body
            copy_helper = document.createElement("input");
            copy_helper.type = "text";
            copy_helper.id = copy_helper_random_id;
            copy_helper.style = "display: none;";
            document.body.appendChild(copy_helper);
            
        }
        else {
            // get helper element
            copy_helper = document.getElementById(document.body.getAttribute("data-booty-copy-helper-id"));
        }
        
        // get copy value, write it to helper, select it and copy it to clipboard
        let data_source_element = document.getElementById(this.getAttribute("data-booty-copy-target-id"));
        if(data_source_element) {
            copy_helper.value = data_source_element.innerText;
        }
        else {
            // get childs of parent
            let parent_childs = this.parentNode.childNodes;
            let output = "";
            
            // iter all childs of parent
            for(let i = 0; i < parent_childs.length; i++) {
                if(parent_childs[i] === this) { // skip the copy element
                    continue;
                }
                else {
                    if(output.length > 0) { // concat with spaces inbetween 
                        output += " ";
                    }
                    if (parent_childs[i].nodeType === 3) { // handle text elements
                        output += parent_childs[i].textContent.trim();
                    }
                    else { // handle html elements
                        output += parent_childs[i].innerText.trim();
                    }
                }
            }
            
            copy_helper.value = output.trim();
        }
        
        copy_helper.select();
        copy_helper.setSelectionRange(0, 99999); // for mobile browsers
        navigator.clipboard.writeText(copy_helper.value);
    }
    
    // search for booty-copy elements and add listener
    function add_event_listener(container) {
        // add eventlistener

        // Is the container a booty copy element?
        if((typeof container.classList === "object") && (typeof container.classList.contains === "function") && container.classList.contains("booty-copy")) {
            container.addEventListener("click", copy_function);
        }
        
        // Does the container contain any booty copy elements
        let copy_elements = container.getElementsByClassName("booty-copy");
        for(let i = 0; i < copy_elements.length; i++) {
            copy_elements[i].addEventListener("click", copy_function);
        }
    }
    
    // Init all existing booty-copy elemnts
    add_event_listener(document);
    
    // Listen for new booty-copy elements
    document.addEventListener("DOMNodeInserted", function (e) {
        if((typeof e !== "undefined") && (typeof e.target === "object") && (typeof e.target.getElementsByClassName === "function")) { //&& ) {
            add_event_listener(e.target);
        }
    }, false);
});