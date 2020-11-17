
        
       var search_btn = document.getElementById("search_btn");
       search_btn.addEventListener("click", function () {
           document.getElementById("no_match").style.display = "none";
           var text = document.getElementById("search_text").value;
           if (text.length < 1) {
               window.alert("Please enter a category!");
               return false;
           }
       
           //window.alert(text);
           //retriving blogs.
           var dbBlogs = firebase.database().ref().child("blogs").orderByChild("counter");
       
           dbBlogs.once("value", function (blogs) {
       
               if (blogs.exists()) {
                   var blogshtml = "";
                   var user = firebase.auth().currentUser.uid;
                   document.getElementById("blog_section").innerHTML = "";
                   blogs.forEach(function (singleblog) {
       
                       if (singleblog.val().category == text) {
       
                                   
                           document.getElementById("spinner").style.visibility = "visible";
                                   
                           //first div
                           var x = document.createElement("DIV");
                           var x_att = document.createAttribute("class");
                           x_att.value = ("col mb-4");
                           x.setAttributeNode(x_att);
       
       
                           //second div
                           var y = document.createElement("DIV");
                           var y_att = document.createAttribute("class");
                           y_att.value = ("card border rounded-0");
                           y.setAttributeNode(y_att);
                           y.style.height = "520px";
       
                           //image tag
                           var image = document.createElement("IMG");
                           image.setAttribute("src", singleblog.val().img_url);
                           image.setAttribute("class", "card-img-top mb-0 rounded-0");
       
                           //body div
                           var b_div = document.createElement("DIV");
                           b_div.setAttribute("class", "card-body mt-0");
       
                           //date
                           var sm_text = document.createElement("SMALL");
                           sm_text.setAttribute("class", "text-muted");
                           sm_text.style.fontWeight = "500";
                           sm_text.textContent = singleblog.val().date;
       
                           //body title
                           var heading = document.createElement("H5");
                           heading.setAttribute("class", "card-title mt-2 mb-0");
                           heading.textContent = singleblog.val().title;
       
                           //subtitle
                           var para1 = document.createElement("P");
                           para1.setAttribute("class", "card-subtitle mt-1 mb-2 text-muted");
                           para1.textContent = singleblog.val().desc;
                           para1.style.fontSize = "1.1rem";
                           para1.style.lineHeight = "1.2rem";
                           para1.style.fontWeight = "500";
                           para1.style.fontFamily = "'Alegreya Sans', sans-serif";
       
                           //content
                           var para2 = document.createElement("P");
                           para2.setAttribute("class", "card-text demo-1");
                           para2.style.fontSize = "1.1rem";
                           para2.style.fontWeight = "500";
                           para2.textContent = singleblog.val().content;
       
                           para2.style.fontFamily = "'Alegreya Sans', sans-serif";
       
                           //read more
                           var read = document.createElement("button");
                           read.setAttribute("class", "btn btn-link pl-0");
                           read.textContent = "Read more";
                           // style = "color: black; font-size: .850rem; font-weight: 500;"
                           read.style.color = "black";
                           read.style.fontSize = ".850rem";
                           read.style.fontWeight = "500";
                           read.setAttribute("data-toggle", "modal")
                           read.setAttribute("data-target", "#" + singleblog.key);
       
                           //hr
                           var hr = document.createElement("HR");
       
                           //footer
                           var footer = document.createElement("DIV");
                           footer.setAttribute("class", "card-footer border-0 bg-white");
                           footer.appendChild(read);
                           footer.appendChild(hr);
       
                           //comment button                      
                           var cmt_btn = document.createElement("button");
                           cmt_btn.innerHTML = "Comments";
                           cmt_btn.setAttribute("class", "btn btn-link btn-sm pl-0 mr-1");
                           cmt_btn.style.color = "black";
       
       
                           //comment click
                           cmt_btn.addEventListener("click", function () {
                               //window.location.href = "#" + singleblog.key;
                           });
       
                           //span tag
                           var badge = document.createElement("SPAN");
       
       
       
                           //creating modal
       
                           var m_div1 = document.createElement("DIV");
                           m_div1.setAttribute("class", "modal fade bd-example-modal-lg");
                           m_div1.setAttribute("id", singleblog.key);
                           m_div1.setAttribute("data-backdrop", "static");
                           m_div1.setAttribute("tabindex", "-1");
                           m_div1.setAttribute("role", "dialog");
                           m_div1.setAttribute("aria-labeledby", "staticBackdropLabel");
                           m_div1.setAttribute("aria-hidden", "true");
       
                           var m_div2 = document.createElement("DIV");
                           m_div2.setAttribute("class", "modal-dialog modal-lg");
                           m_div2.setAttribute("role", "document");
       
                           var m_div3 = document.createElement("DIV");
                           m_div3.setAttribute("class", "modal-content border-0 rounded");
       
                           var m_header = document.createElement("DIV");
                           m_header.setAttribute("class", "modal-header border-0");
                           m_header.style.backgroundColor = "#0b2239";
       
                           //modal body
                           var m_body = document.createElement("DIV");
                           m_body.setAttribute("class", "modal-body px-5");
       
                           //modal title                   
                           var m_title = document.createElement("H5");
                           m_title.setAttribute("class", "modal-title");
                           m_title.setAttribute("id", "staticBackdropLabel");
                           m_title.textContent = "Blog";
                           m_title.style.color = "white";
       
                           //close btn
                           var btn_cls = document.createElement("BUTTON");
                           btn_cls.setAttribute("type", "button");
                           btn_cls.setAttribute("class", "btn btn-link ml-auto p-0");
                           btn_cls.setAttribute("data-dismiss", "modal");
                           //btn_cls.setAttribute("aria-label", "Close");                                  
       
                           var img_cls = document.createElement("IMG");
                           img_cls.setAttribute("src", "images/close.png");
                           img_cls.style.height = "16px";
                           img_cls.style.width = "16px";
       
                           btn_cls.appendChild(img_cls);
       
                           //modal content....
       
                           //date
                           var sm_text1 = document.createElement("SMALL");
                           sm_text1.setAttribute("class", "text-muted text-small");
                           sm_text1.textContent = singleblog.val().date;
                           sm_text1.style.fontWeight = "600";
       
                           //blog title
                           var b_heading = document.createElement("H2");
                           b_heading.style.fontWeight = "500";
                           b_heading.setAttribute("class", "mt-2 mb-0");
                           b_heading.style.lineHeight = "1.3";
                           b_heading.style.fontSize = "1.5625rem";
                           b_heading.style.color = "#222";
                           b_heading.textContent = singleblog.val().title;
       
                           //blog sub-title
                           var b_sub_title = document.createElement("h2");
                           b_sub_title.setAttribute("class", "mb-3 mt-0");
                           b_sub_title.textContent = singleblog.val().desc;
                           b_sub_title.style.fontSize = "1.1rem";
                           b_sub_title.style.color = "#788487";
                           b_sub_title.style.fontFamily = "'Alegreya Sans', sans-serif";
       
                           //blog image
                           var b_img = document.createElement("IMG");
                           b_img.setAttribute("src", singleblog.val().img_url);
                           b_img.setAttribute("class", "card-img-top mb-0 rounded-0");
       
                           //blog content
                           var para3 = document.createElement("P");
                           para3.setAttribute("class", "card-text my-3 text-justify");
                           para3.textContent = singleblog.val().content;
                           para3.style.fontSize = "1rem"
                           para3.style.whiteSpace = "pre-line";
                           //  para3.style.textTransform = "Initial";
       
       
                           //hr
                           var hr2 = document.createElement("HR");
       
                           //comments
                           var cmt = document.createElement("H6");
       
                           cmt.style.fontSize = "1rem";
                           cmt.style.lineHeight = "1.5";
       
                           //getting no of comments;
                           var cmts_ref = firebase.database().ref().child("blogs").child(singleblog.key).child("comments");
                           cmts_ref.on("value", function (cmts) {
                               badge.innerHTML = cmts.numChildren();
                               cmt.textContent = "Comments  " + cmts.numChildren();
                           });
       
                           //modal footer
                           var mf_div = document.createElement("DIV");
                           mf_div.setAttribute("class", "row d-flex");
       
                           //here goes comments
                           var mf_div_cmt = document.createElement("DIV");
                           mf_div_cmt.setAttribute("class", "col-8 border-right");
                           mf_div_cmt.setAttribute("id", singleblog.key);
                           // mf_div_cmt.style.backgroundColor = "#f3f5fb";
       
                           //here goes profile and category
                           var mf_div_profile = document.createElement("DIV");
                           mf_div_profile.setAttribute("class", "col-md-4 px-3");
       
                           var cmt_div = document.createElement("DIV");
                           cmt_div.setAttribute("class", "input-group input-group-lg input-group-merge border rounded");
       
                           var cmt_div1 = document.createElement("DIV");
                           cmt_div1.setAttribute("class", "input-group-prepend ");
       
                           var pen_img_span = document.createElement("SPAN");
                           pen_img_span.setAttribute("class", "input-group-text bg-white border-0 pr-2");
       
                           var img_pen = document.createElement("IMG");
                           img_pen.setAttribute("src", "images/pen.svg");
       
                           var input_cmt = document.createElement("INPUT");
                           input_cmt.setAttribute("type", "text");
                           input_cmt.setAttribute("class", "form-control border-0 px-1 py-1");
                           input_cmt.setAttribute("placeholder", "Write a comment...");
                           input_cmt.style.fontSize = ".900rem";
                           input_cmt.style.fontWeight = "400";
                           input_cmt.setAttribute("id", "input_cmt");
       
                           var cmt_btn_div = document.createElement("DIV");
                           cmt_btn_div.setAttribute("class", "input-group-append bg-white");
       
                           var cmt_btn_span = document.createElement("SPAN");
                           cmt_btn_span.setAttribute("class", "input-group-text bg-white border-0 py-0 pl-2 pr-2");
       
                           var post_btn = document.createElement("BUTTON");
                           post_btn.setAttribute("type", "button");
                           post_btn.setAttribute("class", "btn btn-sm btn-primary")
                           post_btn.textContent = "Post";
                           post_btn.disabled = "true";
                           post_btn.setAttribute("id", "post_btn");
                           post_btn.setAttribute("onclick", "check_input()");
       
                           //enabling btn on input value
                           input_cmt.oninput = function () {
                               if (this.value.length > 0) {
                                   post_btn.disabled = false;
                               }
                               else {
                                   post_btn.disabled = true;
                               }
                           };
       
                           //posting comment
                           post_btn.addEventListener("click", function () {
                               if (input_cmt.value == "") {
                                   window.alert("empty comment");
                               }
                               else {
                                   //window.alert(input_cmt.value);
                                   var cmt_reff = firebase.database().ref("blogs").child(singleblog.key).child("comments");
                                   var a = cmt_reff.push();
                                   var user = firebase.auth().currentUser.uid;
                                   a.child("userId").set(user);
                                   a.child("text").set(input_cmt.value);
                                   //date of comment
                                   var today = new Date();
       
                                   const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                                   "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
       
                                   var date = monthNames[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
                                   a.child("date").set(date).then(function () {
                                       // window.alert("Comment posted!");
       
                                       //uploaded comment
                                       var commentsRef = firebase.database().ref("blogs").child(singleblog.key).child("comments").child(a.key);
                                       commentsRef.on('value', function (data) {
                                           //window.alert(data.val().text);
                                           //adding newly added comment
                                           var single_cmnt_div = document.createElement("DIV");
                                           single_cmnt_div.style.backgroundColor = "#f3f5fb";
                                           single_cmnt_div.setAttribute("class", "card my-3 px-2 pt-2 pb-2 border rounded");
                                           var cmt_user = document.createElement("SMALL");
                                           cmt_user.style.fontSize = ".800rem";
                                           cmt_user.style.fontWeight = "600";
                                           cmt_user.style.lineHeight = ".700rem";
                                           cmt_user.setAttribute("class", "text-small mb-0");
       
                                           var sm_text2 = document.createElement("SMALL");
                                           sm_text2.setAttribute("class", "ml-auto text-small mt-0");
                                           sm_text2.textContent = data.val().date;
                                           sm_text2.style.color = "#000";
                                           sm_text2.style.fontWeight = "600";
                                           sm_text2.style.fontSize = ".720rem";
                                           sm_text2.style.lineHeight = ".700rem";
       
                                           var cmt_txt = document.createElement("P");
                                           cmt_txt.style.fontSize = ".800rem";
                                           cmt_txt.style.lineHeight = "1rem";
                                           cmt_txt.style.fontWeight = "400";
                                           cmt_txt.style.marginTop = "5px";
                                           cmt_txt.style.marginbottom = "4px";
                                           cmt_txt.setAttribute("class", "p-0 mb-0");
                                           cmt_txt.textContent = data.val().text;
       
                                           var div_flex_user_date = document.createElement("DIV");
                                           div_flex_user_date.setAttribute("class", "d-flex mb-2");
       
                                           div_flex_user_date.appendChild(cmt_user);
                                           div_flex_user_date.appendChild(sm_text2);
                                           single_cmnt_div.appendChild(div_flex_user_date);
                                           single_cmnt_div.appendChild(cmt_txt);
       
                                           var user_ref = firebase.database().ref("users").child(data.val().userId);
                                           user_ref.on("value", function (cmt_user_single) {
                                               cmt_user.textContent = cmt_user_single.val().username;
       
                                           });
       
                                           //div for delete and reply buttons
                                           var div_del_repl = document.createElement("DIV");
                                           div_del_repl.setAttribute("class", "d-flex");
       
                                           //del btn
                                           var del_cmt_btn = document.createElement("BUTTON");
                                           del_cmt_btn.setAttribute("class", "btn btn-link btn-sm ml-auto");
                                           del_cmt_btn.style.color = "black";
                                           del_cmt_btn.textContent = "Delete"
                                           del_cmt_btn.style.fontSize = ".770rem";
                                           del_cmt_btn.style.fontWeight = "400";
       
                                           //checking cmnt
                                           if (firebase.auth().currentUser.uid == data.val().userId) {
       
                                               //deleting a cmnt
                                               del_cmt_btn.addEventListener("click", function () {
                                                   var del_cmnt_ref = firebase.database().ref("blogs").child(singleblog.key).child("comments").child(data.key);
       
                                                   del_cmnt_ref.remove().then(function () {
                                                       //window.alert("Comment removed!");
                                                       mf_div_cmt.removeChild(single_cmnt_div);
                                                   }).catch(function (err) {
                                                       window.alert("Failed:" + err);
                                                   });;
       
                                               });
       
                                               //appending btn to div and div to cmt_div
                                               div_del_repl.appendChild(del_cmt_btn);
                                               single_cmnt_div.appendChild(div_del_repl);
       
                                           }
                                           mf_div_cmt.appendChild(single_cmnt_div);
       
                                       });
       
                                   });
       
       
                               }
                           });
       
       
                           cmt_btn_span.appendChild(post_btn);
                           cmt_btn_div.appendChild(cmt_btn_span);
       
                           pen_img_span.appendChild(img_pen);
                           cmt_div1.appendChild(pen_img_span);
       
                           cmt_div.appendChild(cmt_div1);
                           cmt_div.appendChild(input_cmt);
                           cmt_div.appendChild(cmt_btn_div);
       
                           //model footer appending childs 
                           mf_div_cmt.appendChild(cmt);
                           mf_div_cmt.appendChild(cmt_div);
                           mf_div.appendChild(mf_div_cmt);
       
       
                           //retrieving comments
                           var single_cmt_ref = firebase.database().ref("blogs").child(singleblog.key).child("comments");
                           single_cmt_ref.once("value", function (cmnts) {
       
                               if (cmnts.exists()) {
                                   cmnts.forEach(function (single_cmnt) {
       
                                       var single_cmnt_div = document.createElement("DIV");
                                       single_cmnt_div.style.backgroundColor = "#f3f5fb";
                                       single_cmnt_div.setAttribute("class", "card my-3 px-2 pt-2 pb-2 border rounded");
       
       
                                       var cmt_user = document.createElement("SMALL");
                                       cmt_user.style.fontSize = ".800rem";
                                       cmt_user.style.fontWeight = "600";
                                       cmt_user.style.lineHeight = ".700rem";
                                       cmt_user.setAttribute("class", "text-small mb-0");
       
                                       var sm_text2 = document.createElement("SMALL");
                                       sm_text2.setAttribute("class", "ml-auto text-small mt-0");
                                       sm_text2.textContent = single_cmnt.val().date;
                                       sm_text2.style.fontWeight = "600";
                                       sm_text2.style.color = "#000";
                                       sm_text2.style.fontSize = ".720rem";
                                       sm_text2.style.lineHeight = ".700rem";
       
       
                                       var cmt_txt = document.createElement("P");
                                       cmt_txt.style.fontSize = ".800rem";
                                       cmt_txt.style.lineHeight = "1rem";
                                       cmt_txt.style.fontWeight = "400";
                                       cmt_txt.style.marginTop = "5px";
                                       cmt_txt.style.marginbottom = "4px";
                                       cmt_txt.setAttribute("class", "p-0 mb-0");
                                       cmt_txt.textContent = single_cmnt.val().text;
       
                                       var div_flex_user_date = document.createElement("DIV");
                                       div_flex_user_date.setAttribute("class", "d-flex mb-2");
       
                                       div_flex_user_date.appendChild(cmt_user);
                                       div_flex_user_date.appendChild(sm_text2);
                                       single_cmnt_div.appendChild(div_flex_user_date);
                                       single_cmnt_div.appendChild(cmt_txt);
       
                                       var user_ref = firebase.database().ref("users").child(single_cmnt.val().userId);
                                       user_ref.on("value", function (cmt_user_single) {
                                           cmt_user.textContent = cmt_user_single.val().username;
       
                                       });
       
       
       
                                       //div for delete and reply buttons
                                       var div_del_repl = document.createElement("DIV");
                                       div_del_repl.setAttribute("class", "d-flex");
       
                                       //del btn
                                       var del_cmt_btn = document.createElement("BUTTON");
                                       del_cmt_btn.setAttribute("class", "btn btn-link btn-sm ml-auto");
                                       del_cmt_btn.style.color = "black";
                                       del_cmt_btn.textContent = "Delete"
                                       del_cmt_btn.style.fontSize = ".770rem";
                                       del_cmt_btn.style.fontWeight = "400";
       
                                       //checking cmnt
                                       if (firebase.auth().currentUser.uid == single_cmnt.val().userId) {
       
                                           //deleting a cmnt
                                           del_cmt_btn.addEventListener("click", function () {
                                               var del_cmnt_ref = firebase.database().ref("blogs").child(singleblog.key).child("comments").child(single_cmnt.key);
       
                                               del_cmnt_ref.remove().then(function () {
                                                   //window.alert("Comment removed!");
                                                   mf_div_cmt.removeChild(single_cmnt_div);
                                               }).catch(function (err) {
                                                   window.alert("Failed:" + err);
                                               });;
       
                                           });
       
                                           //appending btn to div and div to cmt_div
                                           div_del_repl.appendChild(del_cmt_btn);
                                           single_cmnt_div.appendChild(div_del_repl);
       
                                       }
                                       //appending single comment
                                       mf_div_cmt.appendChild(single_cmnt_div);
       
                                   });
                               }
       
       
       
                           });
       
       
       
       
       
       
                           //profile and category design
                           var blog_category = document.createElement("p");
                           blog_category.style.fontSize = ".950rem";
                           blog_category.style.lineHeight = "1.3";
                           blog_category.textContent = "Category";
                           blog_category.style.fontWeight = "500";
                           blog_category.style.marginBottom = "0px";
       
                           var cate_name = document.createElement("STRONG");
                           cate_name.setAttribute("class", "text-primary mb-5");
                           cate_name.textContent = singleblog.val().category;
                           cate_name.style.fontWeight = "500";
       
                           //written by
                           var prof = document.createElement("p");
                           prof.setAttribute("class", "mt-3 mb-2")
                           prof.style.fontSize = ".950rem";
                           prof.style.fontWeight = "500";
                           prof.style.lineHeight = "1.3";
                           prof.textContent = "Written by"
       
                           //user's info
                           var prof_div1 = document.createElement("DIV");
                           prof_div1.setAttribute("class", "row ")
       
                           var div_prof_img = document.createElement("DIV");
                           div_prof_img.setAttribute("class", "col-auto");
       
                           var prof_img = document.createElement("IMG");
                           prof_img.setAttribute("src", "images/person.svg");
                           prof_img.setAttribute("class", "img-thumbnail rounded-circle border-0 p-0")
                           prof_img.style.height = "2.90rem";
                           prof_img.style.width = "2.90rem";
       
                           prof_img.addEventListener("click", function () {
                               sessionStorage.setItem("User_Id", singleblog.val().userId);
                               window.location.href = "Profile.aspx";
                           });
       
                           var div_prof_name = document.createElement("DIV");
                           div_prof_name.setAttribute("class", "col pl-0 my-auto");
       
                           //name
                           var prof_name = document.createElement("H6");
                           prof_name.setAttribute("class", "mb-0 text-primary");
                           prof_name.style.fontWeight = "500";
                           //prof_name.style.fontSize = ".830rem";
       
                           //email
                           var prof_mail = document.createElement("P");
                           prof_mail.setAttribute("class", "mb-0");
                           prof_mail.style.fontWeight = "500";
                           prof_mail.style.fontSize = ".830rem";
       
                           //getting prof info
                           var prof_user = firebase.database().ref().child("users").child(singleblog.val().userId);
                           prof_user.on("value", function (prof) {
                               if (prof.val().image != null) {
                                   prof_img.setAttribute("src", prof.val().image);
                               }
       
                               prof_name.textContent = prof.val().username;
                               prof_mail.textContent = prof.val().email;
                           });
       
                           //appending profile childs
                           div_prof_img.appendChild(prof_img);
                           div_prof_name.appendChild(prof_name);
                           div_prof_name.appendChild(prof_mail);
                           prof_div1.appendChild(div_prof_img);
                           prof_div1.appendChild(div_prof_name);
                                
       
                           //appending to category and profile
                           mf_div_profile.appendChild(blog_category);
                           mf_div_profile.appendChild(cate_name);
                           mf_div_profile.appendChild(prof);
                           mf_div_profile.appendChild(prof_div1);
                           mf_div.appendChild(mf_div_profile);
       
       
                           m_body.appendChild(sm_text1);
                           m_body.appendChild(b_heading);
                           m_body.appendChild(b_sub_title);
                           m_body.appendChild(b_img);
                           m_body.appendChild(para3);
                           m_body.appendChild(hr2);
                           //m_body.appendChild(cmt);
                           m_body.appendChild(mf_div);
       
                           m_header.appendChild(m_title);
                           m_header.appendChild(btn_cls);
                           m_div3.appendChild(m_header);
                           m_div3.appendChild(m_body);
                           m_div2.appendChild(m_div3);
                           m_div1.appendChild(m_div2);
       
       
       
       
                           //retriving user
                           //var single_user = firebase.database().ref().child("users").child("");
                           //single_user.once("value", function (user_details) {
                           //    //user name
                           //    //var uname = document.createElement("P");
                           //    //uname.setAttribute("class", "card-text");
                           //    //uname.textContent = user_details.val().username;
       
       
                           //});
       
       
                           badge.setAttribute("class", "badge badge-light ml-1");
       
                           cmt_btn.appendChild(badge);
                           footer.appendChild(cmt_btn);
       
       
       
                           //appending child
                           b_div.appendChild(sm_text);
                           b_div.appendChild(heading);
                           b_div.appendChild(para1);
                           b_div.appendChild(para2);
                           // b_div.appendChild(read);
                           // b_div.appendChild()
                           //b_div.appendChild(hr);
       
       
                           y.appendChild(image);
                           y.appendChild(b_div);
                           y.appendChild(footer);
                           y.appendChild(m_div1);
       
                           x.appendChild(y);
                           document.getElementById("spinner").style.visibility = "hidden";
                                   
                           document.getElementById("blog_section").appendChild(x);
       
       
                       }
       
                   });
       
                   if (document.getElementById("blog_section").innerHTML=="") {
                       // window.alert("No such blogs!");
                       document.getElementById("no_match").style.display = "block";
                   }
       
               }
               else {
                   document.getElementById("spinner").style.visibility = "hidden";
                   window.alert("No blogs found!")
               }
           });
       
       });
       