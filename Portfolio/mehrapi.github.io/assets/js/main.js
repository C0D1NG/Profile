$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://sieblogt.github.io/posts/Alles/2020-09-30-Meine%20Erfahrung%20mit%20Open%20Source/',
            title: ' Meine Erfahrung mit Open Source',
        },
        {
            url: 'https://sieblogt.github.io/posts/Alles/2020-10-01-Wie%20ich%20in%20meiner%20Jekyll%20Webseite%20Fotogalerie%20erstellt%20habe/',
            title: ' Wie ich auf meiner Jekyll Webseite Fotogalerie erstellt habe',
        },
        {
            url: 'https://sieblogt.github.io/posts/Learning/2020-08-17-Wie%20ich%20Programmieren%20lerne/',
            title: 'Wie ich Programmieren lerne'
        },
        {
            url: 'https://sieblogt.github.io/posts/Coding/2020-05-20-Java%20lernen/',
            title: 'Java Lernen'
        },
       {
            url: 'https://sieblogt.github.io/directory/',
            title: 'Siehe meine Blogposts'
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://sieblogt.github.io');">

        <div class="blog-link">

            <h3><a href="https://sieblogt.github.io"></a>Blog besuchen für mehr Artikel</h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `; 

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}

